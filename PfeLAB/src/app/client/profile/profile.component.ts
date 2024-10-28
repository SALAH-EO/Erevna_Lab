import { Component, OnInit , Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Users} from '../../utils/users';
import { ApiService} from '../../_services/api.service' ;
import {map} from 'rxjs/operators';
import { first } from 'rxjs/operators';
import {ToolbarService} from '../../_services/toolbar.service' ;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  auth:any ;
  client: any;

 constructor(private route: ActivatedRoute,private router: Router,
    private dataService: ApiService ,
    public nav : ToolbarService) { }

  ngOnInit(): void {

    this.nav.show();

    this.auth = localStorage.getItem('token');

    if(!this.auth){
      this.router.navigate(['/login']);
    }



   



    this.dataService.viewClient(this.auth).subscribe(
      (result:any)=>{
        this.client = result.data ;
      } )




   
  }

}
