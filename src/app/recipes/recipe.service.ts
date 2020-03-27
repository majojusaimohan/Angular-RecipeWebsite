import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{


  public recipeselected= new EventEmitter<Recipe>();
  private  recipes: Recipe[] = [
        new Recipe('Pizza',
         'A teasty Pizza', 
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [
           new Ingredients('Meat',1),
           new Ingredients('french fries',20)
         ]
         ),
        new Recipe('Burger',
         'Big Bug Burgger', 
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [
          new Ingredients('bread',1),
          new Ingredients('cheese',5)
        ]
         
         )
      ];
 constructor(private slservice: ShoppinglistService ){}
getRecipes(){
 return this.recipes.slice()

  }

  getrecipe(index: number){
    return this.recipes[index];

  }
addIngredentsTOShoppingList(ingredents:Ingredients[]){
  this.slservice.addIngredentsfromrecipes(ingredents);



}


  
}