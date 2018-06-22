import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { TocPage } from '../toc/toc';
import { Chapter1Page } from '../chapter1/chapter1';
import { Chapter3Page } from '../chapter3/chapter3';

@IonicPage()
@Component({
  selector: 'page-chapter2',
  templateUrl: 'chapter2.html',
})
export class Chapter2Page {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter2Page');
  }

  public onToc(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(TocPage);
    modal.present();
  }

  public onPrevious(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter1Page);
    modal.present();
  }

  public onNext(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter3Page);
    modal.present();
  }
}
