import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportPageComponent} from '../app/report-page/report-page.component';
import {HomepageComponent} from './homepage/homepage.component';
import {InfopageComponent} from './infopage/infopage.component';
import {ContactpageComponent} from './contactpage/contactpage.component';

const appRoutes: Routes = [

  {
    path: 'report-page',
    component: ReportPageComponent
  },

  {
    path: 'homepage',
    component: HomepageComponent
  },

  {
    path: 'infopage',
    component: InfopageComponent
  },

  {
    path: 'contactpage',
    component: ContactpageComponent
  },

  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

