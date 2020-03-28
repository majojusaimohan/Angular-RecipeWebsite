import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model'
import { ShoppinglistService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingredients: Ingredients[] ;
private issubchanges: Subscription;

  constructor(private slservice: ShoppinglistService) { 

  }

  ngOnInit() {
   this.ingredients= this.slservice.getIngresents();
  this.issubchanges= this.slservice.Ingregentschanged.subscribe(

    (ingredients: Ingredients[])=>this.ingredients=ingredients
   )

  }
  ngOnDestroy(){
    this.issubchanges.unsubscribe();
  }
  
  oneditItem(i: number){
    this.slservice.onedititemchanged.next(i);


    
  }

  

}
