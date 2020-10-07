import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SearchComponent } from './search/search.component';
import {ExporttComponent} from './exportt/exportt.component';

const routes: Routes = [ 
  {
    path: 'search',
    component: SearchComponent
  }  ,
  {
    path:'ex',
    component:ExporttComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
