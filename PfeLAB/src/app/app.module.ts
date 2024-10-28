import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import {MatToolbarModule} from '@angular/material/toolbar' ;
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon' ;
import {MatListModule} from '@angular/material/list' ;
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete' ;
import {MatGridListModule} from '@angular/material/grid-list' ;
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select' ;
import {MatProgressSpinnerModule} from'@angular/material/progress-spinner' ;
import {MatMenuModule} from '@angular/material/menu' ; 
import {MatCheckboxModule} from '@angular/material/checkbox' ;
import {MatDialogModule} from '@angular/material/dialog';

import { AdminModule} from './admin/admin.module' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './login/login.component' ;
import { ProfileComponent } from './client/profile/profile.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ManagementDemandesComponent } from './client/management-demandes/management-demandes.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    ToolbarComponent,
    ManagementDemandesComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxScrollTopModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
