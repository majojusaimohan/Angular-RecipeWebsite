import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model'
import { ShoppinglistService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredients[] ;

  constructor(private slservice: ShoppinglistService) { 

  }

  ngOnInit() {
   this.ingredients= this.slservice.getIngresents();
   this.slservice.Ingregentschanged.subscribe(

    (ingredients: Ingredients[])=>this.ingredients=ingredients
   )

  }

  

}
