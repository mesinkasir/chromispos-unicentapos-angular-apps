import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { CatComponent } from './cat/cat.component';
import { UserComponent } from './user/user.component';
import { CashComponent } from './cash/cash.component';
import { CostComponent } from './cost/cost.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'buy-component', component: BuyComponent },
  { path: 'sell-component', component: SellComponent },
  { path: 'cat-component', component: CatComponent },
  { path: 'user-component', component: UserComponent },
  { path: 'cash-component', component: CashComponent },
  { path: 'cost-component', component: CostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
