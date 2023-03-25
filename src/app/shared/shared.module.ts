import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { HeadImgComponent } from './head-img/head-img.component';



@NgModule({
  declarations: [
    NavigationComponent,
    SearchComponent,
    HeadImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavigationComponent,
    SearchComponent,
    HeadImgComponent
  ]
})
export class SharedModule { }
