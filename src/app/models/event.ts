export class Event{
  id:number;
  dateDebut:any;
  dateFin:any;
  titre:string;
  lieu:string;
  description:string;
  date:any;


  constructor(id, dateDebut, dateFin, titre, lieu, description, date){
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.titre= titre;
    this.lieu = lieu;
    this.description = description;
    this.date = date;
  }

}
