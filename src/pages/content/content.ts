import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  constructor(public navCtrl: NavController) { }

  categorias(){
  	//this.navCtrl.push('CategoriasPage');
    this.navCtrl.push('IntruccionesCategoriasPage');
  }

  memoriaDeSonidos(){
  	//this.navCtrl.push('MemoriaDeSonidosPage');
    this.navCtrl.push('IntruccionesMemoriaDeSonidosPage');
  }
  memoriaDeSonidosEnSecuencia(){
  	//this.navCtrl.push('MemoriaDeSonidosEnSecuenciaPage');
    this.navCtrl.push('IntruccionesMemoriaDeSonidosEnSecuenciaPage');
  }
  identificacionDeContextosOSituaciones(){
  	//this.navCtrl.push('IdentificacionDeContextosOSituacionesPage');
    this.navCtrl.push('IntruccionesIdentificacionContextosOSituacionesPage');
  }
  figuraFondo(){
  	//this.navCtrl.push('FiguraFondoPage');
    this.navCtrl.push('IntruccionesFiguraFondoPage');
  }

}
