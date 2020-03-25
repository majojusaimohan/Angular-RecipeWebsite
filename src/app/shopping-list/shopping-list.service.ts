import { Ingredients } from '../shared/ingredients.model';

export class ShoppinglistService{
 private   ingredients: Ingredients[] =[
        new Ingredients('Apple',5),
        new Ingredients('tomato',10)
      ];

      getIngresents(){
          return this.ingredients.slice();
      }

      addIngerdents(ingredient:Ingredients){
          this.ingredients.push(ingredient);


      }
}