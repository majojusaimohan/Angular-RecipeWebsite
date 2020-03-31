import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecpieDetailComponent } from './recipes/recpie-detail/recpie-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolver } from './recipes/recipe-start/recipe-resolver.service';


const appRoutes: Routes=[

    {path:'',redirectTo: '/recipes', pathMatch: 'full'},
    {path:'recipes',component: RecipesComponent , children: [

      {  path: '' , component: RecipeStartComponent },
      {path: 'new', component: RecipeEditComponent},
      { path: ':id'  , component:  RecpieDetailComponent  , resolve: [RecipeResolver]},
     
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolver]}
    ]},
    {path:'shopping-list',component: ShoppingListComponent}

];


@NgModule(

    {
           imports: [RouterModule.forRoot(appRoutes)],
           exports: [RouterModule]

    }
)
export class AppRoutingMoudle{


}