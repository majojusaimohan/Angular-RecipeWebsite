import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe
 
 
 
 onselected(){
   this.recipeservice.recipeselected.emit(this.recipe);

 }
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  }



}
