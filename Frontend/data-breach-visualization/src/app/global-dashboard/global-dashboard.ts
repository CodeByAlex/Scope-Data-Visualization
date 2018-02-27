import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {Actor} from "../models/Actor";
import {Incident} from "../models/Incident";
import {Organization} from "../models/Organization";
import {GraphDataService} from "../graph-data-service/graph-data.service";
import {YearRange} from "../dto/YearRange";

@Component({
  selector: 'world-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.scss']
})
export class GlobalDashboardComponent implements OnInit {
  yearComparisonObject = {};
  actorComparisonObject = {};
  industryComparisonObject = {};
  recordsLostComparisonObject = {};

  constructor(private apiService: ApiService, private graphDataService: GraphDataService) {}

  ngOnInit() {
    this.apiService.getAllIncidents().then((incidents) => {
      this.apiService.getIncidentYearRange().subscribe((yearRange) => {
        this.yearComparisonObject = this.getYearComparisonObject(incidents, yearRange);
        this.recordsLostComparisonObject = this.getRecordsLostComparisonObject(incidents, yearRange);
      });

      this.apiService.getAllActors().then((actors) => {
        this.actorComparisonObject = this.getActorPatternComparisonObject(incidents, actors);
      });
    });

    this.apiService.getAllOrgs().subscribe((orgs) => {
      this.industryComparisonObject = this.getIndustryComparisonObject(orgs);
    });
  }

  getYearComparisonObject(incidentList: Incident [], yearRange: YearRange) {
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

    const labels = [];
    const data = [];
    dataMap.forEach((value: number, key: string) => {
      labels.push(key);
      data.push(value);
    });
    return this.graphDataService.getlineChartDataObject('Incidents', labels, data);
  }

  getRecordsLostComparisonObject(incidentList: Incident [], yearRange: YearRange) {
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

    const labels = [];
    const data = [];
    dataMap.forEach((value: number, key: string) => {
      labels.push(key);
      data.push(value);
    });
    return this.graphDataService.getlineChartDataObject('Records lost', labels, data);
  }

  getActorPatternComparisonObject(incidentList: Incident [], actorList: Actor []) {
    const dataMap = new Map<string, number>();
    if (actorList && incidentList) {
      for (const incident of incidentList) {
        for (const actor of actorList) {
          if (incident.actorId == actor.actorId) {
            if (dataMap.get(actor.actorPattern)) {
              dataMap.set(actor.actorPattern, dataMap.get(actor.actorPattern) + 1);
            } else {
              dataMap.set(actor.actorPattern, 1);
            }
            break;
          }
        }
      }
    }

    const labels = [];
    const data = [];
    dataMap.forEach((value: number, key: string) => {
      if (value > 250) { // to eliminate low range actor patterns
        labels.push(key);
        data.push(value);
      }
    });
    return this.graphDataService.getPieChartDataObject(labels, data);
  }

  getIndustryComparisonObject(orgList: Organization []) {
    const dataMap = new Map<string, number>();

    for (const org of orgList) {
      if (dataMap.get(org.orgIndustry)) {
        dataMap.set(org.orgIndustry, dataMap.get(org.orgIndustry) + 1);
      } else {
        dataMap.set(org.orgIndustry, 1);
      }
    }

    const labels = [];
    const data = [];
    dataMap.forEach((value: number, key: string) => {
      if (value > 300) { // to eliminate low range insustries
        labels.push(key);
        data.push(value);
      }
    });
    return this.graphDataService.getRadarChartDataObject('Breaches per industry', labels, data);
  }

  getLeftPositionOption() {
    return this.graphDataService.getLegendPositionLeftOption();
  }
}
