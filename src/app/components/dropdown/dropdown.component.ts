import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:no-input-rename
  @Input('place-holder') placeHolder = 'Input Name' ;
  // tslint:disable-next-line:no-input-rename
  @Input('foods') foods: string ;

  ngOnInit() {
  }


  // foods: any = [
  //   {
  //     value: 'steak-0', viewValue: 'Steak'
  //   },

  //   { value: 'pizza-1', viewValue: 'Pizza'
  //   },
  //   {
  //     value: 'tacos-2', viewVa