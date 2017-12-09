import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../app/common/login/login.component';
import {ReportPageComponent} from '../app/report-page/report-page.component';
import {HomepageComponent} from './homepage/homepage.component';
import {InfopageComponent} from './infopage/infopage.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
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
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

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

