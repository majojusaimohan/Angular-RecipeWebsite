import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private recipeservice: RecipeService,private route: Router) { }
id: number;
editMode=false;
recipeform: FormGroup;



  ngOnInit() {
    this.activeroute.params.subscribe(

(param: Params)=>{
  this.id=+ param['id'];
  this.editMode=(param['id']!=null);
  this.initform();
 
}

    )
   
  }
  onSubmit(){
      const newRecipe = new Recipe(
      this.recipeform.value['name'],
      this.recipeform.value['description'],
     this.recipeform.value['Imagepath'],
      this.recipeform.value['ingredents']);
  if(this.editMode){
    this.recipeservice.updaterecipe(this.id, newRecipe);
    
  }else{
    this.recipeservice.AddRecipe(newRecipe);
  }
  this.route.navigate(['/recipes'])
}


  private initform(){
    let recipeName='';
    let imagepath='';
    let recipedescription='';
    let recipeingredents = new FormArray([]);

    if(this.editMode){
      const recipe= this.recipeservice.getrecipe(this.id);
      recipeName=recipe.name;
      imagepath=recipe.imagepath;
      recipedescription=recipe.description;
      if(recipe['ingredents']){
        for(let ingredent of recipe.ingredents){

          recipeingredents.push(
            new FormGroup({
              'name': new FormControl(ingredent.name ,Validators.required),
              'amount': new FormControl(ingredent.amount,
               [Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)])

            })


          );
        }
      }

    }
    this.recipeform = new FormGroup(
      {
        'name': new FormControl(recipeName, Validators.required),
        'Imagepath': new FormControl(imagepath,Validators.required),
        'description': new FormControl(recipedescription,Validators.required ) ,
        'ingredents': recipeingredents


      }
    );
    
  
  }

  onAddIngedent(){

  (<FormArray>this.recipeform.get('ingredents')).push(
    new FormGroup(
      {
        'name' : new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
    )

  );
  }


   get controls() {
     // a getter!
     return (<FormArray>this.recipeform.get('ingredents')).controls;
  }

  oncancel(){
    this.route.navigate(['/recipes'])

  }

  ondeleteingredent(index: number){

    (<FormArray>this.recipeform.get('ingredents')).removeAt(index);
  }
}
