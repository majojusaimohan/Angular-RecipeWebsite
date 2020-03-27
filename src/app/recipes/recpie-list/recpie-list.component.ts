import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from  '../recipes.model'; 
import { RecipeService } from '../recipe.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {

 
 recipes: Recipe[] ;
 constructor(private recipeSevice: RecipeService,private route: Router,private activateroute: ActivatedRoute){


 }

 newrecipe(){
   this.route.navigate(['new'],{relativeTo: this.activateroute })


 }



  

  ngOnInit() {
    this.recipes=this.recipeSevice.getRecipes();
  }

}
