import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './ApiService/api.service';
import { WorldDashboardComponent } from './world-dashboard/world-dashboard';
import { OrgDashboardComponent } from './org-dashboard/org-dashboard.component';
import {MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule} from "@angular/material";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {ChartModule} from '../../node_modules/primeng/chart';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { AboutComponent } from './about/about.component';
import {routing} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GraphDataService} from "app/GraphDataService/graph-data.service";
import {OrgDataService} from "app/org-dashboard/org-data-service";

@NgModule({
  declarations: [
    AppComponent,
    WorldDashboardComponent,
    OrgDashboardComponent,
    NavigationBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ChartModule,
    routing
  ],
  providers: [ApiService, GraphDataService, OrgDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
