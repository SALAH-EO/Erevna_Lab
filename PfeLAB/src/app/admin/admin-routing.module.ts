import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { RDVsComponent } from './rdvs/rdvs.component';
import { PlaintesComponent } from './plaintes/plaintes.component';
import { HeaderComponent} from './header/header.component' ; 
import {DashboardComponent} from './dashboard/dashboard.component' ;
import {Guard2Guard} from '../_services/guard2.guard' ;

import {HomeComponent} from '../components/home/home.component' ;


const routes: Routes = [
    {path :'admin' , component : HeaderComponent} ,
    { path : 'admin' ,
         children:[
            {path:'rdvs' , component : RDVsComponent , canActivate:[Guard2Guard] } ,
            {path:'plaintes' , component : PlaintesComponent , canActivate:[Guard2Guard] } ,
            {path: 'clients' , component : ClientsComponent , canActivate:[Guard2Guard] },
            {path : 'dashboard' , component : DashboardComponent , canActivate:[Guard2Guard] },
            {path :'home' , component : HomeComponent } 

           ]
            }
         
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
