import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDashboardComponent } from './global-dashboard';
import {MatCardModule, MatOptionModule, MatSelectModule, MatTableModule} from '@angular/material';
import {ChartModule} from 'primeng/chart';
import {ApiService} from '../api-service/api.service';
import {Http, HttpModule} from '@angular/http';
import {GraphDataService} from '../graph-data-service/graph-data.service';
import {YearRange} from '../dto/YearRange';
import {Incident} from '../model/Incident';
import {Actor} from '../model/Actor';
import {Organization} from "../model/Organization";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('GlobalDashboardComponent', () => {
  let component: GlobalDashboardComponent;
  let fixture: ComponentFixture<GlobalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDashboardComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        ChartModule,
        HttpModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule
      ],
      providers: [
        ApiService,
        GraphDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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

  it('should get a year comparison object', () => {
    const graphDataService: GraphDataService = new GraphDataService();
    const yearRange: YearRange = new YearRange();
    yearRange.minYear = 2010;
    yearRange.maxYear = 2012;
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, null, null, null, 2011));
    expect(component.getYearComparisonObject(incidentList, yearRange))
      .toEqual(graphDataService.getlineChartDataObject('Incidents', ['2010','2011','2012'], [0,1,0]))
  });

  it('should get a num records Lost Comparison Map', () => {
    const yearRange: YearRange = new YearRange();
    yearRange.minYear = 2011;
    yearRange.maxYear = 2011;
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, null, null, null, 2011, 3, 'Hello World!'));
    const dataMap = new Map<string, number>();
    dataMap.set('2011', 3);
    expect(component.getRecordsLostComparisonMap(incidentList, yearRange)).toEqual(dataMap)
  });

  it('should get a num records Lost Comparison object', () => {
    const graphDataService: GraphDataService = new GraphDataService();
    const yearRange: YearRange = new YearRange();
    yearRange.minYear = 2011;
    yearRange.maxYear = 2011;
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, null, null, null, 2011, 3, 'Hello World!'));
    expect(component.getRecordsLostComparisonObject(incidentList, yearRange))
      .toEqual(graphDataService.getlineChartDataObject('Records lost', ['2011'], [3]))
  });

  it('should get an actor pattern Comparison Map', () => {
    const actorIdMap: Map<number, Actor> = new Map< number, Actor>();

    const actor: Actor = new Actor(1, null, 'pattern');
    actorIdMap.set(1, actor);
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, 1, null, null, 2011, 3, 'Hello World!'));
    const dataMap = new Map<string, number>();
    dataMap.set('pattern', 1);
    expect(component.getActorPatternComparisonMap(incidentList, actorIdMap)).toEqual(dataMap);
  });

  it('should get an actor pattern Comparison Object', () => {
    const graphDataService: GraphDataService = new GraphDataService();
    const actorIdMap: Map<number, Actor> = new Map< number, Actor>();
    actorIdMap.set(1, new Actor(1, null, 'pattern'));
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(null, null, 1, null, null, 2011, 3, 'Hello World!'));
    //empty arrays passed because <250
    expect(component.getActorPatternComparisonObject(incidentList, actorIdMap)).toEqual(graphDataService.getPieChartDataObject(['pattern'], [1]))
  });

  it('should get an industry Comparison Map', () => {
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(1, 1, 1, null, null, 2011, 3, 'Hello World!'));
    const orgList: Organization[] = [];
    const org: Organization = new Organization(1, null, 'industry');
    orgList.push(org);
    const dataMap = new Map<string, number>();
    dataMap.set('industry', 1);
    expect(component.getIndustryComparisonMap(incidentList, orgList)).toEqual(dataMap)
  });

  it('should get an industry Comparison object', () => {
    const graphDataService: GraphDataService = new GraphDataService();
    const incidentList: Incident[] = [];
    incidentList.push(new Incident(1, 1, 1, null, null, 2011, 3, 'Hello World!'));

    const orgList: Organization[] = [];
    const org: Organization = new Organization(1, null, 'industry');
    orgList.push(org);
    const dataMap = new Map<string, number>();
    dataMap.set('industry', 1);
    //empty arrays passed because <300
    expect(component.getIndustryComparisonObject(incidentList, orgList)).toEqual(graphDataService.getRadarChartDataObject('Breaches per industry', ['industry'], [1]))
  });



});
