import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
//import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import {SearchBarComponent} from './search-bar-component/search-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import { SearchBarService } from './search-bar-component/search-bar.service';
import { FormsModule }   from '@angular/forms';
import {SearchListComponent} from './search-list-component/search-list.component';
import { FavouriteComponent } from './favourite/favourite.component';
import{AddFavouriteService}from './favourite/favourite.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FavouiteListComponent } from './favouite-list/favouite-list.component';
import { FavouriteMovieDetailComponent } from './favourite-movie-detail/favourite-movie-detail.component';


//enableProdMode();

@NgModule({
  declarations: [
    AppComponent,SearchBarComponent,SearchListComponent, FavouriteComponent, MovieDetailComponent, FavouiteListComponent, FavouriteMovieDetailComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,FormsModule,NgxPaginationModule
  ],
  providers: [SearchBarService,AddFavouriteService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
