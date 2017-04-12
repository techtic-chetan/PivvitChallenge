import { Component } from '@angular/core';

@Component({
  selector: 'footer-app',
  templateUrl: '../view/common/footer.html'
})
export class FooterComponent {
  	constructor() {
  	}
  	onActivate(e:any, outlet:any){
    	window.scrollTo(0, 0);
	}
}
