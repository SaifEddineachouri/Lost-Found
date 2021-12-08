import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavBarDashboardComponent } from './Dashboard/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Navigation/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { AnnouncesComponent } from './home/announces/announces.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { FooterComponent } from './Dashboard/footer/footer.component';
import { HomeDashboardComponent } from './Dashboard/home-dashboard/home-dashboard.component';
import { FilterComponent } from './home/announces/filter/filter.component';
import { AnnounceComponent } from './User/announce/announce.component';
import { ShowAnnounceComponent } from './User/announce/show-announce/show-announce.component';
import { DetailsAnnounceComponent } from './home/announces/details-announce/details-announce.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AnnouncesComponent,
    DashboardComponent,
    NavBarDashboardComponent,
    FooterComponent,
    HomeDashboardComponent,
    FilterComponent,
    AnnounceComponent,
    ShowAnnounceComponent,
    DetailsAnnounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
