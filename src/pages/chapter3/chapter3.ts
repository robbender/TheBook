import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { TocPage } from '../toc/toc';
import { Chapter2Page } from '../chapter2/chapter2';

@IonicPage()
@Component({
  selector: 'page-chapter3',
  templateUrl: 'chapter3.html',
})
export class Chapter3Page {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter3Page');
  }

  public onToc(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(TocPage);
    modal.present();
  }

  public onPrevious(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter2Page);
    modal.present();
  }

  public onEnd(): void {
    this.viewCtrl.dismiss();
  }

}
