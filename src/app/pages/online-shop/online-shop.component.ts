import { Component } from '@angular/core';

@Component({
  selector: 'app-online-shop',
  templateUrl: './online-shop.component.html',
  styleUrls: ['./online-shop.component.scss']
})
export class OnlineShopComponent {
  lastBrand = [
    {title:'Quick Links',options: ['Home','Featured Products','Specials','New Products','All Products ...']},
    {title:'Information',options: ['View Cart','Site Map','Gift Certificate FAQ','Discount Coupons','Newsletter Unsubscribe']},
    {title:'Customer Service',options: ['Contact Us','Shipping & Returns','Privacy Notice','Conditions of Use','My Account']}
  ]

}
