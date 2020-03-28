import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppinglistService{
    Ingregentschanged = new Subject<Ingredients[]>();
    onedititemchanged=  new Subject<number>();
 private   ingredients: Ingredients[] =[
        new Ingredients('Apple',5),
        new Ingredients('tomato',10)
      ];

      getIngresents(){
          return this.ingredients.slice();
      }
getingerdent(index: number){
  return this.ingredients[index];
}

      addIngerdents(ingredient:Ingredients){
          this.ingredients.push(ingredient);
          this.Ingregentschanged.next(this.ingredients.slice());


      }

      addIngredentsfromrecipes(ingredients: Ingredients[]){

        this.ingredients.push(...ingredients);
        this.Ingregentschanged.next(this.ingredients.slice());
      }

      addeditingerdents(id: number ,ingre: Ingredients){
        this.ingredients[id]=ingre;
       this. Ingregentschanged.next(this.ingredients.slice());

      }

      deleteingredent(index: number){
        this.ingredients.splice(index,1);
        
        this. Ingregentschanged.next(this.ingredients.slice());
      }
}