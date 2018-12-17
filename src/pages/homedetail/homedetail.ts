import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-homedetail',
  templateUrl: 'homedetail.html',
})
export class HomeDetailPage {
  public name:any;
  public lasttext:any;
  public imagepath:any;
  public discoutd:any;
  public price: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagepath=navParams.get('img');
    this.name=navParams.get('name');
    this.lasttext   =navParams.get('lasttext');
    this.discoutd=navParams.get('discout');
    this.price = navParams.get('price');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomedetailPage',this.price);
  }

}
