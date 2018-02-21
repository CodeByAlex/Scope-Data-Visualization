import {Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {Organization} from "../Models/Organization";
import {ApiService} from "../ApiService/api.service";
import {MatTableDataSource, MatSort, MatPaginator} from "@angular/material";
import {OrgDataSource} from "./org-data-source";
import {Incident} from "../Models/Incident";
import {GraphDataService} from "../GraphDataService/graph-data.service";
import {Observable} from "rxjs/Observable";
import {OrgDataService} from "./org-data-service";

@Component({
  selector: 'org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.scss']
})
export class OrgDashboardComponent implements OnInit {
  displayedColumns = ['orgName', 'orgIndustry', 'numIncidents', 'numRecordsLost'];
  yearComparisonData = {};
  dataLostTypeComparison = {};
  incidentList: Incident [] = [];

  dataSource= null;

  orgName:string = null;
  orgIndustry: string = null;

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private apiService: ApiService, private graphDataService: GraphDataService, private orgDataService: OrgDataService) {
  }

  ngOnInit() {
    this.dataSource = new OrgDataSource(this.orgDataService, this.paginator);
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

  getYearComparisonData(){
    let labels = [];
    let orgYearData = [];

    for(let year=1971; year<=2017; year++){
      labels.push(year.toString());
      let numIncidentsPerYear = 0;
      for(let incident of this.incidentList){
        if(incident.reportYear ==year){
          numIncidentsPerYear+=1;
        }
      }
      orgYearData.push(numIncidentsPerYear)
    }

    this.yearComparisonData = this.graphDataService.getlineChartDataObject('Incidents', labels, orgYearData);
  }

  getDataLostTypeComparison(){
    let dataMap = new Map<string, number>();

    for (let incident of this.incidentList) {
      if(dataMap.get(incident.dataLostType)) {
        dataMap.set(incident.dataLostType, dataMap.get(incident.dataLostType)+1);
      }else{
        dataMap.set(incident.dataLostType, 1);
      }
    }
    let typeLabels = [];
    let typeCounts = [];
    dataMap.forEach((value: number, key: string) => {
      typeLabels.push(key);
      typeCounts.push(value);
    });

    this.dataLostTypeComparison = this.graphDataService.getPieChartDataObject(typeLabels, typeCounts);
  }

}
