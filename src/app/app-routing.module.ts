import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { OnlineShopComponent } from './pages/online-shop/online-shop.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component: MainMenuComponent},
  {path:'OnlineShop',component:OnlineShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
