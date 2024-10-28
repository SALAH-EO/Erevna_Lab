export class Users {
    public id: number;
    public nom: string;
    public prenom: string;
    public email: string;
    public domaine : string ;
    public password : string ;
    public mobile : string ;
    public etablissement : string ;
    public entity : string ;
    public encadrant : string ;
    public niveau : string ;
    public adresse : string ;
    public pdp : Blob ;




    constructor(id: number,
nom: string,
prenom: string,
email: string,
domaine : string,
password : string,
mobile : string,
etablissement : string,
entity : string,
encadrant : string,
niveau : string,
adresse : string,
pdp : Blob){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom ;
        this.email = email ;
        this.domaine = domaine ;
        this.password = password ;
        this.mobile = mobile ;
        this.etablissement = etablissement ;
        this.entity = entity ;
        this.encadrant = encadrant ;
        this.niveau = niveau ;
        this.adresse = adresse ;
        this.pdp = pdp ;
    }

}