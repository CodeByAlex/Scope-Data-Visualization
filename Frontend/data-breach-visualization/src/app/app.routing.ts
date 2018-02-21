import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {OrgDashboardComponent} from "./org-dashboard/org-dashboard.component";
import {WorldDashboardComponent} from "./world-dashboard/world-dashboard";

const appRoutes : Routes =
  [
    {
      path: '',
      component: AboutComponent
    },
    {
      path: 'org',
      component: OrgDashboardComponent
    },
    {
      path: 'world',
      component: WorldDashboardComponent,
    },
    {
      path: '**',
      component: AboutComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
