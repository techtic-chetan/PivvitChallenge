import { Component } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: '../view/common/header.html'
})
export class HeaderComponent {
  	constructor() {
  	}
  	onActivate(e:any, outlet:any){
    	window.scrollTo(0, 0);
	}
}
