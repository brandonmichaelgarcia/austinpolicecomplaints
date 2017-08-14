import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page10Page } from '../page10/page10';

@Component({
  selector: 'page-page9',
  templateUrl: 'page9.html'
})
export class Page9Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage10(){
    this.navCtrl.push(Page10Page);
  }
}
