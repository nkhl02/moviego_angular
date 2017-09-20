import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchBarService {
	searchurl:string='https://api.themoviedb.org/3/search/movie?api_key=ce4f8f01808b6938d7e604ef8a765abf&query=';
	//favouriteSearch:string='https://api.themoviedb.org/3/movie/upcoming?api_key=ce4f8f01808b6938d7e604ef8a765abf';
	
	constructor(private http:Http){}
	search(temp:any)
	{
	  return this.http.get(this.searchurl+temp)
  	 .map(response=>response.json());
    }
 //  favouriteMovie()
	// {
	// 		return this.http.get(this.favouriteSearch)
 //  	 .map(response=>response.json());
 //  }
}