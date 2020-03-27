import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppinglistService{
    Ingregentschanged = new EventEmitter<Ingredients[]>();
 private   ingredients: Ingredients[] =[
        new Ingredients('Apple',5),
        new Ingredients('tomato',10)
      ];

      getIngresents(){
          return this.ingredients.slice();
      }

      addIngerdents(ingredient:Ingredients){
          this.ingredients.push(ingredient);
          this.Ingregentschanged.emit(this.ingredients.slice());


      }

      addIngredentsfromrecipes(ingredients: Ingredients[]){

        this.ingredients.push(...ingredients);
        this.Ingregentschanged.emit(this.ingredients.slice());
      }
}