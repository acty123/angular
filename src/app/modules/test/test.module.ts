import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import { TestServicesComponent } from './test-services/test-services.component';
import { TestCategoriesComponent } from './test-categories/test-categories.component';
import { TestCountriesComponent } from './test-countries/test-countries.component';
import { TmdbMoviesComponent } from './tmdb-movies/tmdb-movies.component';
import { TmdbCreditsComponent } from './tmdb-credits/tmdb-credits.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'categories',
        component:TestCategoriesComponent
      },
      {
        path:'countries',
        component:TestCountriesComponent
      },
      {
        path:'movies',
        component:TmdbMoviesComponent
      },
      {
        path:'credits/:idMovie',
        component:TmdbCreditsComponent
      }
    ]),
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [UiTestCardComponent, TestServicesComponent, TestCategoriesComponent, TestCountriesComponent, TmdbMoviesComponent, TmdbCreditsComponent, TestRoutingComponent],
  exports:[UiTestCardComponent, TestServicesComponent, TestCategoriesComponent,TestCountriesComponent,TmdbMoviesComponent,TmdbCreditsComponent,TestRoutingComponent]
})
export class TestModule { }
