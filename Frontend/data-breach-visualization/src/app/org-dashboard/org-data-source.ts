
import {DataSource} from "@angular/cdk/collections";
import {Organization} from "../models/Organization";
import {ApiService} from "../api-service/api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {MatPaginator, MatSort} from "@angular/material";
import {OrgDataService} from "app/org-dashboard/org-data-service";

export class OrgDataSource extends DataSource<Organization> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  filteredData: Organization[] = [];
  renderedData: Organization[] = [];

  constructor(private orgDatabase: OrgDataService, private _paginator: MatPaginator, private _sort:MatSort) {
    super();
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Organization[]> {
    const displayDataChanges = [
      this.orgDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      this.filteredData = this.orgDatabase.data.slice().filter((item: Organization) => {
        const searchStr = (item.orgName + +item.orgIndustry + item.numIncidents + item.numRecordsLost).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });
      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }

  disconnect() {}

  sortData(data: Organization[]): Organization[] {
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';
      switch (this._sort.active) {
        case 'orgName': [propertyA, propertyB] = [a.orgName, b.orgName]; break;
        case 'orgIndustry': [propertyA, propertyB] = [a.orgIndustry, b.orgIndustry]; break;
        case 'numIncidents': [propertyA, propertyB] = [a.numIncidents, b.numIncidents]; break;
        case 'numRecordsLost': [propertyA, propertyB] = [a.numRecordsLost, b.numRecordsLost]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}
