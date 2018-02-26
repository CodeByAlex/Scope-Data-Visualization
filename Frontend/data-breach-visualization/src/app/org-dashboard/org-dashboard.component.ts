import {Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {Organization} from "../models/Organization";
import {ApiService} from "../api-service/api.service";
import {MatTableDataSource, MatSort, MatPaginator} from "@angular/material";
import {OrgDataSource} from "./org-data-source";
import {Incident} from "../models/Incident";
import {GraphDataService} from "../graph-data-service/graph-data.service";
import {Observable} from "rxjs/Observable";
import {OrgDataService} from "./org-data-service";
import {merge} from "rxjs/operators";
import {YearRange} from "../dto/YearRange";

@Component({
  selector: 'org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.scss']
})
export class OrgDashboardComponent implements OnInit, AfterViewInit {
  displayedColumns = ['orgName', 'orgIndustry', 'numIncidents', 'numRecordsLost'];
  yearComparisonData = {};
  dataLostTypeComparison = {};
  incidentList: Incident [] = [];
  yearRange: YearRange;

  dataSource = null;

  orgName: string = null;
  orgIndustry: string = null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private apiService: ApiService, private graphDataService: GraphDataService, private orgDataService: OrgDataService) {
  }

  ngOnInit() {
    this.apiService.getIncidentYearRange()
      .subscribe(
        (range) => {
          this.yearRange = range;
        }
      );
    this.dataSource = new OrgDataSource(this.orgDataService, this.paginator, new MatSort());
  }

  ngAfterViewInit() {
    this.dataSource = new OrgDataSource(this.orgDataService, this.paginator, this.sort);
  }

  onRowClick(row) {
    this.orgName = row.orgName;
    this.orgIndustry = row.orgIndustry;
      this.apiService.getIncidentsByOrgId(row.orgId)
       .subscribe(
       (incidents) => {
         this.incidentList = incidents;
         this.getYearComparisonData();
         this.getDataLostTypeComparison();
       }
       );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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

  getDataLostTypeComparison() {
    const dataMap = new Map<string, number>();

    for (const incident of this.incidentList) {
      if (dataMap.get(incident.dataLostType)) {
        dataMap.set(incident.dataLostType, dataMap.get(incident.dataLostType) + 1);
      } else {
        dataMap.set(incident.dataLostType, 1);
      }
    }
    const typeLabels = [];
    const typeCounts = [];
    dataMap.forEach((value: number, key: string) => {
      typeLabels.push(key);
      typeCounts.push(value);
    });

    this.dataLostTypeComparison = this.graphDataService.getPieChartDataObject(typeLabels, typeCounts);
  }

}
