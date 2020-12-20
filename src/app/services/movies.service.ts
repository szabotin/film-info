import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/Movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies!: Movie[];
  moviesSubject = new Subject<Movie[]>();

  constructor(private http: HttpClient) { }

  emitMoviesSubject() {
    this.moviesSubject.next(this.movies/*.slice()*/);
  }
  getMoviesDefault() {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=02d4c25380337ec772186e444819df76&language=en-US&query=get");
  }
}
