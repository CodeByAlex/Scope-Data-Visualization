import {Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {Organization} from '../model/Organization';
import {ApiService} from '../api-service/api.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {OrgDataSource} from './org-data-source';
import {Incident} from '../model/Incident';
import {GraphDataService} from '../graph-data-service/graph-data.service';
import {Observable} from 'rxjs/Observable';
import {OrgDataService} from './org-data-service';
import {merge} from 'rxjs/operators';
import {YearRange} from '../dto/YearRange';

@Component({
  selector: 'org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.scss']
})
export class OrgDashboardComponent implements OnInit, AfterViewInit {
  displayedColumns = ['orgName', 'orgIndustry', 'numIncidents', 'numRecordsLost'];
  yearComparisonObject = {};
  dataLostTypeComparisonObject = {};
  yearRange: YearRange;

  dataSource = null;

  orgName: string = null;
  orgIndustry: string = null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService, private graphDataService: GraphDataService, private orgDataService: OrgDataService) {}

  ngOnInit() {
    this.apiService.getIncidentYearRange().subscribe((yearRange) => {
      this.yearRange = yearRange;
    });
    this.dataSource = new OrgDataSource(this.orgDataService, this.paginator, new MatSort());
  }

  ngAfterViewInit() {
    this.dataSource = new OrgDataSource(this.orgDataService, this.paginator, this.sort);
  }

  onRowClick(row: Organization) {
    this.orgName = row.orgName;
    this.orgIndustry = row.orgIndustry;
    this.loadIncidentsByOrgId(row.orgId);
  }

  loadIncidentsByOrgId(orgId: number) {
    this.apiService.getIncidentsByOrgId(orgId).subscribe((incidents) => {
      this.dataLostTypeComparisonObject = this.getDataLostTypeComparisonObject(incidents);
      this.yearComparisonObject = this.getYearComparisonObject(incidents, this.yearRange);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getYearComparisonObject(incidentList: Incident[], yearRange: YearRange) {
    const labels = [];
    const data = [];
    const dataMap = this.getYearComparisonMap(incidentList, yearRange);
    dataMap.forEach((value: number, key: string) => {
      labels.push(key);
      data.push(value);
    });
    return this.graphDataService.getlineChartDataObject('Incidents', labels, data);
  }

  getDataLostTypeComparisonObject(incidentList: Incident[]) {
    const labels = [];
    const data = [];
    const dataMap = this.getDataLostTypeComparisonMap(incidentList);
    dataMap.forEach((value: number, key: string) => {
      labels.push(key);
      data.push(value);
    });
    return this.graphDataService.getPieChartDataObject(labels, data);
  }

  getYearComparisonMap(incidentList: Incident[], yearRange: YearRange): Map<string, number> {
    const dataMap = new Map<string, number>();
    if (yearRange && incidentList) {
      for (let year = yearRange.minYear; year <= yearRange.maxYear; year++) {
        let numIncidentsPerYear = 0;
        for (const incident of incidentList) {
          if (incident.reportYear == year) {
            numIncidentsPerYear += 1;
          }
        }
        dataMap.set(year.toString(), numIncidentsPerYear);
      }
    }
    return dataMap;
  }

  getDataLostTypeComparisonMap(incidentList: Incident[]): Map<string, number> {
    const dataMap = new Map<string, number>();
    if (incidentList) {
      for (const incident of incidentList) {
        if (dataMap.get(incident.dataLostType)) {
          dataMap.set(incident.dataLostType, dataMap.get(incident.dataLostType) + 1);
        } else {
          dataMap.set(incident.dataLostType, 1);
        }
      }
    }
    return dataMap;
  }
}
