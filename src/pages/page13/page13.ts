import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page14Page } from '../page14/page14';

@Component({
  selector: 'page-page13',
  templateUrl: 'page13.html'
})
export class Page13Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage14(){
      this.navCtrl.push(Page14Page);
    }
}
