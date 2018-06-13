import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  /*private actor: string[]=[
    'Jhony Deep','Angelina Jolie','Actor Numero 3','Actor Numero 4'
  ]*/
  private actor: any[]=[
    {
      id:1,
      nombre:"Jhony Deep",
      nacionalidad:"Americano",
      fecha_nacimiento:"12-12-1990"
    },
    {
      id:2,
      nombre:"Angelina Jolie",
      nacionalidad:"Britanica",
      fecha_nacimiento:"10-10-1982"
    },
    {
      id:4,
      nombre:"actor 3",
      nacionalidad:"Colombiano",
      fecha_nacimiento:"10-11-1984"
    },
  ]
  constructor() { }

  getactor(){
    return this.actor;
  }
  get(id:number){
    return this.actor[id];
  }
}
