
import {DataSource} from "@angular/cdk/collections";
import {Organization} from "../Models/Organization";
import {ApiService} from "../ApiService/api.service";
import {Observable} from "rxjs";

export class OrgDataSource extends DataSource<Organization> {
  constructor(private apiService: ApiService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Organization[]> {
    return this.apiService.getAllOrgs();
  }

  disconnect() {}
}
