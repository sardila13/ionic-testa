import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IdentificacionDeContextosOSituacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identificacion-de-contextos-o-situaciones',
  templateUrl: 'identificacion-de-contextos-o-situaciones.html',
})
export class IdentificacionDeContextosOSituacionesPage {

	public layouticon:any;
  public layout:any = "grid-view";

  canWin : boolean = false;

  currentSound: HTMLAudioElement = new Audio();

	images: Array<String> = [];

	hide: Array<boolean> = [];

	buttons: Array<HTMLElement>;

	dificultad: String = "facil";

	winnerSound: String = "";

	category: String = "situaciones";

  rango: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	for(var j = 0; j < 5; j++){
    	this.hide[j] = true;
    }
    this.rango = 3;
    this.selectWinnerCategory(3, this.setImages);
  }

  ionViewWillLeave(){
    this.currentSound.pause();
    this.currentSound.currentTime = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificacionDeContextosOSituacionesPage');
    this.buttons = [];
    console.log(this.winnerSound);
  	/*for( var a = 0; a < 8; a++) {
  		var btnActual = "btn" + a;
  		var elbtn = document.getElementById(btnActual);
  		console.log(elbtn);
  		elbtn.classList.add("imagenesFa");
  		this.buttons.push(elbtn);
  	}*/
  }

  selectImage(id:String, event: any){
    var imagen = "assets" +  event.path[0].src.split("assets")[1];
    if(this.canWin){
      var separated = this.winnerSound.split('/');
      var separated2 = id.split('/');
      var winner = separated[separated.length-1].split('.')[0];
      id = separated2[separated2.length-1].split('.')[0];
    	if(winner === id){
         this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
        setTimeout(()=>{
          this.selectWinnerCategory(this.rango, this.setImages);
        },3000);
        this.currentSound.pause();
    		console.log("Ganaste");
    	}
    	else{
    		console.log("Perdiste");
        this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
    	}
    }
  }

  //Extra methods non related to the specific class

  randomNumber(max: number){
  	return Math.floor(Math.random() * (max + 1));
  }

  playSound(){
    this.canWin = true;
    this.currentSound.pause();
    this.currentSound.play();
  }

  playSoundParam(soundPath:String){
    var sound = new Audio("assets/sounds/" + soundPath);
    return sound;
  }

  changeDifficulty() {

    this.canWin = false;

    this.currentSound.pause();

  	this.hideImagenes();

  	var rango = 1;
  	if(this.dificultad ==="facil"){
  		rango = 3;
  	}
  	else if(this.dificultad ==="intermedio"){
  		rango = 5;
  	}
  	else if(this.dificultad ==="dificil"){
  		rango = 8;
  	}
    this.rango = rango;
  	/*this.selectWinnerCategory(rango, this.setArrayCategory, this.selectWinnerPosition);*/
  	//this.setClassImages(clase);
  	this.selectWinnerCategory(rango, this.setImages);
  }

  hideImagenes(){
  	if(this.dificultad === "facil"){
      this.layout = "grid-view";
  		for(var c = 0; c < 5; c++) this.hide[c] = true;
  	}
  	if(this.dificultad === "intermedio"){
  		this.layout = "grid-view";
		  this.hide[0] = false;
  		this.hide[1] = false;
  		this.hide[2] = true;
  		this.hide[3] = true;
  		this.hide[4] = true;
  	}
  	if(this.dificultad === "dificil"){
  		this.layout = "grid-view";
  		for(var ka = 0; ka < 5; ka++) this.hide[ka] = false;
  	}
  }

  selectWinnerPosition(rango: number){
  	var winnerPosition = this.randomNumber(rango-1);
    return winnerPosition;
  }

  selectWinnerCategory(rango : number, functionSetImages){
    this.canWin = false;
  	var winnerPosition = this.selectWinnerPosition(rango);
    //console.log("Winner category " +  " " + this.categories[winnerCategory]);
    //console.log("Winner position " + winnerPosition);
  	var winnerSound = functionSetImages(winnerPosition, this.category, rango, this.randomNumber, this.images);
    this.winnerSound = winnerSound;
    this.currentSound = this.playSoundParam(winnerSound);
  }

  setImages(winnerPosition: number, category: number, rango: number, functionRandom, images:Array<string>){
    var imageToAdd : string;
    var numbers = ["0","1","2","3","4","5","6","7"];
    images.splice(0,images.length);
    var winnerSound;
    for(var h = 0; h < rango; h++){
      var position = functionRandom(numbers.length-1);
      var value = numbers[position];
      numbers.splice(position,1);
      var path = "assets/img/Testa/" + category + "/" + value;
      imageToAdd = path + ".jpg";
      if(h == winnerPosition) winnerSound = category + "/" + value + ".mp3";
      if(h >= images.length) images.push(imageToAdd);
      else images[h] = imageToAdd;
      
      
    }
    return winnerSound;
  }

}
