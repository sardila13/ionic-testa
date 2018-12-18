import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
      //this.chats= dataProvider.getall();
      //console.log('this.chats',this.chats)
  }

  iniciar = function() {
    this.navCtrl.push('ContentPage');
  }

  ionViewDidLoad() {
    setTimeout(()=>{
    	this.iniciar();
    }, 1000)
  }

  
  

}
