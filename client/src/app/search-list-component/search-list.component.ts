import { Component } from '@angular/core';
import { EventEmitter,Input,Output } from '@angular/core';
import {AddFavouriteService}from'../favourite/favourite.service';
import {Schema} from'../schema';
import 'rxjs/add/operator/map';
@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  //styleUrls: ['./search-bar.component.css']
})
export class SearchListComponent{
 p: number = 1;

title="List of Related Movies";

//@Input() childMessage: string;

@Input('movies') movies:Schema;


  constructor() {


  }
  

}
