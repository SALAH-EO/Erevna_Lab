import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../_services/navbar.service' ;
import {  HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ApiService} from '../../_services/api.service';
import {ToolbarService} from '../../_services/toolbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   loginbtn:boolean;
  logoutbtn:boolean;
  sidenavWidth = 4;
  etat = true ;


  constructor(public navbar : NavbarService , private dataService:ApiService , public nav : ToolbarService) { 


   dataService.getLoggedInName.subscribe(name=>this.changeName(name));

    if(this.dataService.isLoggedIn()){
      console.log("logged in");
      this.loginbtn=false ;
      this.logoutbtn=true ;
      /*window.location.reload();*//* break ; */
    }
    else if(!this.dataService.isLoggedIn()){
      this.loginbtn = true ;
      this.logoutbtn = false ;
    }
  }

  private changeName(name:boolean):void{

    this.logoutbtn = name;
    this.loginbtn = !name ;
  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href ;
  }

  increase()  {
    this.sidenavWidth = 15;
    this.etat = !this.etat; 
    console.log('increase sidenav width');
  }
  decrease()  {
    this.sidenavWidth = 4;
    this.etat = !this.etat;
    console.log('decrease sidenav width');
  }

   
  ngOnInit() {
    this.nav.show();
  }

}