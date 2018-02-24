import {BehaviorSubject} from "rxjs";
import {Organization} from "../models/Organization";
import {ApiService} from "../api-service/api.service";
import {Injectable} from "@angular/core";
/**
 * Created by alexanderwilson on 2/21/18.
 */

@Injectable()
export class OrgDataService {
  /** Stream that emits whenever the data has been modified. */
  public dataChange: BehaviorSubject<Organization[]> = new BehaviorSubject<Organization[]>([]);
  get data(): Organization[] { return this.dataChange.value; }

  constructor(private apiService: ApiService) {
    apiService.getAllOrgs().subscribe(data => this.dataChange.next(data));
  }
}
