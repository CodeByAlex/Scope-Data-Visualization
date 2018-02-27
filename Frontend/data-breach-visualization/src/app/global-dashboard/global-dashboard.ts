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
  actorList: Actor [];
  incidentList: Incident [];
  orgList: Organization [];

  yearRange: YearRange;

  yearComparisonData = {};
  actorComparison = {};
  industryComparisonData = {};
  recordsLostComparisonData = {};

  constructor(private apiService: ApiService, private graphDataService: GraphDataService) {}

  ngOnInit() {
    this.loadAllIncidents()
    this.loadAllOrgs();
  }

  loadAllIncidents() {
    this.apiService.getAllIncidents().then((result) => {
      this.incidentList = result;
      this.loadIncidentYearRange();
      this.loadAllActors();
    }).catch((error) => console.error(error));
  }

  loadAllActors() {
    this.apiService.getAllActors().then((result) => {
      this.actorList = result;
      this.getActorPatternComparison();
    });
  }

  loadAllOrgs() {
    this.apiService.getAllOrgs().subscribe((result) => {
      this.orgList = result;
      this.getIndustryComparisonData();
    });
  }

  loadIncidentYearRange() {
    this.apiService.getIncidentYearRange().subscribe((result) => {
      this.yearRange = result;
      this.getYearComparisonData();
      this.getRecordsLostComparisonData();
    });
  }

  getYearComparisonData() {
    const labels = [];
    const orgYearData = [];

    for (let year = this.yearRange.minYear; year <= this.yearRange.maxYear; year++) {
      labels.push(year.toString());
      let numIncidentsPerYear = 0;
      for (const incident of this.incidentList) {
        if (incident.reportYear == year) {
          numIncidentsPerYear += 1;
        }
      }
      orgYearData.push(numIncidentsPerYear)
    }

    this.yearComparisonData = this.graphDataService.getlineChartDataObject('Incidents', labels, orgYearData);
  }

  getRecordsLostComparisonData() {
    const labels = [];
    const recordYearData = [];

    for (let year = this.yearRange.minYear; year <= this.yearRange.maxYear; year++) {
      labels.push(year.toString());
      let numRecordsPerYear = 0;
      for (const incident of this.incidentList) {
        if (incident.reportYear == year) {
          numRecordsPerYear += incident.numRecordsLost;
        }
      }
      recordYearData.push(numRecordsPerYear)
    }

    this.recordsLostComparisonData = this.graphDataService.getlineChartDataObject('Records lost', labels, recordYearData);
  }

  getActorPatternComparison() {
    const dataMap = new Map<string, number>();

    for (const incident of this.incidentList) {
      for (const actor of this.actorList) {
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
    const typeLabels = [];
    const typeCounts = [];
    dataMap.forEach((value: number, key: string) => {
      if (value > 260) {
        typeLabels.push(key);
        typeCounts.push(value);
      }
    });

    this.actorComparison = this.graphDataService.getPieChartDataObject(typeLabels, typeCounts);
  }

  getIndustryComparisonData() {
    const dataMap = new Map<string, number>();

    for (const org of this.orgList) {
      if (dataMap.get(org.orgIndustry)) {
        dataMap.set(org.orgIndustry, dataMap.get(org.orgIndustry) + 1);
      } else {
        dataMap.set(org.orgIndustry, 1);
      }
    }
    const industryLabels = [];
    const industryCounts = [];
    const otherIndustries = 0;
    dataMap.forEach((value: number, key: string) => {
      if (value > 300) { // to eliminate low range insustries
        industryLabels.push(key);
        industryCounts.push(value);
      }
    });

    this.industryComparisonData = this.graphDataService.getRadarChartDataObject('Breaches per industry', industryLabels, industryCounts);
  }

  getLeftPositionOption() {
    return this.graphDataService.getLegendPositionLeftOption();
  }
}
