import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {headerComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecpieListComponent } from './recipes/recpie-list/recpie-list.component';
import { RecpieDetailComponent } from './recipes/recpie-detail/recpie-detail.component';
import { RecipeItemComponent } from './recipes/recpie-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { DropdownDirectve } from './shared/dropdown.directive';
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { AppRoutingMoudle } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    RecipesComponent,
    RecpieListComponent,
    RecpieDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirectve,
    RecipeStartComponent,
    RecipeEditComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingMoudle
  ],
  providers: [ShoppinglistService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
