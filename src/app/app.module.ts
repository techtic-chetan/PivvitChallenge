import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { routing } from './app.routes';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header';
import { FooterComponent } from './component/footer';
import { NotFoundComponent } from './component/notfound';
import { HomeComponent } from './component/home';

/*Services*/



/*Modules*/


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
 ]
})
export class AppModule { }
