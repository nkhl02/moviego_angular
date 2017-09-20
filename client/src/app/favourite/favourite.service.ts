import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Schema} from '../schema';


@Injectable()
export class AddFavouriteService {
	saveurl:string='http://localhost:3000';
	//favouriteSearch:string='https://api.themoviedb.org/3/movie/upcoming?api_key=ce4f8f01808b6938d7e604ef8a765abf';

	constructor(private http:Http){}
	save(temp:Schema)
	{

	 alert(temp.title + "added to favourites")
	   return this.http.post(this.saveurl+'/save',temp).map(response=>response.json());;
  	
    }
    getdata():any{

 return this.http.get(this.saveurl+'/getdata').map(response=><Schema>response.json());;
    
    }
    
    favupdate(id:Number,vote_average:Number){
    	return this.http.put(this.saveurl+'/updatedata',{id,vote_average}).map(response=><Schema>response.json());;
    }
}