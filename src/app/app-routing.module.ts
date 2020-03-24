import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TakeOrderComponent} from './take-order/take-order.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  { path: 'take-order', component: TakeOrderComponent },
  { path: '', component: DashboardComponent },

  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
