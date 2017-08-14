import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page16Page } from '../page16/page16';

@Component({
  selector: 'page-page15',
  templateUrl: 'page15.html'
})
export class Page15Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage16(){
      this.navCtrl.push(Page16Page);
    }
}
