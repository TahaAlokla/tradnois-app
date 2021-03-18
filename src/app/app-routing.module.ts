import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", pathMatch:"full",redirectTo:"home"},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent },
  {path:"register",component:RegisterComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
