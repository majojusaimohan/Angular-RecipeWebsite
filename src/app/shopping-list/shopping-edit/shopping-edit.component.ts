import { Component, OnInit, ElementRef, ViewChild ,EventEmitter, Output} from '@angular/core';

import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameinput', { static: false})  nameinputref:ElementRef;
 @ViewChild('amountinput',{ static: false})  amountinputref:ElementRef;

  constructor(private slservice: ShoppinglistService) { }
  onAddItem(){
    const name=this.nameinputref.nativeElement.value;
    const amount=this.amountinputref.nativeElement.value;
    

     const newingerdent= new Ingredients(name,amount);
    this.slservice.addIngerdents(newingerdent);
     
     

  }
  ngOnInit() {
  }

}
