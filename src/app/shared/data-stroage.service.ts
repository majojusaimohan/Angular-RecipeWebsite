import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import{ pipe} from 'rxjs';
import{ map, tap} from 'rxjs/operators'; 
@Injectable({providedIn: 'root'})
export class Stroagedataservice{

    constructor(private http: HttpClient, private recipeservice: RecipeService){}

    onstoredata(){
        const recipe= this.recipeservice.getRecipes();

        this.http.put("https://ng-complete-guide-95967.firebaseio.com/Recipe.json",recipe).subscribe(

        (response)=> {console.log(response);}

        )

        
    }

    fetchrecipes(){
     return   this.http.get<Recipe[]>
        ("https://ng-complete-guide-95967.firebaseio.com/Recipe.json")
        .pipe(map( recipes=>{
            return recipes.map(recipes=>{

                return {...recipes , ingredents:recipes.ingredents? recipes.ingredents : []}
            })
        }
            
            ),tap((recipe:Recipe[])=>{
                this.recipeservice.setRecipe(recipe);}
            )
           

            )

            
        
    
            
    }
     
}