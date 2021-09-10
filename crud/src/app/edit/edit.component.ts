import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEventPattern } from 'rxjs';
import * as allData from '../store/action';
import { productInfo } from '../store/productinfo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public mystore : Store<{ data : { productName : string , Pid : number } }>) { }

  ngOnInit(): void {



  }

  extract = "enter product name " ;

  extracttwo = 1;

  extractthird = 1000;

  newproductinfo = new productInfo(this.extract,this.extracttwo,this.extractthird);

  form()
  {

    this.mystore.dispatch(new allData.actionClass(this.newproductinfo));

  }

}
