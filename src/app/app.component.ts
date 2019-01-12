import * as core from '@angular/core';

@core.Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  foods: any = [
    {
      value: 'steak-0', viewValue: 'Steak'
    },

    { value: 'pizza-1', viewValue: 'Pizza'
    },
    {
      value: 'tacos-2', viewValue: 'Tacos'
    }
  ] ;

  numbers: any = [
    {
      value : 1 , viewValue : '01622524064'
    },
    {
      value : 2 , viewValue : '01622552664'
    },
    {
      value : 3 , viewV