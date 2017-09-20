import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {SearchBarService} from './search-bar.service';
import { EventEmitter,Input,Output } from '@angular/core';
import {Schema}from'../schema';
import 'rxjs/add/operator/map';
@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {



 // @Input()  name: string;
  @Output() receive = new EventEmitter<Schema>();
 

 
  temp:String;
  movie_list:Schema;
  constructor(private searchservice:SearchBarService){}
  show():void{
    if(this.temp!=""){
  	this.searchservice.search(this.temp).subscribe((movies:Schema)=>{
  	this.movie_list=movies;
    this.receive.emit(this.movie_list);
   //console.log(this.xyz);
    });
}
else{
  alert("empty field");
}
  		}
// private apiUrl='https://api.themoviedb.org/3/search/movie?api_key=0f580d1c6c088cfc6ff3ac002801c40a&query=the+gentleman';
// data:any={};
// constructor(private http:Http)
// {
// 	console.log('hello fellow user');
// 	this.getContacts();
// 	this.getData();
// }
// getData(){
// 	return this.http.get(this.apiUrl)
// 	.map((res:Response)=>res.json())
// }
// getContacts(){
// 	this.getData().subscribe(data=>{
// 		console.log(data);
// 		this.data=data;
// 	})
// }

}
