import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page } from './page';

@NgModule({
  declarations: [
    Page,
  ],
  imports: [
    IonicPageModule.forChild(Page),
  ]
})
export class PageModule {}
