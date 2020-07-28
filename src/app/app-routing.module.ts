import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdteComponent } from './updte/updte.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },

  { path: 'updte/:id', component: UpdteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
