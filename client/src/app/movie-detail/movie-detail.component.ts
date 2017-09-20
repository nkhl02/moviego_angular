import { Component, OnInit } from '@angular/core';
import { EventEmitter,Input,Output } from '@angular/core';
import {Schema} from '../schema';
import {AddFavouriteService}from'../favourite/favourite.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private favouriteservice:AddFavouriteService) { }
@Input('movie') movie:Schema;
  
  ngOnInit() {
  }
 addfav(movie:any):void{

 let res:Object;
 this.favouriteservice.save(movie).subscribe();

if(res)
{
	//alert([movie.title]+"added to favourites")
 }
}
}
