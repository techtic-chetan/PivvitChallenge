import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './view/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	constructor() {
  	}
  	onActivate(e:any, outlet:any){
    	window.scrollTo(0, 0);
	}
}
