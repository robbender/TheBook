import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { TocPage } from '../toc/toc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  booktitle = 'The Book';
  // author = '';

  public onToc(): void {
    let modal = this.modalCtrl.create(TocPage);
    modal.present();
  }
}
