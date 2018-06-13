import { Component, OnInit } from '@angular/core';
import { TmdbMoviesService } from '../services/tmdb-movies.service';

@Component({
  selector: 'app-tmdb-movies',
  templateUrl: './tmdb-movies.component.html',
  styleUrls: ['./tmdb-movies.component.scss']
})
export class TmdbMoviesComponent implements OnInit {
  public movies:any;
  constructor(private tmdbMoviesService:  TmdbMoviesService) { }

  ngOnInit() {
    this.tmdbMoviesService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.log(error);
      }
    );
}

}
