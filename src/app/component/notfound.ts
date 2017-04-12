import { Component } from '@angular/core';

@Component({
  selector: 'notfound-app',
  templateUrl: '../view/common/404.html'
})
export class NotFoundComponent {
  	constructor() {
  	}
  	onActivate(e:any, outlet:any){
    	window.scrollTo(0, 0);
	}
}
