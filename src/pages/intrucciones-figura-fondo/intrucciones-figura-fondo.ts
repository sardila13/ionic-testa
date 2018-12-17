import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntruccionesFiguraFondoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intrucciones-figura-fondo',
  templateUrl: 'intrucciones-figura-fondo.html',
})
export class IntruccionesFiguraFondoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  iniciar(){
  	this.navCtrl.push('FiguraFondoPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntruccionesFiguraFondoPage');
  }
  ionViewCanEnter(){
    console.log(this.navCtrl.last().component.name);
    if(this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "FiguraFondoPage"){
      this.navCtrl.push('ContentPage');
    }
  }

}
