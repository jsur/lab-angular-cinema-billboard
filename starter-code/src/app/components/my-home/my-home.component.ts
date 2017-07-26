import { Component } from '@angular/core';
import { MovieInfoService } from '../../services/movie-info.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent {

  movies: Array<Object> = this.movieService.getMovies();

  constructor(private movieService: MovieInfoService) { }

}
