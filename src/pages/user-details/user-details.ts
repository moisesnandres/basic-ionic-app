import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.login = navParams.get('login');
  }

  ionViewDidLoad() {
    console.log('Hello UserDetails Page');
  }
}
