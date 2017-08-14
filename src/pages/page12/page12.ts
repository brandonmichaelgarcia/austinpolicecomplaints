import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page13Page } from '../page13/page13';

@Component({
  selector: 'page-page12',
  templateUrl: 'page12.html'
})
export class Page12Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage13(){
      this.navCtrl.push(Page13Page);
    }
}
