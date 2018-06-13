import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbCreditsService {

  constructor(private http:Http) { }

  getCredits(idMovie){
    return this.http.get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=977cda5d9bfac0a6b0252ef0272785b6'); 
  }
}
