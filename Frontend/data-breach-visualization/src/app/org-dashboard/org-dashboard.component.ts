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
  incidentList: Incident [];

  dataSource= null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService:ApiService) {
    this.dataSource = new OrgDataSource(this.apiService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onRowClick(){
    this.incidentList = [];
    this.apiService.getAllIncidents()
      .subscribe(
        (incidents) => {
          this.incidentList = incidents;
        }
      );
  }



}
