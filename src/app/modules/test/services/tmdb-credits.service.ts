import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
=======
import { Http } from '@angular/http';
>>>>>>> ff8d6c68e069ee9a7731481c227ac415cc0819f7

@Injectable({
  providedIn: 'root'
})
export class TmdbCreditsService {

<<<<<<< HEAD
  constructor(private http: HttpClient) {  }

  getCredits (idMovie: number) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=977cda5d9bfac0a6b0252ef0272785b6')
      .pipe(
        map(
          (data: any) => {
            return data.cast.map((item) => {
              return {
                id: item.id,
                name: item.name,
                character: item.character
              }
            });
          }
        )
      );
}
=======
  constructor(private http:Http) { }

  getCredits(idMovie){
    return this.http.get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=977cda5d9bfac0a6b0252ef0272785b6'); 
  }
>>>>>>> ff8d6c68e069ee9a7731481c227ac415cc0819f7
}
