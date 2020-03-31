import { Recipe } from './recipes.model';
import {  Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

recipechanges= new Subject<Recipe[]>();
private  recipes: Recipe[]=[];

  // private  recipes: Recipe[] = [
  //       new Recipe('Pizza',
  //        'A teasty Pizza', 
  //        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //        [
  //          new Ingredients('Meat',1),
  //          new Ingredients('french fries',20)
  //        ]
  //        ),
  //       new Recipe('Burger',
  //        'Big Bug Burgger', 
  //        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //        [
  //         new Ingredients('bread',1),
  //         new Ingredients('cheese',5)
  //       ]
         
  //        )
  //     ];
 constructor(private slservice: ShoppinglistService ){}
getRecipes(){
  // this.recipechanges.next(this.recipes.slice())
 return this.recipes.slice()

  }

  getrecipe(index: number){
    return this.recipes[index];
    

  }
addIngredentsTOShoppingList(ingredents:Ingredients[]){
  this.slservice.addIngredentsfromrecipes(ingredents);



}
AddRecipe(recipe: Recipe){
  this.recipes.push(recipe);
  this.recipechanges.next(this.recipes.slice());
}
updaterecipe(id : number, recipe: Recipe){
  

this.recipes[id]=recipe;
this.recipechanges.next(this.recipes.slice());


}
deleterecipe(id: number){

  this.recipes.splice(id, 1);
  this.recipechanges.next(this.recipes.slice());
}
  
setRecipe(recipe: Recipe[]){
  this.recipes=recipe;
  this.recipechanges.next(this.recipes.slice());
}
}

