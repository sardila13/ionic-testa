import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiguraFondoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-figura-fondo',
  templateUrl: 'figura-fondo.html',
})
export class FiguraFondoPage {

  public layouticon:any;
  public layout:any = "grid-view";

  canWin : boolean = false;

  currentSounds : Array<HTMLAudioElement> = [];

	images: Array<String> = [];

	hide: Array<boolean> = [];

	buttons: Array<HTMLElement>;

	dificultad: String = "facil";

	winner: Array<String> = [];

	winnerSounds: Array<String> = [];

	rango: number;

	categories: Array<String> = ["animalesDeLaGranja","animalesDeLaSelva",
  	"mediosDeTransporte","instrumentosMusicales","cosasDeLaCasa","sonidosDelCuerpo"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for(var j = 0; j < 2; j++){
    	this.hide[j] = true;
    }

    var rango = 4;
    this.rango = rango;
    this.selectWinner(rango, this.setImages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiguraFondoPage');
    this.buttons = [];
  	for( var ax = 0; ax < 6; ax++) {
  		var btnActual = "btn" + ax;
  		var elbtn = document.getElementById(btnActual);
  		this.buttons.push(elbtn);
  	}
    console.log(this.winner);
  }

  ionViewWillLeave(){
    for(var da = 0; da < this.currentSounds.length; da++){
      this.currentSounds[da].pause();
      this.currentSounds[da].currentTime = 0;
    }
  }

  setClassImages(clase: string){
  	for(var b = 0; b < this.buttons.length; b++){
  		this.buttons[b].classList.add(clase);
  	}
  }

  randomNumber(max: number){
  	return Math.floor(Math.random() * (max + 1));
  }


  hideImagenes(){
  	
  	if(this.dificultad === "intermedio"){
		this.hide[0] = true;
  		this.hide[1] = true;
  		 		
  	}
  	if(this.dificultad === "dificil"){
  		for(var ka = 0; ka < 2; ka++) this.hide[ka] = false;
  	}
  }

  changeDifficulty(){

    this.canWin = false;

    for(var xy = 0; xy < this.currentSounds.length; xy++){
      this.currentSounds[xy].pause();
    }

  	this.hideImagenes();

  	var rango = 4;
  	if(this.dificultad ==="intermedio"){
      this.layout = "grid-view";
  		rango = 6;
  	}
  	else if(this.dificultad ==="dificil"){
      this.layout = "grid-view";
  		rango = 8;
  	}
  	this.rango = rango
  	this.selectWinner(rango, this.setImages);
  }

  playSound(){
    this.canWin = true;
    for(var r = 0; r < this.currentSounds.length; r++){
      this.currentSounds[r].pause();
    }
  	for(var a = 0; a < this.winnerSounds.length; a++){
  		this.currentSounds[a].play();
  	}
  }

  playSoundParam(soundPath: Array<String>){
    this.currentSounds.splice(0, this.currentSounds.length);
    for(var ax = 0; ax < this.winnerSounds.length; ax++){
  		var sound = new Audio("assets/sounds/" + soundPath[ax]);
      this.currentSounds.push(sound);
  	}
  }

  selectImage(id:String, event:any){
    id = (id.split('.')[0]);
    var arreglo = id.split('/');
    id = arreglo[arreglo.length - 2] + '/' +arreglo[arreglo.length - 1];
    var imagen = "assets" +  event.path[0].src.split("assets")[1];
    if(this.canWin){
      /*var found : boolean = false;
      for(var df = 0; df < this.winner.length && !found; df++){
        var currentWinner = this.winner[df].split('.')[0];
        console.log(this.winner[df]);
        console.log("df " + df);
        console.log("winner " + currentWinner);
        console.log("id " + id);
        console.log(currentWinner == id);
        if(currentWinner == id){
          found = true;
          if(this.winner.length == 1){
            for(var xy = 0; xy < this.currentSounds.length; xy++){
              this.currentSounds[xy].pause();
            }
            window.alert("Ganaste");
            this.selectWinner(this.rango, this.setImages);
          }
          else{
            console.log("encontraste uno");
            window.alert("Enocntraste uno");
            this.winner.splice(this.winner.indexOf (id),1);
          }
        }
        else if(df === this.winner.length){
          console.log("Fallaste");
          window.alert("intentalo de nuevo");
        }
      }*/
      this.checkIfisWinner(id,function(message, input, parent){
        if(message === 1){
            console.log("Ganaste")
            this.canWin = false;
            parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
            setTimeout(()=>{
              parent.selectWinner(parent.rango, parent.setImages);
            },3000);
        }
        else if(message === 2){
          console.log("encontraste uno");
          var index: number = parent.winner.indexOf(input+".mp3");
          console.log("index " + index);
          console.log("input " + input)
          parent.winner.splice(parent.winner.indexOf (input+".mp3"),1);
          parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
        }
        else{
          console.log("Fallaste");
          parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
        }
        console.log(parent.winner);
      })
    	
    }
  }

  checkIfisWinner(input:String, sendMessage){
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
          sendMessage(1, input, this);
        }
        else{
          //Encontraste uno
          sendMessage(2, input, this);
        }

      }
      //Fallaste
      else if(df === this.winner.length-1) sendMessage(3, input, this);
    }
  }



  selectWinnerPosition(rango: number){
  	var winners: Array<number> = [];
  	for(var i = 1; i <= rango/2; i++){
  		var winnerPosition = this.randomNumber(rango-1);
  		if(winners.indexOf(winnerPosition)>-1) i--;
  		else winners.push(winnerPosition);
  	}
  	//this.winner = winners;
  	return winners;
  }

  selectWinner(rango:number,functionSetImages){
    this.canWin = false;
  	var winners = this.selectWinnerPosition(rango);
  	var winnerSounds = functionSetImages(winners, this.randomNumber, rango, this.images, this.categories);
  	this.setSound(winnerSounds);
  }

  setSound(sound: Array<String>){
    for(var dy = 0; dy < sound.length; dy++){
      this.winnerSounds[dy] = sound[dy];
    }
    this.winner = this.winnerSounds;
  	this.playSoundParam(this.winnerSounds);
  }

  setImages(winnersPositions:Array<number>, functionRandomNumber, rango:number, images:Array<String>, categories:Array<String>){
    images.splice(0, images.length);
  	var sounds: Array<String> = [];
  	for(var j = 0; j < rango; j++){
  		var categoria = functionRandomNumber(5);
  		var category = categories[categoria];
  		var image = functionRandomNumber(7)
  		var pathimg = "assets/img/Testa/" + category + "/" + image;
      var pathsnd = category + "/" + image;
  		if(images.indexOf(pathimg + ".jpg")>-1) j--;
  		else{
	  		if(winnersPositions.indexOf(j)> -1){
	  			sounds.push(pathsnd + ".mp3");
	  		}
	  		if(j >= images.length) images.push(pathimg + ".jpg");
	  		else images[j] = pathimg + ".jpg";
  		}
  		
  	}
  	return sounds;
  }

}
