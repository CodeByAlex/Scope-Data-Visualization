import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {YearRange} from '../dto/YearRange';
import {Incident} from '../model/Incident';
import {Organization} from '../model/Organization';
import {Actor} from '../model/Actor';

export const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  // used for in memory caching since all data is static
  allIncidents: Promise<Incident[]> = null;
  allActors: Promise<Actor[]> = null;
  allOrgs: Observable<Organization[]> = null;

  yearRange: Observable<YearRange>;
  constructor(private http: Http) { }

  public getAllOrgs(): Observable<Organization[]> {
    if (this.allOrgs == null) {
      this.allOrgs = this.http.get(API_URL + '/breach-data/org-info').map(response => {
          return response.json().map(org => new Organization(org.orgId, org.orgName, org.orgIndustry, org.numIncidents, org.numRecordsLost))
      }).catch(this.handleError)
    }
    return this.allOrgs;
  }

  public getIncidentsByOrgId(orgId: number): Observable<Incident[]> {
    return this.http.get(API_URL + '/breach-data/incident-info/by-org-id?org_id=' + orgId).map(res => {
      return res.json().map(incident => new Incident(incident.incidentId, incident.orgId, incident.actorId, incident.reportDay,
        incident.reportMonth, incident.reportYear, incident.numRecordsLost,
        incident.dataLostType, incident.country, incident.state, incident.victimType,
        incident.summary, incident.references))
    }).catch(this.handleError)
  }

  public getAllIncidents(): Promise<Incident[]> {
    if (this.allIncidents == null) {
      this.allIncidents = this.http.get(API_URL + '/breach-data/incident-info').toPromise().then((res) => {
          return res.json().map(incident => new Incident(incident.incidentId, incident.orgId, incident.actorId, incident.reportDay,
            incident.reportMonth, incident.reportYear, incident.numRecordsLost, incident.dataLostType, incident.country,
            incident.state, incident.victimType, incident.summary, incident.references))
        });
    }
    return this.allIncidents;
  }

  public getAllActors(): Promise<Actor[]> {
    if (this.allActors == null) {
      this.allActors = this.http.get(API_URL + '/breach-data/actor-info').toPromise().then((res) => {
          return res.json().map(actor => new Actor(actor.actorId, actor.actorType, actor.actorPattern))
      });
    }
    return this.allActors;
  }

  public getIncidentYearRange(): Observable<YearRange> {
    if (this.yearRange == null) {
      this.yearRange = this.http.get(API_URL + '/breach-data/incident-info/year-range').map(
        function (res) {
          return new YearRange(res.json().minYear, res.json().maxYear);
        }
      ).catch(this.handleError);
    }
    return this.yearRange;
  }

  private handleError (error: Response | any) {
    console.error('api-service::handleError', error);
    return Observable.throw(error);
  }

}
