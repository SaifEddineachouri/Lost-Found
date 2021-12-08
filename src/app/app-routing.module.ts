import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { HomeDashboardComponent } from './Dashboard/home-dashboard/home-dashboard.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent} from './home/announces/filter/filter.component'
import { AnnounceComponent } from './User/announce/announce.component';
import { ShowAnnounceComponent } from './User/announce/show-announce/show-announce.component';
import { DetailsAnnounceComponent } from './home/announces/details-announce/details-announce.component';

const routes: Routes = [
  {path : "" , component : HomeComponent },
  {path : "Login" , component : LoginComponent},
  {path : "Register" , component : RegisterComponent},
  {path : "Announces" , component: FilterComponent },
  {path : "Announces/Details" , component : DetailsAnnounceComponent},
  {path : "Dashboard" , component : DashboardComponent,children :[
      {path : "home" , component : HomeDashboardComponent},
      {path : "Announce/add" , component : AnnounceComponent },
      {path : "Announces/Show" ,  component : ShowAnnounceComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
