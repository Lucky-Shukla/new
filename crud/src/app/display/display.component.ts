import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private myStore : Store<{ data : { productName : string , Pid : number,productPrice:number } }>) { }

  mydata ? : { data : { productName : string , Pid : number ,productPrice:number} };

  confirm : boolean;

  check()
  {

    this.confirm = true;

  }

  ngOnInit() 
  {

    this.myStore.subscribe(data =>
      {this.mydata = data})

  }

}
