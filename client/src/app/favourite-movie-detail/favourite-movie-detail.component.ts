import { Component, OnInit } from '@angular/core';
import {Schema} from '../schema';
import { EventEmitter,Input,Output } from '@angular/core';
import {AddFavouriteService}from'../favourite/favourite.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-favourite-movie-detail',
  templateUrl: './favourite-movie-detail.component.html',
  styleUrls: ['./favourite-movie-detail.component.css']
})
export class FavouriteMovieDetailComponent implements OnInit {

@Input('mov') favmovies:Schema;
ngOnInit() {
  }

  constructor(private favouriteservice:AddFavouriteService){}
  updatefav(movieid:Number,vote_average:Number):void{

    alert(movieid);



 	this.favouriteservice.favupdate(movieid,vote_average).subscribe((movies:Schema)=>{

    });
}
}

   		
   



 

