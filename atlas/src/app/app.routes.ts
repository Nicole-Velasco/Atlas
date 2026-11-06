import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Discover } from './pages/discover/discover';
import { Explore } from './pages/explore/explore';
import { PlanTrip } from './pages/plan-trip/plan-trip';
import { MyTrips } from './pages/my-trips/my-trips';
import { Saved } from './pages/saved/saved';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'discover', component: Discover },
  { path: 'explore', component: Explore },
  { path: 'plan-trip', component: PlanTrip },
  { path: 'my-trips', component: MyTrips },
  { path: 'saved', component: Saved },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: '' }
];