import type { Routes } from '@angular/router';
import { FeedCreatorComponent } from './pages/feed-creator/feed-creator.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-feed', component: FeedCreatorComponent}
];
