import {async, ComponentFixture, inject, TestBed, tick} from '@angular/core/testing';

import { OrgDashboardComponent } from './org-dashboard.component';
import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {ChartModule} from 'primeng/chart';
import {ApiService} from '../api-service/api.service';
import {Http, HttpModule} from '@angular/http';
import {GraphDataService} from '../graph-data-service/graph-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Organization} from '../model/Organization';
import {YearRange} from '../dto/YearRange';
import {Incident} from '../model/Incident';
import {Observable} from 'rxjs';

let apiService: ApiService;
describe('OrgDashboardComponent', () => {
  let component: OrgDashboardComponent;
  let fixture: ComponentFixture<OrgDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgDashboardComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        ChartModule,
        HttpModule
      ],
      providers: [
        ApiService,
        GraphDataService
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDashboardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.get(ApiService);
    const orgs: Organization[] = [];
    spyOn(apiService, 'getAllOrgs').and.returnValue(Observable.of(orgs));
    fixture.detectChanges();
  });

/*  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('should set global orgName and orgIndustry when onRowClick method is called', () => {
    const org: Organization = new Organization(1, 'Hello', 'World');
    const incidents: Incident[] = [];
    spyOn(apiService, 'getIncidentsByOrgId').and.returnValue(Observable.of(incidents));
    component.onRowClick(org);
    expect(component.orgName).toEqual('Hello');
    expect(component.orgIndustry).toEqual('World');
  });

  /*it('should set datasource filter to a trimmed/lowercase value', () => {
    component.applyFilter('Hello World!');
    expect(component.dataSource.filter).toEqual('hello world!');
  });


  it('should get a year comparison object', () => inject([GraphDataService], (graphDataService: GraphDataService) => {
    const yearRange: YearRange = new YearRange();
    yearRange.minYear = 2010;
    yearRange.maxYear = 2012;
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, null, null, null, 2011));
    tick();
    fixture.detectChanges();
    expect(component.getYearComparisonObject(incidentList, yearRange))
      .toEqual(graphDataService.getlineChartDataObject('Incidents', ['2010','2011','2012'], [0,1,0]))
  }));


  it('should get a year comparison Map', () => {
    const yearRange: YearRange = new YearRange();
    yearRange.minYear = 2000;
    yearRange.maxYear = 2018;
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, null, null, null, 2011));
    const dataMap = new Map<string, number>();
    dataMap.set('2011', 1);
    expect(component.getYearComparisonMap(incidentList, yearRange)).toEqual(dataMap)
  });

  it('should get a Data Lost Type Comparison object', () => {
    const graphDataService: GraphDataService = new GraphDataService();
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, null, null, null, 2011, null, 'Hello World!'));
    expect(component.getDataLostTypeComparisonObject(incidentList)).toEqual(graphDataService.getPieChartDataObject(['Hello World!'], [1]))
  });

  it('should get a Data Lost Type Comparison Map', () => {
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, null, null, null, 2011, null, 'Hello World!'));
    const dataMap = new Map<string, number>();
    dataMap.set('Hello World!', 1);
    expect(component.getDataLostTypeComparisonMap(incidentList)).toEqual(dataMap)
  });*/

});
