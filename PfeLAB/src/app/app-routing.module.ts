import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent} from './components/contact/contact.component';
import { ServiceComponent} from './components/service/service.component';
import { AboutComponent} from './components/about/about.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from './client/profile/profile.component' ;
import { ManagementDemandesComponent } from './client/management-demandes/management-demandes.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';

import {GuardGuard} from './_services/guard.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact' , component : ContactComponent},
  { path : 'service' , component : ServiceComponent},
  {path : 'about' , component : AboutComponent},
  { path: 'login', component: LoginComponent },
  { path : 'profile' , component : ProfileComponent,canActivate:[GuardGuard]},
  { path : 'management-demandes' , component : ManagementDemandesComponent , canActivate:[GuardGuard]},
  {path : 'dashboard' , component : DashboardComponent , canActivate : [GuardGuard]} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
