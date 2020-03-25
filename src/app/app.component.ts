import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Haiii';
  loadedfeatue='recipe'
  //feature: string
  onNavigate( feature: string ){
   this.loadedfeatue=feature;
  


  }
}
