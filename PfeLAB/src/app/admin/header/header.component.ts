import { Component, OnInit , Host} from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, FormControl, Validators , NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import Validation from '../../utils/validation' ;
import {ApiService} from '../../_services/api.service';
import { ToolbarService} from '../../_services/toolbar.service' ;
import { NavbarService} from '../../_services/navbar.service' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   form : FormGroup  = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''), });

  constructor(public nav : ToolbarService , public navbar : NavbarService , private formBuilder: FormBuilder ,
              private dataService: ApiService ,
              private router:Router,) {
    this.form = this.formBuilder.group({
        id: ['', [Validators.required]],
        password: [ '', [ Validators.required ]]
      })
               }

     onSubmit(form : any){
    this.dataService.loginAdmin(form.value.id,form.value.password)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data.email);
        if(data.message=='success'){
       // const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '../client/profile';
         this.router.navigate(['/admin/dashboard']);
       }
       else if(data.message=='failed') {
         this.dataService.deleteToken();
         window.location.href = window.location.href ;
         alert("email ou mot de passe est érroné");
         
       }
      
      }
      

      );
  }

  ngOnInit(): void {

    this.nav.hide();
    this.navbar.hide();
  }

}
