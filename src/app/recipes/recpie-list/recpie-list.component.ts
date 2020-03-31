import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from  '../recipes.model'; 
import { RecipeService } from '../recipe.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit ,OnDestroy{

 subscription: Subscription;
 recipes: Recipe[] ;
 constructor(private recipeSevice: RecipeService,private route: Router,private activateroute: ActivatedRoute){


 }

 ngOnInit() {

 this.subscription= this.recipeSevice.recipechanges.subscribe(
(recipe:Recipe[])=>{

  this.recipes=recipe;
}

  )
    
    this.recipes=this.recipeSevice.getRecipes();
  }


 newrecipe(){
   this.route.navigate(['new'],{relativeTo: this.activateroute })


 }


ngOnDestroy(){
  this.subscription.unsubscribe();
}
  

  

}
