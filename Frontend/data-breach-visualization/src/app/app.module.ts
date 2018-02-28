import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './api-service/api.service';
import { GlobalDashboardComponent } from './global-dashboard/global-dashboard';
import { OrgDashboardComponent } from './org-dashboard/org-dashboard.component';
import {
  MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule,
  MatSortModule, MatProgressSpinnerModule, MatSelectModule
} from "@angular/material";
import { NavigationComponent } from './navigation/navigation.component';
import {ChartModule} from '../../node_modules/primeng/chart';
import { AboutComponent } from './about/about.component';
import {routing} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GraphDataService} from "./graph-data-service/graph-data.service";

@NgModule({
  declarations: [
    AppComponent,
    GlobalDashboardComponent,
    OrgDashboardComponent,
    NavigationComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ChartModule,
    ReactiveFormsModule,
    MatSelectModule,
    routing
  ],
  providers: [ApiService, GraphDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
