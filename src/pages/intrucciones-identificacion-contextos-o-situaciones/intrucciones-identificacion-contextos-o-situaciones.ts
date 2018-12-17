import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntruccionesIdentificacionContextosOSituacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intrucciones-identificacion-contextos-o-situaciones',
  templateUrl: 'intrucciones-identificacion-contextos-o-situaciones.html',
})
export class IntruccionesIdentificacionContextosOSituacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  iniciar(){
  	this.navCtrl.push('IdentificacionDeContextosOSituacionesPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntruccionesIdentificacionContextosOSituacionesPage');
  }

  ionViewCanEnter(){
    if(this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "IdentificacionDeContextosOSituacionesPage"){
      this.navCtrl.push('ContentPage');
    }
  }

}
