import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntruccionesMemoriaDeSonidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intrucciones-memoria-de-sonidos',
  templateUrl: 'intrucciones-memoria-de-sonidos.html',
})
export class IntruccionesMemoriaDeSonidosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  iniciar(){
  	this.navCtrl.push('MemoriaDeSonidosPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntruccionesMemoriaDeSonidosPage');
  }

  ionViewCanEnter(){
    if(this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "MemoriaDeSonidosPage"){
      this.navCtrl.push('ContentPage');
    }
  }

}
