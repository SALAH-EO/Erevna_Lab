import { Component, OnInit, Host} from '@angular/core';
import { FormArray , AbstractControl, FormBuilder, FormGroup, FormControl, Validators , NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
//import Validation from '../../utils/validation';
import {ApiService} from '../../_services/api.service';


export class TotalCount {
  price: number;
  constructor() {
    this.price = 0;
  }
}



interface Type {
  value: string;
  viewValue: string;
}

interface Lab {
  value : string ;
  viewValue : string ;
}

interface Acte {
  value : string ;
  prix : number ;
}

@Component({
  selector: 'app-management-demandes',
  templateUrl: './management-demandes.component.html',
  styleUrls: ['./management-demandes.component.css']
})
export class ManagementDemandesComponent implements OnInit {

 auth:any ;
  client: any;
  success = false ;
  code_v : any ;
  demandes:any;
  devis : any;
  id : any;
  valid = false ;
  num_dem : any ;
  checked : any ;
 // totalCount: TotalCount;
  SumPrice = 0 ;

   

  types: Type[] = [
    {value: 'type1', viewValue: 'type1'},
    {value: 'type2', viewValue: 'type2'},
    {value: 'type3', viewValue: 'type3'},
  ];

  labs : Lab[] = [
    {value : 'Analyses physico-chimiques' , viewValue:'PC'},
    {value: 'Analyses  Biotechnologies' , viewValue:'bio'},
    {value: 'Analyses Agroalimentaires' , viewValue : 'agro'}
  ];

  actes : Acte[] = [
    {value : 'Spectrophotmère d\'absorption atomique ' , prix : 750},
    {value : 'Spectrophotmère à UV ' , prix : 700},
    {value : 'physico chimie de l\'eau ' , prix : 800},
    {value : 'physico chimie des aliments ' , prix : 800},
    {value : 'Calorimétrie ' , prix : 675},

  ];

   


 

  ActesArray : any[] = [] ;

  vals = '' ;
  data = this.vals.split(',');

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    TypeDem: new FormControl(null),
    Lab: new FormControl(null),
    NbreEch: new FormControl(''),
    repetitions: new FormControl(''),
    Nech: new FormControl(''),
    molecule: new FormControl(''),
    precision : new FormControl(''),
    toxicite: new FormControl(''),
    conditions: new FormControl(''),
    recuperation: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;


  Validform: FormGroup = new FormGroup({
    code_v: new FormControl(''),
    num: new FormControl(''),
  });
  confirmed = false ;

  constructor(private formBuilder: FormBuilder ,
              private dataService: ApiService ,
              private router:Router) { }

  ngOnInit(): void {




     this.form = this.formBuilder.group(
      {
        nom:['', Validators.required],
        TypeDem: ['null', [Validators.required]],
        Lab : ['null', Validators.required],
        NbreEch:['', Validators.required],
        repetitions: [''],
        Nech: ['', Validators.required],  
        molecule: [''], 
        precision : [''],
        toxicite: [''],
        conditions : ['', Validators.required],
        recuperation: [''],
        acte: new FormControl(this.data),
        acceptTerms : ['', Validators.required]
      } );





     this.Validform = this.formBuilder.group(
      {
        code_v:['', Validators.required],
        num: ['', [Validators.required]]
      } );


        this.auth = localStorage.getItem('token');

        this.dataService.viewClient(this.auth).subscribe(
      (result:any)=>{
        this.client = result.data ;

        this.id = this.client.id ;

          this.dataService.viewDemandes(this.id).subscribe(
      (conc:any)=>{

        this.demandes = conc.data ;

      //  console.log(conc.data) ;


      } )

      } );

         this.setAutorized(this.data) ;

       //  this.totalCount = new TotalCount();



       // console.log(this.devis.code_v) ;

      //  console.log(conc.data) ;

  }

  




   get authorizedArray(){
       return this.form.get("acte") as FormArray;
     }
 parse() {
       
      const result=this.actes.map(
     (x:any, index:any) => (this.ActesArray[index].value ? x : null)
      ).filter((x:any) => x);
      return result.length>0?result:null

     // console.log(result.length>0?result:null);
     }

setAutorized(data: string[]) {
   this.ActesArray = this.actes.map((x:any) => ({
     name: x.value,
     price : x.prix,
     value: data.indexOf(x) >= 0
   }));
 }

 SumPrix(e:any , prix : any) {
   
   if(e){
     this.SumPrice += prix ;
   }
   else{
     this.SumPrice -= prix ;
   }

   //console.log(this.SumPrice) ;

 }


   get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  postdata(form : any) {

    this.code_v = Math.floor((Math.random() * 1000000) + 1);


    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);


     this.dataService.ajoutDemande(
       this.client.id,
       this.code_v,
       form.value.nom,
       form.value.TypeDem,
       form.value.Lab,
       form.value.NbreEch,
       form.value.repetitions,
       form.value.Nech,
       form.value.molecule,
       form.value.toxicite,
       form.value.conditions,
       form.value.recuperation,
       form.value.acte,
       this.SumPrice,
      )
    .pipe(first())
    .subscribe( data => {

      this.success=true;

      /* this.dataService.sendMail(
       this.code_v,
       form.value.Nech,
      form.value.Tech,
      this.client.domaine,
      form.value.machine,
      this.client.email,
      )
    .pipe(first())
    .subscribe( data => {
      console.log("email sent") ;
    },
    error => {
      console.log('errorno');
    });*/

    },
    error => {
      console.log('error');
    });




 
    
  }


  validate(Validform : any){


    this.dataService.viewdemande(this.id,Validform.value.num).subscribe(
      (rslt:any)=>{

        this.devis = rslt.data ;
        
        if(this.devis[0].code_v == Validform.value.code_v ){
          this.valid = true ;
                this.dataService.validMail(Validform.value.num).subscribe(
      data=>{

        console.log("verified");
        },
        error => {
      console.log("NV");
    }
        );

      }
    }

      );




   // this.confirmed = true ;

  /*  this.num_dem =  this.Validform.value.num ;
   alert (this.devis.num) ;



    if(Validform.value.code_v == this.devis.code_v){
      this.dataService.validMail(this.devis.num )
    .pipe(first())
    .subscribe( data => {
      this.valid = true ;
    },
    error => {
      console.log('error');
    });
    } */
  }


  onReset(): void {
    this.submitted = false;
    this.success = false ;
    this.form.reset();
  }


 


}



