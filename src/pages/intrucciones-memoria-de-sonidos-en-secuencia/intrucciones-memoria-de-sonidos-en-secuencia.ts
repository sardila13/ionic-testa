import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntruccionesMemoriaDeSonidosEnSecuenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intrucciones-memoria-de-sonidos-en-secuencia',
  templateUrl: 'intrucciones-memoria-de-sonidos-en-secuencia.html',
})
export class IntruccionesMemoriaDeSonidosEnSecuenciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  iniciar(){
  	this.navCtrl.push('MemoriaDeSonidosEnSecuenciaPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntruccionesMemoriaDeSonidosEnSecuenciaPage');
  }

  ionViewCanEnter(){
    if(this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "MemoriaDeSonidosEnSecuenciaPage"){
      this.navCtrl.push('ContentPage');
    }
  }

}
