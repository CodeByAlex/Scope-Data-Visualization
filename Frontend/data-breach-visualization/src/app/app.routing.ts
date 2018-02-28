import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {OrgDashboardComponent} from "./org-dashboard/org-dashboard.component";
import {GlobalDashboardComponent} from "./global-dashboard/global-dashboard";

const appRoutes : Routes =
  [
    {
      path: 'home',
      component: AboutComponent
    },
    {
      path: 'company',
      component: OrgDashboardComponent
    },
    {
      path: 'global',
      component: GlobalDashboardComponent,
    },
    {
      path: '**',
      component: AboutComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
