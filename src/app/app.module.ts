import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './common/login/login.component';
import { ReportPageComponent } from './report-page/report-page.component';
import {FormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomeComponent } from './homepage/welcome/welcome.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InfopageComponent } from './infopage/infopage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ReportPageComponent,
    HomepageComponent,
    WelcomeComponent,
    InfopageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }
