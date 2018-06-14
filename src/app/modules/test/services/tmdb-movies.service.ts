import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
=======
import { Http } from '@angular/http';
>>>>>>> ff8d6c68e069ee9a7731481c227ac415cc0819f7

@Injectable({
  providedIn: 'root'
})
export class TmdbMoviesService {

  constructor(private http:Http) { }
<<<<<<< HEAD
  getMovies () {
    return this.http
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=977cda5d9bfac0a6b0252ef0272785b6')
      .pipe(
        map(
          (response: Response) => {
            return response.json().results.map((item)=>{
              return {
                id: item.id,
                title: item.title
              }
            });
          }
        )
      );
}
=======
  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=977cda5d9bfac0a6b0252ef0272785b6'); 
  }
>>>>>>> ff8d6c68e069ee9a7731481c227ac415cc0819f7
}
