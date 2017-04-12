import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http'; 

import { PurchaseService } from '../services/index'; 

@Component({
  selector: 'home-app',
  templateUrl: '../view/common/add-purchase.html'
})
export class HomeComponent {
	purchases:any;
	model: any = {
		customer_name:null,
		offering_id:null,
		quantity:null
	};
  	constructor(private _purchaseService : PurchaseService) {

  	}

  	addPurchase(){
  		this._purchaseService.addPurchase(this.model).subscribe(
  			data =>this.purchases = data.data, 
            error => console.log(error));
  	}
}
