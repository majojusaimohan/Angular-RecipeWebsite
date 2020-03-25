import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
 // styleUrls: ['./app.component.css']
})
export class headerComponent {
  title = 'Haiii';
 @Output() featureselected = new EventEmitter<string>();
  
 onSelect(feature:string){
    this.featureselected.emit(feature);


  }
}
