import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page15Page } from '../page15/page15';

@Component({
  selector: 'page-page14',
  templateUrl: 'page14.html'
})
export class Page14Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage15(){
      this.navCtrl.push(Page15Page);
    }
}
