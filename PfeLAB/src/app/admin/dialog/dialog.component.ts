import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators , NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Statut } from '../../utils/Statut';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  clr : any ;

  Stats : Statut[] = [
  {
    nom : "Nouveau",
    color : "#ffc09f" 
  },
  {
    nom : "Demande reçu",
    color : "#ffee93" 
  },
  {
    nom : "Demande approuvée",
    color : "#fcf5c7" 
  },
  {
    nom : "Echantillon demandé",
    color : "#a0ced9" 
  },
  {
    nom : "Echantillon déposé",
    color : "#adf7b6" 
  },
  {
    nom : "Résultat partiel",
    color : "#fbb3bd" 
  },
  {
    nom : "Résultat final",
    color : "#b39ddc" 
  },
  {
    nom : "Payé",
    color : "#ced2c2" 
  },
  {
    nom : "Clôturé",
    color : "#92b1b6" 
  },
  ];

   form: FormGroup = new FormGroup({
    stat: new FormControl(''),  }) ;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Statut) { }

   onNoClick(): void {
    this.dialogRef.close();
  }

   confirm(n : any) {
    // closing itself and sending data to parent component
    
    this.dialogRef.close({ data: n }) ;
  }

  change(e : any){

    this.clr = e ;

  }

  ngOnInit(): void {
  }

}
