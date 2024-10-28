import { Component, OnInit , Host, ViewChild, ElementRef , Inject} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators , NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
//import Validation from '../../utils/validation';
import {ApiService} from '../../_services/api.service';
import { ToolbarService} from '../../_services/toolbar.service' ;
import { formatDate } from "@angular/common";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {Toast} from 'bootstrap' ;

import {DialogComponent} from '../dialog/dialog.component';







@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

   open: boolean = true;
   dismissible: boolean = true;
   timeout: number = 10000;

  demandes : any ;
  i = 0 ;
  dates : any ;
  statut : any ;
  color = "lightseagreen";
  color2 = "red" ;
  nom = '' ;
  bah : any ;
  changed = false ;


  constructor(public nav : ToolbarService,private dataService: ApiService ,
              private router:Router , public dialog: MatDialog) { }

    openDialog(num : any): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {nom: this.nom, color: this.color},
    });

    dialogRef.afterClosed().subscribe(result => {
      
     // console.log('The dialog was closed');
      this.bah = result.data;

      this.color = this.bah.color ;
      this.nom = this.bah.nom ;

       this.dataService.changeStat(num , this.nom).subscribe(
      (data:any)=>{

       

       
       console.log("reussit");

      //  console.log(conc.data) ;


      },
      error => {


        this.show();

      })


    });
  }


  @ViewChild('myToast',{static:true}) toastEl!: ElementRef<HTMLDivElement>;
toast: Toast | null = null;

  

  ngOnInit(): void {

     this.toast = new Toast(this.toastEl.nativeElement,{});

  //  this.nav.hide();

     this.dataService.Demandes().subscribe(
      (conc:any)=>{

       


        this.demandes = conc.data ;


          this.dates = new Array(this.demandes.length);

          this.statut = new Array(this.demandes.length);



         for(this.i=0;this.i<this.demandes.length;this.i++){
          // console.log(this.demandes[this.i].Date);

          this.dates[this.i] = formatDate(this.demandes[this.i].Date, 'dd/MM/yyyy hh:mm' , 'en-US') ;
         //this.demandes[this.i].statut ;
          this.statut[this.i]=this.demandes[this.i].statut ;

         }

        // console.log(this.dates);

      //  console.log(conc.data) ;


      } );



    

    
  }

  show(){
    //console.log(this.changed);
    this.toast!.show();
}



  public bolor(d : any)  {
    if(d == "Nouveau") return "#ffc09f" ;
    if(d ==  "Demande reçu") return "#ffee93" ;
    if(d == "Demande approuvée") return "#fcf5c7" ;
    if(d == "Echantillon demandé") return "#a0ced9" ;
    if(d == "Echantillon déposé") return "#adf7b6" ;
    if(d == "Résultat partiel") return "#fbb3bd" ;
    if(d == "Résultat final") return "#b39ddc" ;
    if(d == "Payé") return "#ced2c2" ;
    if(d == "Clôturé") return "#92b1b6" ;
  }







  public topdf(num:any){
     this.dataService.topdf(num).subscribe(
      (data:any)=>{

        window.open("assets/PDFs/filename.pdf", '_blank');

       console.log("reussite");

      //  console.log(conc.data) ;


      } )
  }

 


}


/*

@Component({
  selector: 'app-dialog',
  styleUrls: ['dialog.css'],
  templateUrl: 'dialog.html',
})
export class Dialog {
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

*/
