import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AdminRoutingModule } from './admin-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { RDVsComponent } from './rdvs/rdvs.component';
import { PlaintesComponent } from './plaintes/plaintes.component';
import { HeaderComponent } from './header/header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon' ;
import {MatListModule} from '@angular/material/list' ;
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu' ; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select' ;

import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    ClientsComponent,
    RDVsComponent,
    PlaintesComponent,
    HeaderComponent,
    DashboardComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],

  exports : [

  CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,  
    MatInputModule,
    MatSelectModule]
})
export class AdminModule { }
