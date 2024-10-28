import { Injectable , Output , EventEmitter} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Users} from '../utils/users';
import {Demandes} from '../utils/demandes';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ApiService {

	redirectUrl!: string ;
  	
  	baseUrl:string = "http://localhost/api/";

    baseUrl2:string = "http://localhost/api/mail/"

  	@Output() getLoggedInName: EventEmitter<any> = new EventEmitter() ;

  	constructor(private HttpClient : HttpClient) { }

  	public userregistration(nom:any,prenom:any,email:any,domaine:any,password:any,mobile:any,etablissement:any,entity:any,encadrant:any,niveau:any,adresse:any){
  		return this.HttpClient.post<any>(this.baseUrl + '/register.php',
  		{
  			nom,prenom,email,domaine,password,mobile,etablissement,entity,encadrant,niveau,adresse
  		})
  		.pipe(map(Users => {	
  		 return Users;}))
  	}

  	public userlogin(email: any , password : any){

  		return this.HttpClient.post<any>(this.baseUrl + '/login.php' , { email , password})
  		.pipe(map(Users => {
  			//console.log(Users.email);
  			this.setToken(Users.email);
  			this.getLoggedInName.emit(true);
  			return Users ;
  		}))
  	}


 	public viewClient(email:any) {

    return this.HttpClient.get<Users[]>( this.baseUrl+'viewClient.php?email='+email ) ;

  }

    public ajoutDemande(idClient:any,code_v:any,nom :any,TypeDem:any,Lab:any,NbreEch:any,repetitions:any,Nech:any,molecule:any,toxicite:any,conditions:any,recuperation:any,acte:any,Montant:any ){

    	return this.HttpClient.post<any>(this.baseUrl + '/ajoutDemande.php',
  		{
  			idClient,code_v,nom,TypeDem,Lab,NbreEch,repetitions,Nech,molecule,toxicite,conditions,recuperation,acte,Montant  
        		})
  		.pipe(map(Demandes => {	
  		 return Demandes;}))
    }

    public viewDemandes(idClient:any){
      return this.HttpClient.get<Demandes[]>( this.baseUrl+'viewDemandes.php?id='+idClient ) ;
    }

     public sendMail(code_v:any,Nech:any,Tech:any,domaine:any,machine:any,email:any){

      return this.HttpClient.post<any>(this.baseUrl2 + '/mail.php',
      {
        code_v,Nech,Tech,domaine,machine,email
      })
    }

    public validMail(num:any ){
      return this.HttpClient.put(this.baseUrl2 + 'validMail.php?num='+num,null ) ;
    }

    

    public viewdemande(idClient:any , num:any){
      return this.HttpClient.get<Demandes[]>( this.baseUrl+'viewDemande.php?id='+idClient+'&num='+num ) ;
    }

    public loginAdmin(id:any , password:any){
      return this.HttpClient.post<any>(this.baseUrl + '/loginAdmin.php' , { id , password})
      .pipe(map(Admins => {
        //console.log(Users.email);
        this.setToken(Admins.id);
        this.getLoggedInName.emit(true);
        return Admins ;
      }))
    }

    public Demandes(){
       return this.HttpClient.get<Demandes[]>( this.baseUrl+'Demandes.php' ) ;
    }

    public topdf(num:any){
       return this.HttpClient.get<Demandes[]>( this.baseUrl+'genpdf.php?num='+num ) ;
    }

    public changeStat(num:any , stat : any){
      return this.HttpClient.put(this.baseUrl + 'changeStat.php?num='+num+'&stat='+stat,null ) ;
    }





  	setToken(token: string){
  		localStorage.setItem('token',token) ;
  	}

  	getToken(){
  		return localStorage.getItem('token');
  	}

  	deleteToken(){
  		localStorage.removeItem('token');
  	}

  	isLoggedIn(){
  		const usertoken = this.getToken();
  		if(usertoken != null){
  			return true ;
  		}
  		return false ;
  	}

} 