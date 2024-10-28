import { Component, OnInit , Host} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators , NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
import Validation from '../../utils/validation';
import {ApiService} from '../../_services/api.service';

interface Domaine {
  value: string;
  viewValue: string;
}

interface Niveau {
  value : string ;
  viewValue : string ; 
}

interface Entity {
  value : string ;
  viewValue : string ;
}



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css' ]
})
export class ServiceComponent {
 domaines: Domaine[] = [
    {value: 'geo', viewValue: 'geologie'},
    {value: 'bio', viewValue: 'biologie'},
    {value: 'info', viewValue: 'informatique'},
    {value: 'tech', viewValue: 'technologie'},
    {value: 'chimie', viewValue: 'chimie'},
    {value: 'med', viewValue: 'medecine'},
  ];

  niveaux : Niveau[] = [
    {value: 'Master', viewValue: 'Master'},
    {value: 'Doctorant', viewValue: 'doctorant'},
    {value: 'Spécialisé', viewValue: 'Spécialisé'},

  ];

  entities : Entity[] = [
   {value: 'Individu', viewValue: 'Personne physique'},
    {value: 'Groupe', viewValue: 'Groupe'},
  ]


  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    niveau : new FormControl(null),
    entity : new FormControl(null),
    etablissement : new FormControl(''),
    encadrant : new FormControl(''),
    adresse : new FormControl(''),
    mobile : new FormControl(''),
    email: new FormControl(''),
    domaine : new FormControl(null),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

   selectedD: string = '';
   groupe = false ;

    selectChangeHandler (event: any) {
    //update the ui
    this.selectedD = event;
    //console.log(this.selectedD) ;
    if(this.selectedD == 'Groupe' ) this.groupe = true ;
    else {
      this.groupe = false ;
    }
  }

  constructor(private formBuilder: FormBuilder ,
              private dataService: ApiService ,
              private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: [
          '',
          [
            Validators.required
          ]
        ],
        niveau : ['null', Validators.required],
        entity : ['null', Validators.required],
        etablissement : ['' , Validators.required],
        encadrant : [''],
        adresse : [''],
        mobile:['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        domaine : ['null', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }



 /* postdata(form:any){

    this.dataService.userregistration(
      form.value.nom,
      form.value.prenom,
      form.value.email,
      form.value.dateN,
      form.value.domaine,
      form.value.password,
      form.value.mobile,
      )
    .pipe(first())
    .subscribe( data => {
      this.router.navigate(['login']);
    },
    error => {

    });
  }
*/




  /*myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };*/

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(form : any) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

     this.dataService.userregistration(
      form.value.nom,
      form.value.prenom,
      form.value.email,
      form.value.domaine,
      form.value.password,
      form.value.mobile,
      form.value.etablissement,
      form.value.entity,
      form.value.encadrant,
      form.value.niveau,
      form.value.adresse,
      )
    .pipe(first())
    .subscribe( data => {
      this.router.navigate(['/login']);
    },
    error => {
      alert("email déjà utilisé");
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


}
