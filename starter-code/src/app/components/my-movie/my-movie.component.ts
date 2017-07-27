import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieInfoService } from '../../services/movie-info.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie: Object;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieInfoService,
    private router: Router) { }

  ngOnInit() {
     this.movie = this.movieService.getMovie(this.route.snapshot.params['id']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
