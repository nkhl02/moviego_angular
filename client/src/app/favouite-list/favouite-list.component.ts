import { Component, OnInit } from '@angular/core';
import {Schema} from '../schema';
import { EventEmitter,Input,Output } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-favouite-list',
  templateUrl: './favouite-list.component.html',
  styleUrls: ['./favouite-list.component.css']
})
export class FavouiteListComponent implements OnInit {

@Input('favmovies') favmov:Schema;


  constructor() { }

  ngOnInit() {


  }

}
