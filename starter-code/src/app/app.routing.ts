import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyMovieComponent } from './components/my-movie/my-movie.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);
