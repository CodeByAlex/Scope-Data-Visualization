import { Component, OnInit } from '@angular/core';
import {ApiService} from "../ApiService/api.service";
import {Actor} from "../Models/Actor";
import {Incident} from "app/Models/Incident";
import {Organization} from "../Models/Organization";

@Component({
  selector: 'world-dashboard',
  templateUrl: './world-dashboard.component.html',
  styleUrls: ['./world-dashboard.component.scss']
})
export class WorldDashboardComponent implements OnInit {
  actorList: Actor [];
  incidentList: Incident [];
  orgList: Organization [];
  countryComparison ={};
  yearComparisonData = {};
  actorComparison = {};
  industryComparisonData ={};
  recordsLostComparisonData ={};

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.apiService.getAllIncidents()
      .subscribe(
        (incidents) => {
          this.incidentList = incidents;
          this.getCountryComparison();
          this.getYearComparisonData();
          this.getRecordsLostComparisonData();
          this.apiService.getAllActors()
            .subscribe(
              (actors) => {
                this.actorList = actors;
                this.getActorPatternComparison();
              }
            );
        }
      );

    this.apiService.getAllOrgs()
      .subscribe(
        (orgs) => {
          this.orgList = orgs;
          this.getIndustryComparisonData();
        }
      );
  }

  getCountryComparison(){
    let dataMap = new Map<string, number>();

    for (let incident of this.incidentList) {
      if(dataMap.get(incident.country)) {
        dataMap.set(incident.country, dataMap.get(incident.country)+1);
      }else{
        dataMap.set(incident.country, 1);
      }
    }
    let countryLabels = [];
    let countryCounts = [];
    dataMap.forEach((value: number, key: string) => {
      countryLabels.push(key);
      countryCounts.push(value);
    });

    this.countryComparison = {
      labels: countryLabels,
      datasets: [
        {
          data: countryCounts,
          backgroundColor: [
            "#00B5DD",
            "#345065",
            "#ABCDCF",
            "#ff6384",
            "#FFCE56",
            "#00DEF2",
          ],
          hoverBackgroundColor: [
            "#00B5DD",
            "#345065",
            "#ABCDCF",
            "#ff6384",
            "#FFCE56",
            "#00DEF2",
          ]
        }]
    }
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

  getRecordsLostComparisonData(){
    let labels = [];
    let recordYearData = [];

    for(let year=1971; year<=2017; year++){
      labels.push(year.toString());
      let numRecordsPerYear = 0;
      for(let incident of this.incidentList){
        if(incident.reportYear ==year){
          numRecordsPerYear+=incident.numRecordsLost;
        }
      }
      recordYearData.push(numRecordsPerYear)
    }

    this.recordsLostComparisonData = {
      labels: labels,
      datasets: [
        {
          label: 'Records lost per year',
          data: recordYearData,
          fill: true,
          borderColor: '#FFCE56'
        }
      ]
    }
  }

  getActorPatternComparison() {
    let dataMap = new Map<string, number>();

    for(let incident of this.incidentList) {
      for (let actor of this.actorList) {
        if(incident.actorId == actor.actorId) {
          if (dataMap.get(actor.actorPattern)) {
            dataMap.set(actor.actorPattern, dataMap.get(actor.actorPattern) + 1);
          } else {
            dataMap.set(actor.actorPattern, 1);
          }
          break;
        }
      }
    }
    let typeLabels = [];
    let typeCounts = [];
    dataMap.forEach((value: number, key: string) => {
      if(value>250) {
        typeLabels.push(key);
        typeCounts.push(value);
      }
    });

    this.actorComparison = {
      labels: typeLabels,
      datasets: [
        {
          data: typeCounts,
          backgroundColor: [
            "#00B5DD",
            "#345065",
            "#ABCDCF",
            "#ff6384",
            "#FFCE56",
            "#00DEF2",

          ],
          hoverBackgroundColor: [
            "#00B5DD",
            "#345065",
            "#ABCDCF",
            "#ff6384",
            "#FFCE56",
            "#00DEF2",
          ]
        }]
    };
  }

  getIndustryComparisonData(){
    let dataMap = new Map<string, number>();

    for (let org of this.orgList) {
      if (dataMap.get(org.orgIndustry)) {
        dataMap.set(org.orgIndustry, dataMap.get(org.orgIndustry) + 1);
      } else {
        dataMap.set(org.orgIndustry, 1);
      }
    }
    let industryLabels = [];
    let industryCounts = [];
    let otherIndustries = 0;
    dataMap.forEach((value: number, key: string) => {
      if(value >300) { //to eliminate low range insustries
        industryLabels.push(key);
        industryCounts.push(value);
      }
    });

    this.industryComparisonData = {
      labels: industryLabels,
      datasets: [
        {
          label: 'Industries',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: '#00DEF2',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: industryCounts
        }
      ]
    };
  }
}
