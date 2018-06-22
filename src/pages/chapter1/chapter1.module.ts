import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chapter1Page } from './chapter1';

@NgModule({
  declarations: [
    Chapter1Page,
  ],
  imports: [
    IonicPageModule.forChild(Chapter1Page),
  ],
})
export class Chapter1PageModule {}
