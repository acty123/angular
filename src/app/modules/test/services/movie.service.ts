import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private items: string[]=['Piratas del Caribe','Se busca','movie3','movie4'];

  constructor() { }

  getItems(){
    return this.items;
  }
  get(id:number){
    return this.items[id];
  }
}
