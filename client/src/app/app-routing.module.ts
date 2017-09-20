import { NgModule }             from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {SearchBarComponent} from './search-bar-component/search-bar.component';
import {FavouriteComponent} from './favourite/favourite.component';


const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 /* { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }*/
  { path: 'search',     component: SearchBarComponent },
   { path: 'favourites',     component: FavouriteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}