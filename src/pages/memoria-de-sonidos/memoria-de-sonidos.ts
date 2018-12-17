import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MemoriaDeSonidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memoria-de-sonidos',
  templateUrl: 'memoria-de-sonidos.html',
})
export class MemoriaDeSonidosPage {

	public layouticon:any;
	public layout:any = "grid-view";

  categories: Array<String> = ["animalesDeLaGranja","animalesDeLaSelva",
  "mediosDeTransporte","instrumentosMusicales","cosasDeLaCasa","sonidosDelCuerpo"];
  categoriesFront: Array<String> = ["Animales De LaGranja","Animales De La Selva",
  "Medios De Transporte","Instrumentos Musicales","Cosas De La Casa","Sonidos Del Cuerpo"];

  canWin: boolean = false;

  currentSounds : Array<HTMLAudioElement> = [];

	images: Array<String> = [];

	sounds:Array<string> = [];

	hide: Array<boolean> = [];

	buttons: Array<HTMLElement>;

	dificultad: String = "facil";

  stopSounds: boolean = false;

	winner: Array<String>;

  rango: number = 3;

  index : number;

  soundsPositions: Array<number>;

  	category: String = this.categories[0];

  constructor(public navCtrl: NavController) {
  	for(var j = 0; j < 4; j++){
    	this.hide[j] = true;
    }

    var rango = 3;

    this.soundsPositions = [0,1];

    this.setImagesAndPositions(rango);
  }

  ionViewWillLeave(){
    this.pauseSounds();
  }

  ionViewDidLoad() {
  }

  randomNumber(max: number){
  	return Math.floor(Math.random() * (max + 1));
  }


  hideImagenes(){
  	if(this.dificultad === "facil"){
  		for(var c = 0; c < 4; c++) this.hide[c] = true;
  	}
  	if(this.dificultad === "intermedio"){
		this.hide[0] = false;
  		this.hide[1] = false;
  		this.hide[2] = true;
  		this.hide[3] = true;
  	}
  	if(this.dificultad === "dificil"){
  		for(var ka = 0; ka < 4; ka++) this.hide[ka] = false;
  	}
  }

  selectImage(id:string, event: any){
  	var separated = id.split('/');
    var imagen = "assets" +  event.path[0].src.split("assets")[1];
  	var id = separated[separated.length-1].split('.')[0];
    if(this.canWin){
    	this.checkIfWinner(id, function(message, input:String, parent){
    		if(message === 1){
              console.log("Ganaste");
              parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
              setTimeout(()=>{
                parent.changeDifficulty();
              },3000);
	        }
        	else if(message === 2){
            parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
	          console.log("encontraste uno");
	          var index: number = parent.winner.indexOf(input+".mp3");
	          parent.winner.splice(parent.winner.indexOf (input+".mp3"),1);
	        }
        	else{
	          console.log("Fallaste");
            parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
        	}
    	})
    	/*var indexOfPosition = this.winner.indexOf(id);
      	console.log(indexOfPosition);
    	if(indexOfPosition > -1){      
    		this.winner.splice(indexOfPosition,1);

    		if(this.winner.length === 0){
	          this.pauseSounds();
	          console.log("Ganaste");
	          window.alert("Ganaste");
	          this.changeDifficulty();
	        }
	        else {
	          console.log("Sacaste uno");
	          window.alert("Encontraste uno");
	        }
    	}
    	else{
    		console.log("Fallaste");
        window.alert("intentalo de nuevo");
    	}*/
    }
  }

  checkIfWinner(input:String, cb){
  	var found: boolean = false;
    for(var df = 0; df < this.winner.length && !found; df++){
      var current = this.winner[df].split('.')[0];
      if(current === input){
        found = true;
        if(this.winner.length == 1) {
          for(var xy = 0; xy < this.currentSounds.length; xy++){
              this.currentSounds[xy].pause();
          }
          //Ganaste
          cb(1, input, this);
        }
        else{
          //Encontraste uno
          cb(2, input, this);
        }
  	  }
      else cb(-1, input, this);
  	}
  }

