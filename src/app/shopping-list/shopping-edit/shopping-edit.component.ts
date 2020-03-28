import { Component, OnInit, ElementRef, ViewChild ,EventEmitter, Output, OnDestroy} from '@angular/core';

import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppinglistService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f',{static: false}) slform: NgForm;
  subscription: Subscription;
  EditMode=false;
 edititemindex: number;
 Ingredent: Ingredients;

  constructor(private slservice: ShoppinglistService) { }
  onsubmit(form: NgForm){
    const value=form.value;
     const newingerdent= new Ingredients(value.name,value.amount);
     if(this.EditMode){
       this.slservice.addeditingerdents(this.edititemindex,newingerdent)

     }
     else{
     this.slservice.addIngerdents(newingerdent);}
     this.EditMode=false;
    form.reset();
     

  }

  ngOnInit() {

  this.subscription=  this.slservice.onedititemchanged.subscribe(

    (i:number)=>{

      this.edititemindex=i;
      this.EditMode=true;
      this.Ingredent=this.slservice.getingerdent(i);
      
      this.slform.setValue(
        {
          name: this.Ingredent.name,
          amount: this.Ingredent.amount
        }
      )
       

    }
  );
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }


  onclear(){

    this.slform.reset();
    this.EditMode=false;

  }


  ondelete(){
    
      this.slservice.deleteingredent(this.edititemindex);



    
    this.onclear();


  }
}
