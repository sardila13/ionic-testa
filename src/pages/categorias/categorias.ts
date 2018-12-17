import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  public chats:any;
  public layouticon:any;
  public layout:any = "grid-view";

  canWin: boolean = false;

  currentSound: HTMLAudioElement = new Audio();

  images: Array<String> = [];

  hide: Array<boolean> = [];

  dificultad: String = "facil";

  buttons: Array<HTMLElement> = [];

  category: String;

  winner: number;

  winnerSound: String;

  rango: number = 2;

  categories: Array<String> = ["animalesDeLaGranja","animalesDeLaSelva",
    "mediosDeTransporte","instrumentosMusicales","cosasDeLaCasa","sonidosDelCuerpo"];
    categoriesFront: Array<String> = ["Animales De LaGranja","Animales De La Selva",
    "Medios De Transporte","Instrumentos Musicales","Cosas De La Casa","Sonidos Del Cuerpo"];

  constructor(public navCtrl: NavController) {
      //this.chats= dataProvider.getall();
      //console.log('this.chats',this.chats)

      this.category = this.categories[0];

      for(var j = 0; j < 5; j++){
        this.hide[j] = true;
      }

      var rango = 2;

      this.selectWinner(rango, this.setImages);
  }

  ionViewWillLeave(){
    console.log(this.currentSound);
    this.currentSound.pause();
  }

  ionViewDidLoad() {
    this.buttons;
    for( var a = 0; a < 8; a++) {
      var btnActual = "btn" + a;
      var elbtn = document.getElementById(btnActual);
      //elbtn.classList.add("imagenesFa");
      this.buttons.push(elbtn);
    }
  }

  changeCategory(){
    this.canWin = false;
    this.selectWinner(this.rango, this.setImages);
  }

  setClassImages(clase: string){
    for(var b = 0; b < this.buttons.length; b++){
      //this.buttons[b].classList.add(clase);
    }
  }

  randomNumber(max: number){
    return Math.floor(Math.random() * (max + 1));
  }


  hideImagenes(){
    if(this.dificultad === "facil"){
      for(var c = 0; c < 5; c++) this.hide[c] = true;
    }
    if(this.dificultad === "intermedio"){
    this.hide[0] = false;
      this.hide[1] = false;
      this.hide[2] = true;
      this.hide[3] = true;
      this.hide[4] = true;      
    }
    if(this.dificultad === "dificil"){
      for(var ka = 0; ka < 5; ka++) this.hide[ka] = false;
    }
  }

  changeDifficulty(){

    this.canWin = false;
    this.currentSound.pause();

    this.hideImagenes();

    var clase = "";
    var rango = 1;
    if(this.dificultad ==="facil"){
      this.layout = "grid-view";
      rango = 2;
      clase = "imagenesFa";
    }
    else if(this.dificultad ==="intermedio"){
      this.layout = "grid-view";
      rango = 4;
      clase = "imagenesIntermedio";
    }
    else if(this.dificultad ==="dificil"){
      this.layout = "grid-view";
      rango = 7;
      clase = "imagenesDif";
    }
    this.rango = rango;
    this.setClassImages(clase);
    this.selectWinner(rango, this.setImages);
  }

  playSound(){
    this.canWin = true;
    this.currentSound.pause();
    this.currentSound.play();
  }

  playSoundParam(soundPath: String){
    var sound = new Audio("assets/sounds/" + soundPath);
    return sound;
  }

  selectImage(path:String, event: any){
    var imagen = "assets" +  event.path[0].src.split("assets")[1];
    var id = this.images.indexOf(path);
    if(this.canWin){
      if(this.winner === id){
        this.currentSound.pause();
        //console.log("Ganaste");
        //window.alert("Ganaste");
        this.canWin = false;
        this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
        setTimeout(()=>{
          this.selectWinner(this.rango, this.setImages);
        },3000);
        
      }
      else{
        console.log("Perdiste");
        this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
      }
    }
  }

  selectWinnerPosition(rango: number){
    var winnerPosition = this.randomNumber(rango);
    this.winner = winnerPosition;
    return winnerPosition;
  }

  selectWinner(rango:number,functionSetImages){
    this.canWin = false;
    var winnerPosition = this.selectWinnerPosition(rango);
    var winnerSound = functionSetImages(rango, winnerPosition, this.randomNumber, this.category, this.images);
    this.setSound(winnerSound);
  }

  setSound(sound: String){
    this.winnerSound = sound;
    this.currentSound = this.playSoundParam(sound);
  }

  

  setImages(rango: number, winnerPosition: number, functionRandom, category: String, images:Array<String>){
    var winnerSound;
    images.splice(0,images.length);

    for(var i = 0; i <= rango; i++){
      var path = category + "/" + functionRandom(7);
      var imagePath = "assets/img/Testa/" + path;
      var image = imagePath + ".jpg";
      if(images.indexOf(image) > -1) i--;
      else {
        if(i === winnerPosition) winnerSound = path + ".mp3"
        if(i >= images.length) images.push(imagePath + ".jpg");
        else images[i] =  imagePath + ".jpg";
      }
    }
    return winnerSound;

  }

}
