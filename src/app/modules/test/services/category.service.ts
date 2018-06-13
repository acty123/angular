import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private items: string[]=['Comedia','Accion','Aventura','Drama']

  constructor() { }

  getItems(){
    return this.items;
  }
  get(id:number){
    return this.items[id];
  }
}