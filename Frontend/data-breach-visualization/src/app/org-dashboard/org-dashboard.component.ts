import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Organization} from "../Models/Organization";
import {ApiService} from "../ApiService/api.service";
import {MatTableDataSource, MatSort} from "@angular/material";
import {OrgDataSource} from "./org-data-source";
import {Incident} from "../Models/Incident";

@Component({
  selector: 'org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.scss']
})
export class OrgDashboardComponent implements AfterViewInit {
  displayedColumns = ['orgName', 'orgIndustry', 'numIncidents', 'numRecordsLost'];
  yearComparisonData = {};
  dataLostTypeComparison = {};
  incidentList: Incident [] = [];
  orgList:Organization[] = [];
  rows =[];
  columns =[];

  dataSource= null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService:ApiService) {
    this.dataSource = new OrgDataSource(this.apiService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onRowClick(row){
      this.apiService.getIncidentsByOrgId(row.orgId)
       .subscribe(
       (incidents) => {
       this.incidentList = incidents;
       }
       );
       this.getYearComparisonData();
       this.getDataLostTypeComparison();
  }

  getYearComparisonData(){
    this.yearComparisonData = {}
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

    this.yearComparisonData = {
      labels: labels,
      datasets: [
        {
          label: 'Incidents per year',
          data: orgYearData,
          fill: false,
          borderColor: '#ff6384'
        }
      ]
    }
  }

  getDataLostTypeComparison(){
    this.dataLostTypeComparison ={}
    let labels = [];
    let data = [];

    let numIncidentsPerYear = 0;
    for(let incident of this.incidentList){
      if(!labels.includes(incident.dataLostType)){
        labels.push(incident.dataLostType);
      }
    }
    for(let label of labels) {
      let dataTypeCount =0;
      for (let incident of this.incidentList) {
        if(label==incident.dataLostType){
          dataTypeCount+=1
        }
      }
      data.push(dataTypeCount);
    }

    this.dataLostTypeComparison = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#ff6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    }
  }

}
