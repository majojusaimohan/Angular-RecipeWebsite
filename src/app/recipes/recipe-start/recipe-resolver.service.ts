import { Injectable } from '@angular/core';
import { Stroagedataservice } from 'src/app/shared/data-stroage.service';
import { Recipe } from '../recipes.model';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Injectable({providedIn: 'root'})
export class RecipeResolver implements Resolve<Recipe[]>{

    constructor(private datastorage: Stroagedataservice, private recipeservice: RecipeService){}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipe= this.recipeservice.getRecipes()
if(recipe.length===0){
return this.datastorage.fetchrecipes(); }
else
{
    return recipe;
}


}


}