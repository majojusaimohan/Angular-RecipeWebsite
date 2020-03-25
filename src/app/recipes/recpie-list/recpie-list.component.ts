import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from  '../recipes.model'; 
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {

 
 recipes: Recipe[] ;
 constructor(private recipeSevice: RecipeService){


 }



  

  ngOnInit() {
    this.recipes=this.recipeSevice.getRecipes();
  }

}
