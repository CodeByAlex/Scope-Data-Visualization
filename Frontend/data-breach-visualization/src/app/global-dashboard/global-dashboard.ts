import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api-service/api.service';
import {Actor} from '../model/Actor';
import {Incident} from '../model/Incident';
import {Organization} from '../model/Organization';
import {GraphDataService} from '../graph-data-service/graph-data.service';
import {YearRange} from '../dto/YearRange';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'world-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.scss']
})
export class GlobalDashboardComponent implements OnInit {

  DEFAULT_OPTION = 'All';
  form: FormGroup;
  incidentCountryMap: Map<string, Incident[]>;

  countryList: string [] = [];
  yearComparisonObject = {};
  actorComparisonObject = {};
  industryComparisonObject = {};
  recordsLostComparisonObject = {};

  constructor(private apiService: ApiService, private graphDataService: GraphDataService) {
    this.form = this.setUpForm();
    this.subscribeToCountrySelect();
  }

  ngOnInit() {
    this.apiService.getAllIncidents().then((incidents) => {
      this.incidentCountryMap = this.getIncidentCountryMap(incidents);
      this.getGraphComparisonObjects(incidents);
    });
  }

  setUpForm() {
    return new FormGroup({
      countryControl: new FormControl()
    });
  }

  subscribeToCountrySelect() {
    this.form.get('countryControl').valueChanges.subscribe(() => {
      if (this.incidentCountryMap && this.incidentCountryMap.get(this.form.get('countryControl').value)) {
        if (this.form.get('countryControl').value) {
          this.getGraphComparisonObjects(this.incidentCountryMap.get(this.form.get('countryControl').value));
        }
      }
    });
  }

  getGraphComparisonObjects(incidents: Incident []) {
    this.apiService.getIncidentYearRange().subscribe((yearRange) => {
      this.yearComparisonObject = this.getYearComparisonObject(incidents, yearRange);
      this.recordsLostComparisonObject = this.getRecordsLostComparisonObject(incidents, yearRange);
    });

    this.apiService.getAllActors().then((actors) => {
      const actorIdMap: Map<number, Actor> = new Map< number, Actor>();
      for (const actor of actors) {
        actorIdMap.set(actor.actorId, actor);
      }
      this.actorComparisonObject = this.getActorPatternComparisonObject(incidents, actorIdMap);
    });

    this.apiService.getAllOrgs().subscribe((orgs) => {
      this.industryComparisonObject = this.getIndustryComparisonObject(incidents, orgs);
    });
  }

  getYearComparisonObject(incidentList: Incident [], yearRange: YearRange) {
    const labels = [];
    const data = [];
    const dataMap = this.getYearComparisonMap(incidentList, yearRange);
    dataMap.forEach((value: number, key: string) => {
      labels.push(key);
      data.push(value);
    });
    return this.graphDataService.getlineChartDataObject('Incidents', labels, data);
  }

  getRecordsLostComparisonObject(incidentList: Incident [], yearRange: YearRange) {
    const labels = [];
    const data = [];
    const dataMap = this.getRecordsLostComparisonMap(incidentList, yearRange);
    dataMap.forEach((value: number, key: string) => {
      labels.push(key);
      data.push(value);
    });
    return this.graphDataService.getlineChartDataObject('Records lost', labels, data);
  }

  getActorPatternComparisonObject(incidentList: Incident [], actorIdMap: Map<number, Actor> ) {
    const labels = [];
    const data = [];
    const dataMap = this.getActorPatternComparisonMap(incidentList, actorIdMap);

    dataMap[Symbol.iterator] = function* () {
      yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }

    dataMap.forEach((value: number, key: string) => {
      if (data.length < 5) { // to eliminate low range actor patterns
        labels.push(key);
        data.push(value);
      } else {
        return;
      }
    });
    return this.graphDataService.getPieChartDataObject(labels, data);
  }

  getIndustryComparisonObject(incidentList: Incident [], orgList: Organization []) {
    const labels = [];
    const data = [];
    const dataMap = this.getIndustryComparisonMap(incidentList, orgList);
    dataMap[Symbol.iterator] = function* () {
      yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }

    dataMap.forEach((value: number, key: string) => {
      if (data.length < 5) { // to eliminate low range actor industries
        labels.push(key);
        data.push(value);
      } else {
        return;
      }
    });
    return this.graphDataService.getRadarChartDataObject('Breaches per industry', labels, data);
  }

  getYearComparisonMap(incidentList: Incident [], yearRange: YearRange) {
    const dataMap = new Map<string, number>();
    if (yearRange && incidentList) {
      for (let year = yearRange.minYear; year <= yearRange.maxYear; year++) {
        let numIncidentsPerYear = 0;
        for (const incident of incidentList) {
          if (incident.reportYear == year) {
            numIncidentsPerYear += 1;
          }
        }
        dataMap.set(year.toString(), numIncidentsPerYear)
      }
    }
    return dataMap;
  }

  getRecordsLostComparisonMap(incidentList: Incident [], yearRange: YearRange) {
    const dataMap = new Map<string, number>();
    if (yearRange && incidentList) {
      for (let year = yearRange.minYear; year <= yearRange.maxYear; year++) {
        let numRecordsPerYear = 0;
        for (const incident of incidentList) {
          if (incident.reportYear == year) {
            numRecordsPerYear += incident.numRecordsLost;
          }
        }
        dataMap.set(year.toString(), numRecordsPerYear);
      }
    }
    return dataMap;
  }

  getActorPatternComparisonMap(incidentList: Incident [], actorIdMap: Map<number, Actor>) {
    const dataMap = new Map<string, number>();
    if (actorIdMap && incidentList) {
      for (const incident of incidentList) {
        if (dataMap.get(actorIdMap.get(incident.actorId).actorPattern)) {
          dataMap.set(actorIdMap.get(incident.actorId).actorPattern, dataMap.get(actorIdMap.get(incident.actorId).actorPattern) + 1);
        } else {
          dataMap.set(actorIdMap.get(incident.actorId).actorPattern, 1);
        }
      }
    }
    return dataMap;
  }

  getIndustryComparisonMap(incidentList: Incident [], orgList: Organization []) {
    const dataMap = new Map<string, number>();
    for (const incident of incidentList) {
      for (const org of orgList) {
        if (incident.orgId == org.orgId) {
          if (dataMap.get(org.orgIndustry)) {
            dataMap.set(org.orgIndustry, dataMap.get(org.orgIndustry) + 1);
          } else {
            dataMap.set(org.orgIndustry, 1);
          }
        }
      }
    }
    return dataMap;
  }

  getIncidentCountryMap(incidentList: Incident []) {
    const incidentCountryMap: Map<string, Incident[]> = new Map<string, Incident[]>();

    for (const incident of incidentList) {
      if (incidentCountryMap.get(incident.country)) {
        // country is already in map
        incidentCountryMap.get(incident.country).push(incident);
        incidentCountryMap.get(this.DEFAULT_OPTION).push(incident);
      } else {
        // first time country is inserted
        incidentCountryMap.set(incident.country, [incident]);
        incidentCountryMap.set(this.DEFAULT_OPTION, [incident]);

        this.countryList.push(incident.country);
      }
    }
    this.countryList.sort();
    return incidentCountryMap;
  }


  getLeftPositionOption() {
    return this.graphDataService.getLegendPositionLeftOption();
  }
}
