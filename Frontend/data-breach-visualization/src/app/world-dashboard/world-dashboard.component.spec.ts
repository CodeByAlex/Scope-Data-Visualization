import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldDashboardComponent } from './world-dashboard';
import {MatCardModule, MatTableModule} from "@angular/material";
import {ChartModule} from "primeng/chart";
import {ApiService} from "../ApiService/api.service";
import {Http, HttpModule} from "@angular/http";
import {GraphDataService} from "app/GraphDataService/graph-data.service";

describe('WorldDashboardComponent', () => {
  let component: WorldDashboardComponent;
  let fixture: ComponentFixture<WorldDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldDashboardComponent ],
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
    fixture = TestBed.createComponent(WorldDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
