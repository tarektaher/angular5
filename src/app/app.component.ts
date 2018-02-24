import { Component } from '@angular/core';

@Component({
  selector: 'app-tarek',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-5';

  message(value){
        console.log(value);
  }

  ngOnInit(){

    this.message(this.title);

  }
}
