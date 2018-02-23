import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDashboardComponent } from './global-dashboard';
import {MatCardModule, MatTableModule} from "@angular/material";
import {ChartModule} from "primeng/chart";
import {ApiService} from "../api-service/api.service";
import {Http, HttpModule} from "@angular/http";
import {GraphDataService} from "../graph-data-service/graph-data.service";

describe('GlobalDashboardComponent', () => {
  let component: GlobalDashboardComponent;
  let fixture: ComponentFixture<GlobalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDashboardComponent ],
      imports:[
        MatCardModule,
        ChartModule,
        HttpModule
      ],
      providers:[
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
});
