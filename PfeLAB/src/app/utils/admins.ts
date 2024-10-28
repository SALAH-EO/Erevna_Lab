export class Admins {
    public id: number;
    public nom: string;
    public prenom: string;
    public email: string;
    public domaine : string ;
    public password : string ;

    constructor(id: number,
nom: string,
prenom: string,
email: string,
domaine : string,
password : string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom ;
        this.email = email ;
        this.domaine = domaine ;
        this.password = password ;
    }

}