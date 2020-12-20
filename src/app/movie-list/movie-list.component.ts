import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../models/Movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies!: any[];
  moviesSubscription!: Subscription;
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    /* this.moviesSubscription = this.moviesService.moviesSubject.subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    )
    console.log(this.movies);
    this.moviesService.getMoviesDefault();
    console.log(this.movies);
    this.moviesService.emitMoviesSubject(); */

    return this.moviesService.getMoviesDefault().subscribe((data) => {
      console.log("get api data", data.results[0].adult)
      this.movies = data
    });
  }
}