  changeDifficulty(){

    this.canWin = false;

    this.pauseSounds();

  	this.hideImagenes();
    this.sounds = [];

  	var rango = 3;
  	if(this.dificultad ==="facil"){
  		rango = 3;
      this.soundsPositions = [0,1];
  	}
  	else if(this.dificultad ==="intermedio"){
  		rango = 5;
      this.soundsPositions = [0,1,2,3];
  	}
  	else if(this.dificultad ==="dificil"){
  		rango = 7;
      this.soundsPositions = [0,1,2,3,4,5];
  	}
    this.rango = rango;
    this.setImagesAndPositions(rango);
  }

  changeCategory(id: number){
    this.changeDifficulty();
  }


  playSound(){
    this.pauseSounds();
    this.index = -1;
    this.playArraySounds();
  }

  pauseSounds(){
    this.stopSounds = true;
    for(var xy = 0; xy < this.currentSounds.length; xy++){
      this.currentSounds[xy].currentTime = 0;
      this.currentSounds[xy].pause();
      
    }
  }

  playArraySounds(){
    this.index++;
    if(this.index === this.sounds.length) {
      this.canWin = true;
      return;
    }
    var audio = new Audio("assets/sounds/" + this.category + "/" + this.sounds[this.index]);
    this.currentSounds[this.index] = audio;
    audio.addEventListener('ended', ()=> this.playArraySounds());
    audio.play();
  }

  setImagesAndPositions(rango: number){
    this.canWin = false;
  	var winnerPositions =  this.setWinnersPositions(rango, this.randomNumber);
    var sounds = this.setImages(winnerPositions, this.randomNumber, rango, this.images, this.category, this.sounds, this.soundsPositions);
    this.winner = sounds;
    this.playSoundParam(sounds);
  }

  playSoundParam(sounds: Array<String>){
    this.stopSounds = false;
    this.index = -1;
    this.playArraySoundsParam(sounds);
  }

  playArraySoundsParam(arraySounds: Array<String>){
    if(!this.stopSounds){
      this.index++;
      if(this.index === this.sounds.length) return;
      var audio = new Audio("assets/sounds/" + this.category + "/" +  arraySounds[this.index]);
      this.currentSounds[this.index] = audio;
      this.playArraySoundsParam(arraySounds);
    }
  }

  setWinnersPositions(rango: number, functionRandomNumber){
    var winnerPositions: Array<number> = [];
  	for(var i = 0; i <= rango-2; i++){
  		var winnerPosition = functionRandomNumber(rango);
      if(winnerPositions.indexOf(winnerPosition)> -1 ) i--;
  		else winnerPositions.push(winnerPosition);
  	}
    return winnerPositions;
  }

  setImages(winnerPositions: Array<number>, functionRandomNumber, rango: number, images: Array<String>, category: String, winnerSounds: Array<String>,soundsPositions:Array<number>){
    images.splice(0, images.length);
    winnerSounds.splice(0, winnerSounds.length);
  	for(var x = 0; x <= rango; x++){
      var path = "assets/img/Testa/" + category + "/" + functionRandomNumber(7);
      var image =  path + ".jpg";
      if(images.indexOf(image) > -1) x--;
      else{
        if(x >= images.length) images.push(path + ".jpg");
        else images[x] = path + ".jpg";

      }
    }
    for(var dx = 0; dx < winnerPositions.length; dx++){

      var soundPosition: number = 0;
      if(soundsPositions.length > 1) soundPosition = functionRandomNumber(soundsPositions.length-1);
      var separated = images[winnerPositions[dx]].split('/');
      var position = soundsPositions[soundPosition];
      winnerSounds[position] = separated[separated.length-1].split('.')[0] + ".mp3";	
      //winnerSounds[soundsPositions[soundPosition]] = (images[winnerPositions[dx]].split('/')[images.length]).split('.')[0] + ".mp3";
      soundsPositions.splice(soundsPositions.indexOf(position),1);
    }
    return winnerSounds;
  }

}
