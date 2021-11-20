import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DPIComponent } from './dpi/dpi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "" , component : HomeComponent },
  {path : "Recipes" , component : DPIComponent },
  {path : "Login" , component : LoginComponent},
  {path : "Register" , component : RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
