import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDashboardComponent } from './org-dashboard.component';
import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule
} from "@angular/material";
import {ChartModule} from "primeng/chart";
import {ApiService} from "../ApiService/api.service";
import {Http, HttpModule} from "@angular/http";
import {GraphDataService} from "../GraphDataService/graph-data.service";
import {OrgDataService} from "./org-data-service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('OrgDashboardComponent', () => {
  let component: OrgDashboardComponent;
  let fixture: ComponentFixture<OrgDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgDashboardComponent ],
      imports:[
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
      providers:[
        ApiService,
        GraphDataService,
        OrgDataService
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
