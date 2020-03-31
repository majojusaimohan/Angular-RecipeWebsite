import { Component } from '@angular/core';
import { Stroagedataservice } from '../shared/data-stroage.service';


@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
 // styleUrls: ['./app.component.css']
})
export class headerComponent {
 
  constructor(private datastorage: Stroagedataservice){}
  onsavedata(){

    this.datastorage.onstoredata();
  }
  onfetchdata(){

    this.datastorage.fetchrecipes().subscribe();
  }
}
