import { Component, OnInit,  } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recpie-detail',
  templateUrl: './recpie-detail.component.html',
  styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {
recipe: Recipe;
id: number

  
  constructor( private recipeservive: RecipeService,private route: Router, private activatedroute: ActivatedRoute) { 
  
    
  }

  ngOnInit() {
    this.activatedroute.params.subscribe(
(params: Params)=>{
  this.id=+params['id'];
  this.recipe= this.recipeservive.getrecipe(this.id);
}

    )
    
  }
  onAddToShopppingList(){
    this.recipeservive.addIngredentsTOShoppingList(this.recipe.ingredents)


  }
  editRecipe(){

  this.route.navigate(['edit'],{relativeTo: this.activatedroute })
   // this.route.navigate(['../',this.id,'edit'],{relativeTo: this.activatedroute })
  }

}
