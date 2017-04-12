import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http'; 

import { PurchaseService } from '../services/index'; 

@Component({
  selector: 'home-app',
  templateUrl: '../view/common/header.html'
})
export class HomeComponent {
	purchases:any;

  	constructor(private _purchaseService : PurchaseService) {

  	}

  	OnInit(){
  		this._purchaseService.getPurchase().subscribe(
  				data =>this.purchases = data.response,
              	error => console.log(error));
  	}
}
