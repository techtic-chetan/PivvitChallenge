import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http'; 

@Injectable()
export class PurchaseService {
	
	constructor(private http: Http) {
	    this.cons = Cons.live();
	    this.server_type = 'live';
  	}

  	getPurchase(){
  		return this.http.get().map((response: Response) => response.json());
  	}
  	addPurchase(model){
  		return this.http.post(model).map((response: Response) => response.json());
  	}
}