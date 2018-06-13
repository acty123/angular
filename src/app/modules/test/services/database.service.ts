import { Injectable } from '@angular/core';
import { ActorService } from './actor.service';
import { CategoryService } from './category.service';
import { MovieService } from './movie.service';
import { CountryService } from './country.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public items: any[]=[
    {
      movie:this.movieService.get(0),
     actors:[
       this.actorService.get(1),
       this.actorService.get(2)
     ],
     category:this.categoryService.get(2),
     country:this.countryService.get(2),
     ranking:4
    },
    {movie:this.movieService.get(1),
      actors:[
        this.actorService.get(0),
      ],
      category:this.categoryService.get(0),
      country:this.countryService.get(0),
      ranking:3.8
     }
  ];
  constructor(
    private actorService: ActorService,
    private movieService: MovieService,
    private countryService: CountryService,
    private categoryService: CategoryService,
  ) { }

  getItems() {
    // return this.items;
  }
}
