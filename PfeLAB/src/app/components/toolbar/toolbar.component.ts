import { Component, OnInit } from '@angular/core';
import { ToolbarService} from '../../_services/toolbar.service' ;
import {ApiService} from '../../_services/api.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  loginbtn:boolean;
  logoutbtn:boolean;

  log : any ;
  admin : boolean ;


  constructor(private dataService:ApiService , public nav: ToolbarService) {
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

    this.log = dataService.getToken();

    this.admin = !isNaN(this.log) ;
   }

    private changeName(name:boolean):void{

    this.logoutbtn = name;
    this.loginbtn = !name ;
  }

   logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href ;
  }

  

  ngOnInit(): void {
  }

}
