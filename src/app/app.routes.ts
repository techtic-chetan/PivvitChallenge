import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './component/notfound';
import { HomeComponent } from './component/home';

const routes: Routes = [
    { path: '', component: HomeComponent },  
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' } 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
 