import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private items: string[]=['Colombia','Estados Unidos','Rusia','Australia']

  constructor() { }

  getItems(){
    return this.items;
  }
  get(id:number){
    return this.items[id];
  }
}
