import { Component, OnInit , Host } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, FormControl, Validators , NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import Validation from '../utils/validation'
import {ApiService} from '../_services/api.service';
import {ToolbarService} from '../_services/toolbar.service' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup  = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''), });

   constructor(private formBuilder: FormBuilder ,
              private dataService: ApiService ,
              private router:Router,
              public nav:ToolbarService) { 

      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: [ '', [ Validators.required ]]
      })
   }
  onSubmit(form : any){
    this.dataService.userlogin(form.value.email,form.value.password)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data.email);
        if(data.message=='success'){
       // const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '../client/profile';
         this.router.navigate(['/dashboard']); 
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
   
  }

}