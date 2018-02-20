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
    this.dataLostTypeComparison ={};
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

    this.dataLostTypeComparison = {
      labels: typeLabels,
      datasets: [
        {
          data: typeCounts,
          backgroundColor: [
            "#00B5DD",
            "#345065",
            "#FFCE56",
            "#ff6384",
            "#ABCDCF",
          ],
          hoverBackgroundColor: [
            "#00B5DD",
            "#345065",
            "#FFCE56",
            "#ff6384",
            "#ABCDCF",
          ]
        }]
    }
  }

}
