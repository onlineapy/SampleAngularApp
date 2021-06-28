import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'SampleApp';

  constructor(){
    console.log(123);
  }

}
//this is for testing git
