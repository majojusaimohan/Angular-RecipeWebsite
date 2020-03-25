import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    DropdownDirectve
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
