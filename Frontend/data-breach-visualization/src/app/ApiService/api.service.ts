import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Organization} from "../Models/Organization";
import {Incident} from "../Models/Incident";
import {Actor} from "../Models/Actor";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  //used for in memory caching since all data is static
  allIncidents: Observable<Incident[]> = null;
  allOrgs: Observable<Organization[]> = null;
  allActors: Observable<Actor[]> =null;

  constructor(private http: Http) { }

  public getAllOrgs(): Observable<Organization[]> {
    if(this.allOrgs ==null) {
      this.allOrgs = this.http.get(API_URL + '/breach-data/org-info')
        .map(response => {
          const organizations = response.json();
          return organizations.map(org => new Organization(org.orgId, org.orgName, org.orgIndustry, org.numIncidents, org.numRecordsLost))
        }).catch(this.handleError)
    }
    return this.allOrgs;
  }

  public getAllIncidents() : Observable<Incident[]>{
    if(this.allIncidents == null) {
      this.allIncidents = this.http.get(API_URL + '/breach-data/incident-info')
        .map(response => {
          const incidents = response.json();
          return incidents.map(incident => new Incident(incident.incidentId, incident.orgId, incident.actorId, incident.reportDay,
            incident.reportMonth, incident.reportYear, incident.numRecordsLost,
            incident.dataLostType, incident.country, incident.state, incident.victimType,
            incident.summary, incident.references))
        }).catch(this.handleError)
    }
    return this.allIncidents;
  }

  public getIncidentsByOrgId(orgId:number) : Observable<Incident[]>{
    console.log(API_URL+'/breach-data/incident-info/by-org-id?org_id='+orgId);
    return this.http.get(API_URL+'/breach-data/incident-info/by-org-id?org_id='+orgId)
      .map(response=>{
        const incidents = response.json();
        return incidents.map(incident => new Incident(incident.incidentId, incident.orgId, incident.actorId, incident.reportDay,
          incident.reportMonth, incident.reportYear, incident.numRecordsLost,
          incident.dataLostType, incident.country, incident.state, incident.victimType,
          incident.summary, incident.references))
      }).catch(this.handleError)
  }

  public getAllActors() : Observable<Actor[]>{
    if(this.allActors == null) {
      this.allActors = this.http.get(API_URL + '/breach-data/actor-info')
        .map(response => {
          const actors = response.json();
          return actors.map(actor => new Actor(actor.actorId, actor.actorType, actor.actorPattern))
        }).catch(this.handleError)
    }
    return this.allActors;
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
