import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListViewComponent } from './film-list-view/film-list-view.component';
import { SingleFilmViewComponent } from './single-film-view/single-film-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListViewComponent,
    SingleFilmViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
