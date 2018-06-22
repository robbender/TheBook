import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { TocPage } from '../toc/toc';
import { Chapter2Page } from '../chapter2/chapter2';

@IonicPage()
@Component({
  selector: 'page-chapter1',
  templateUrl: 'chapter1.html',
})
export class Chapter1Page {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter1Page');
  }

  public onToc(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(TocPage);
    modal.present();
  }

  public onNext(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter2Page);
    modal.present();
  }
}
