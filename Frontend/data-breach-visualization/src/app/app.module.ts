import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './ApiService/api.service';
import { WorldDashboardComponent } from './world-dashboard/world-dashboard';
import { OrgDashboardComponent } from './org-dashboard/org-dashboard.component';
import {MatCardModule, MatTableModule} from "@angular/material";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {ChartModule} from '../../node_modules/primeng/chart';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { AboutComponent } from './about/about.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    WorldDashboardComponent,
    OrgDashboardComponent,
    NavigationBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatTableModule,
    ChartModule,
    routing
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
