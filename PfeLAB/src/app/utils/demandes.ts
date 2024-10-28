export class Demandes {
    public idClient: number;
    public num: number;
    public Date : string ;
    public nom : string ;
    public TypeDem : string ;
    public Lab : string ;
    public NbreEch: number;
    public repetitions : number ;
    public Nech : string ;
    public molecule : string ;
    public toxicite : string ;
    public conditions : string ;
    public recuperation : string ;
    public acte : string ;
    public Montant : number ;
    public rdv: string;
    public statut : string ;
    public pdf : string ;
    public resultat : Blob ;
    public facture : string ;

    constructor(idClient: number,
num: number,
Date : string,
nom : string,
TypeDem :string,
Lab : string ,
NbreEch: number,
repetitions : number,
Nech : string,
molecule : string,
toxicite:string,
conditions : string,
recuperation:string,
acte: string,
Montant : number,
rdv : string,
statut: string,
pdf : string,
resultat : Blob ,
facture : string ,){
        this.idClient = idClient;
        this.num = num;
        this.Date = Date ;
        this.nom = nom ;
        this.TypeDem = TypeDem ;
        this.Lab = Lab ;
        this.NbreEch = NbreEch ;
        this.repetitions = repetitions ;
        this.Nech = Nech ;
        this.molecule = molecule ;
        this.toxicite = toxicite ;
        this.conditions = conditions ;
        this.recuperation = recuperation ;
        this.acte = acte ;
        this.Montant = Montant ;
        this.rdv = rdv ;
        this.statut = statut ;
        this.pdf = pdf ;
        this.resultat = resultat ;
        this.facture = facture ;
    }

}