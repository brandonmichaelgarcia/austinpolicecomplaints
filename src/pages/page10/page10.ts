import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page11Page } from '../page11/page11';

@Component({
  selector: 'page-page10',
  templateUrl: 'page10.html'
})
export class Page10Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage11(){
    this.navCtrl.push(Page11Page);
  }
}
