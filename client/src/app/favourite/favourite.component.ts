import { Component, OnInit } from '@angular/core';
import {Schema} from '../schema';
import {AddFavouriteService}from'../favourite/favourite.service';
import { EventEmitter,Input,Output } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {


 @Output() favrecieve = new EventEmitter<Schema>();

 ngOnInit() {

  }
constructor(private favouriteservice:AddFavouriteService){}



// fav:any;
// getFav(){
//    this.favService.getFavNews()
//    .subscribe(data=>{
//      this.fav=data;
//      console.log(data);
//      console.log("this is from fav",this.fav);
//    })
//     }


res:Schema;
 getfav(){



 this.favouriteservice.getdata().subscribe(data=>{
this.res=data;
console.log(this.res);
    this.favrecieve.emit(this.res);
   }
  );


}

}
