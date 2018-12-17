import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntruccionesCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intrucciones-categorias',
  templateUrl: 'intrucciones-categorias.html',
})
export class IntruccionesCategoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntruccionesCategoriasPage');
  }

  iniciar(){
  	this.navCtrl.push('CategoriasPage');
  }

  ionViewCanEnter(){
	if(this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "CategoriasPage"){
		this.navCtrl.push('ContentPage');
	}
  }

}
