import type { Routes } from '@angular/router';
import { FeedCreatorComponent } from './pages/feed-creator/feed-creator.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-feed', component: FeedCreatorComponent},
  {path: 'feed/:id', component: FeedComponent}
];
