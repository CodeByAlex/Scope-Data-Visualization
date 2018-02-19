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

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.apiService.getAllActors()
      .subscribe(
        (actors) => {
          this.actorList = actors;
        }
      );

    this.apiService.getAllIncidents()
      .subscribe(
        (incidents) => {
          this.incidentList = incidents;
        }
      );

    this.apiService.getAllOrgs()
      .subscribe(
        (orgs) => {
          this.orgList = orgs;
        }
      );
  }

}
