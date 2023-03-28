import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from '../shared/shared.module';
import { OnlineShopComponent } from './online-shop/online-shop.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavOnlineShopComponent } from './online-shop/navOnlineShop/navOnlineShop.component';



@NgModule({
  declarations: [
    MainMenuComponent,
    OnlineShopComponent,
    ContentComponent,
    NavOnlineShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    MainMenuComponent
  ]
})
export class PagesModule { }
