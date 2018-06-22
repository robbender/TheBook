import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { Chapter1Page } from '../chapter1/chapter1';
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter3Page } from '../chapter3/chapter3';


@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})

export class TocPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }


  public onHome(): void {
    this.viewCtrl.dismiss();
  }

  public onChpOne(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter1Page);
    modal.present();
  }

  public onChpTwo(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter2Page);
    modal.present();
  }

  public onChpThree(): void {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(Chapter3Page);
    modal.present();
  }
}
