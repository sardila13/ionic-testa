webpackJsonp([8],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguraFondoPageModule", function() { return FiguraFondoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__figura_fondo__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiguraFondoPageModule = /** @class */ (function () {
    function FiguraFondoPageModule() {
    }
    FiguraFondoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__figura_fondo__["a" /* FiguraFondoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__figura_fondo__["a" /* FiguraFondoPage */]),
            ],
        })
    ], FiguraFondoPageModule);
    return FiguraFondoPageModule;
}());

//# sourceMappingURL=figura-fondo.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiguraFondoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FiguraFondoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiguraFondoPage = /** @class */ (function () {
    function FiguraFondoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.layout = "grid-view";
        this.canWin = false;
        this.currentSounds = [];
        this.images = [];
        this.hide = [];
        this.dificultad = "facil";
        this.winner = [];
        this.winnerSounds = [];
        this.categories = ["animalesDeLaGranja", "animalesDeLaSelva",
            "mediosDeTransporte", "instrumentosMusicales", "cosasDeLaCasa", "sonidosDelCuerpo"];
        for (var j = 0; j < 2; j++) {
            this.hide[j] = true;
        }
        var rango = 4;
        this.rango = rango;
        this.selectWinner(rango, this.setImages);
    }
    FiguraFondoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiguraFondoPage');
        this.buttons = [];
        for (var ax = 0; ax < 6; ax++) {
            var btnActual = "btn" + ax;
            var elbtn = document.getElementById(btnActual);
            this.buttons.push(elbtn);
        }
        console.log(this.winner);
    };
    FiguraFondoPage.prototype.ionViewWillLeave = function () {
        for (var da = 0; da < this.currentSounds.length; da++) {
            this.currentSounds[da].pause();
            this.currentSounds[da].currentTime = 0;
        }
    };
    FiguraFondoPage.prototype.setClassImages = function (clase) {
        for (var b = 0; b < this.buttons.length; b++) {
            this.buttons[b].classList.add(clase);
        }
    };
    FiguraFondoPage.prototype.randomNumber = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    FiguraFondoPage.prototype.hideImagenes = function () {
        if (this.dificultad === "intermedio") {
            this.hide[0] = true;
            this.hide[1] = true;
        }
        if (this.dificultad === "dificil") {
            for (var ka = 0; ka < 2; ka++)
                this.hide[ka] = false;
        }
    };
    FiguraFondoPage.prototype.changeDifficulty = function () {
        this.canWin = false;
        for (var xy = 0; xy < this.currentSounds.length; xy++) {
            this.currentSounds[xy].pause();
        }
        this.hideImagenes();
        var rango = 4;
        if (this.dificultad === "intermedio") {
            this.layout = "grid-view";
            rango = 6;
        }
        else if (this.dificultad === "dificil") {
            this.layout = "grid-view";
            rango = 8;
        }
        this.rango = rango;
        this.selectWinner(rango, this.setImages);
    };
    FiguraFondoPage.prototype.playSound = function () {
        this.canWin = true;
        for (var r = 0; r < this.currentSounds.length; r++) {
            this.currentSounds[r].pause();
        }
        for (var a = 0; a < this.winnerSounds.length; a++) {
            this.currentSounds[a].play();
        }
    };
    FiguraFondoPage.prototype.playSoundParam = function (soundPath) {
        this.currentSounds.splice(0, this.currentSounds.length);
        for (var ax = 0; ax < this.winnerSounds.length; ax++) {
            var sound = new Audio("assets/sounds/" + soundPath[ax]);
            this.currentSounds.push(sound);
        }
    };
    FiguraFondoPage.prototype.selectImage = function (id, event) {
        id = (id.split('.')[0]);
        var arreglo = id.split('/');
        id = arreglo[arreglo.length - 2] + '/' + arreglo[arreglo.length - 1];
        var imagen = "assets" + event.path[0].src.split("assets")[1];
        if (this.canWin) {
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
            this.checkIfisWinner(id, function (message, input, parent) {
                if (message === 1) {
                    console.log("Ganaste");
                    parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                    setTimeout(function () {
                        parent.selectWinner(parent.rango, parent.setImages);
                    }, 3000);
                }
                else if (message === 2) {
                    console.log("encontraste uno");
                    var index = parent.winner.indexOf(input + ".mp3");
                    console.log("index " + index);
                    console.log("input " + input);
                    parent.winner.splice(parent.winner.indexOf(input + ".mp3"), 1);
                    parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                }
                else {
                    console.log("Fallaste");
                    parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
                }
                console.log(parent.winner);
            });
        }
    };
    FiguraFondoPage.prototype.checkIfisWinner = function (input, sendMessage) {
        var found = false;
        for (var df = 0; df < this.winner.length && !found; df++) {
            var current = this.winner[df].split('.')[0];
            if (current === input) {
                found = true;
                if (this.winner.length == 1) {
                    for (var xy = 0; xy < this.currentSounds.length; xy++) {
                        this.currentSounds[xy].pause();
                    }
                    //Ganaste
                    sendMessage(1, input, this);
                }
                else {
                    //Encontraste uno
                    sendMessage(2, input, this);
                }
            }
            else if (df === this.winner.length - 1)
                sendMessage(3, input, this);
        }
    };
    FiguraFondoPage.prototype.selectWinnerPosition = function (rango) {
        var winners = [];
        for (var i = 1; i <= rango / 2; i++) {
            var winnerPosition = this.randomNumber(rango - 1);
            if (winners.indexOf(winnerPosition) > -1)
                i--;
            else
                winners.push(winnerPosition);
        }
        //this.winner = winners;
        return winners;
    };
    FiguraFondoPage.prototype.selectWinner = function (rango, functionSetImages) {
        this.canWin = false;
        var winners = this.selectWinnerPosition(rango);
        var winnerSounds = functionSetImages(winners, this.randomNumber, rango, this.images, this.categories);
        this.setSound(winnerSounds);
    };
    FiguraFondoPage.prototype.setSound = function (sound) {
        for (var dy = 0; dy < sound.length; dy++) {
            this.winnerSounds[dy] = sound[dy];
        }
        this.winner = this.winnerSounds;
        this.playSoundParam(this.winnerSounds);
    };
    FiguraFondoPage.prototype.setImages = function (winnersPositions, functionRandomNumber, rango, images, categories) {
        images.splice(0, images.length);
        var sounds = [];
        for (var j = 0; j < rango; j++) {
            var categoria = functionRandomNumber(5);
            var category = categories[categoria];
            var image = functionRandomNumber(7);
            var pathimg = "assets/img/Testa/" + category + "/" + image;
            var pathsnd = category + "/" + image;
            if (images.indexOf(pathimg + ".jpg") > -1)
                j--;
            else {
                if (winnersPositions.indexOf(j) > -1) {
                    sounds.push(pathsnd + ".mp3");
                }
                if (j >= images.length)
                    images.push(pathimg + ".jpg");
                else
                    images[j] = pathimg + ".jpg";
            }
        }
        return sounds;
    };
    FiguraFondoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-figura-fondo',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/figura-fondo/figura-fondo.html"*/'<!--\n  Generated template for the FiguraFondoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Figuras fondo</ion-title>\n  </ion-navbar>\n  <div class="dificultades">\n    <ion-segment [(ngModel)]="dificultad" class="segmento">\n      <ion-segment-button value="facil" (click)="changeDifficulty()" style="color:white">\n        <p class="segmento-boton">Inicial</p>\n      </ion-segment-button>\n      <ion-segment-button value="intermedio" (click)="changeDifficulty()" style="color:white">\n        <p>Intermedio</p>\n      </ion-segment-button>\n      <ion-segment-button value="dificil" (click)="changeDifficulty()" style="color:white">\n        <p>Avanzado</p>\n      </ion-segment-button>     \n    </ion-segment>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<div class="chat-list-wrap {{layout}}">\n      <ion-list>\n        <ion-item  *ngFor="let image of images" (click)="selectImage(image, $event)">\n          <img  src="{{image}}">\n          <!-- <div class="chat-list-title">{{chat.name}}</div>\n          <div class="chat-list-sub-title">{{chat.lastText}}</div>\n          <div class="chat-list-price"><strong>Rs. {{chat.price}}</strong></div>\n          <div class="chat-list-discount">{{chat.discout}} OFF </div> -->\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n<ion-footer style="padding-top: 1em; padding-bottom: 1em">\n  <button class="center" ion-button round icon-left (click)="playSound()">\n      <div style="margin-top:5%; margin-bottom:5%">\n        <ion-icon name="volume-up" style="margin-right: 5%"></ion-icon>Reproducir sonido\n      </div>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/figura-fondo/figura-fondo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FiguraFondoPage);
    return FiguraFondoPage;
}());

//# sourceMappingURL=figura-fondo.js.map

/***/ })

});
//# sourceMappingURL=8.js.map