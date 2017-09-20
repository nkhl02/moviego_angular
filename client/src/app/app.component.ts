import { Component } from '@angular/core';
import {Schema} from './schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieGo';
  movie_list:Schema;
movie_fav_list:Schema;

  onrecieve(movies:any){
  	this.movie_list=movies;
  	//console.log(this.movie_list);
  }

 onfavrecieve(favmovie:Schema){
  	this.movie_fav_list=favmovie;
  	console.log(this.movie_fav_list);
  }
}