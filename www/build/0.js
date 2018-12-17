webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoriaDeSonidosPageModule", function() { return MemoriaDeSonidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memoria_de_sonidos__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MemoriaDeSonidosPageModule = /** @class */ (function () {
    function MemoriaDeSonidosPageModule() {
    }
    MemoriaDeSonidosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__memoria_de_sonidos__["a" /* MemoriaDeSonidosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__memoria_de_sonidos__["a" /* MemoriaDeSonidosPage */]),
            ],
        })
    ], MemoriaDeSonidosPageModule);
    return MemoriaDeSonidosPageModule;
}());

//# sourceMappingURL=memoria-de-sonidos.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoriaDeSonidosPage; });
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
 * Generated class for the MemoriaDeSonidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemoriaDeSonidosPage = /** @class */ (function () {
    function MemoriaDeSonidosPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.layout = "grid-view";
        this.categories = ["animalesDeLaGranja", "animalesDeLaSelva",
            "mediosDeTransporte", "instrumentosMusicales", "cosasDeLaCasa", "sonidosDelCuerpo"];
        this.categoriesFront = ["Animales De LaGranja", "Animales De La Selva",
            "Medios De Transporte", "Instrumentos Musicales", "Cosas De La Casa", "Sonidos Del Cuerpo"];
        this.canWin = false;
        this.currentSounds = [];
        this.images = [];
        this.sounds = [];
        this.hide = [];
        this.dificultad = "facil";
        this.stopSounds = false;
        this.rango = 3;
        this.category = this.categories[0];
        for (var j = 0; j < 4; j++) {
            this.hide[j] = true;
        }
        var rango = 3;
        this.soundsPositions = [0, 1];
        this.setImagesAndPositions(rango);
    }
    MemoriaDeSonidosPage.prototype.ionViewWillLeave = function () {
        this.pauseSounds();
    };
    MemoriaDeSonidosPage.prototype.ionViewDidLoad = function () {
    };
    MemoriaDeSonidosPage.prototype.randomNumber = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    MemoriaDeSonidosPage.prototype.hideImagenes = function () {
        if (this.dificultad === "facil") {
            for (var c = 0; c < 4; c++)
                this.hide[c] = true;
        }
        if (this.dificultad === "intermedio") {
            this.hide[0] = false;
            this.hide[1] = false;
            this.hide[2] = true;
            this.hide[3] = true;
        }
        if (this.dificultad === "dificil") {
            for (var ka = 0; ka < 4; ka++)
                this.hide[ka] = false;
        }
    };
    MemoriaDeSonidosPage.prototype.selectImage = function (id, event) {
        var separated = id.split('/');
        var imagen = "assets" + event.path[0].src.split("assets")[1];
        var id = separated[separated.length - 1].split('.')[0];
        if (this.canWin) {
            this.checkIfWinner(id, function (message, input, parent) {
                if (message === 1) {
                    console.log("Ganaste");
                    parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                    setTimeout(function () {
                        parent.changeDifficulty();
                    }, 3000);
                }
                else if (message === 2) {
                    parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                    console.log("encontraste uno");
                    parent.winner.splice(parent.winner.indexOf(input + ".mp3"), 1);
                }
                else {
                    console.log("Fallaste");
                    parent.images[parent.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
                }
            });
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
    };
    MemoriaDeSonidosPage.prototype.checkIfWinner = function (input, cb) {
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
                    cb(1, input, this);
                    this.canWin = false;
                }
                else {
                    //Encontraste uno
                    cb(2, input, this);
                }
            }
            else
                cb(-1, input, this);
        }
    };
    MemoriaDeSonidosPage.prototype.changeDifficulty = function () {
        this.canWin = false;
        this.pauseSounds();
        this.hideImagenes();
        this.sounds = [];
        var rango = 3;
        if (this.dificultad === "facil") {
            rango = 3;
            this.soundsPositions = [0, 1];
        }
        else if (this.dificultad === "intermedio") {
            rango = 5;
            this.soundsPositions = [0, 1, 2, 3];
        }
        else if (this.dificultad === "dificil") {
            rango = 7;
            this.soundsPositions = [0, 1, 2, 3, 4, 5];
        }
        this.rango = rango;
        this.setImagesAndPositions(rango);
    };
    MemoriaDeSonidosPage.prototype.changeCategory = function (id) {
        this.changeDifficulty();
    };
    MemoriaDeSonidosPage.prototype.playSound = function () {
        this.pauseSounds();
        this.index = -1;
        this.playArraySounds();
    };
    MemoriaDeSonidosPage.prototype.pauseSounds = function () {
        this.stopSounds = true;
        for (var xy = 0; xy < this.currentSounds.length; xy++) {
            this.currentSounds[xy].currentTime = 0;
            this.currentSounds[xy].pause();
        }
    };
    MemoriaDeSonidosPage.prototype.playArraySounds = function () {
        var _this = this;
        this.index++;
        if (this.index === this.sounds.length) {
            this.canWin = true;
            return;
        }
        var audio = new Audio("assets/sounds/" + this.category + "/" + this.sounds[this.index]);
        this.currentSounds[this.index] = audio;
        audio.addEventListener('ended', function () { return _this.playArraySounds(); });
        audio.play();
    };
    MemoriaDeSonidosPage.prototype.setImagesAndPositions = function (rango) {
        this.canWin = false;
        var winnerPositions = this.setWinnersPositions(rango, this.randomNumber);
        var sounds = this.setImages(winnerPositions, this.randomNumber, rango, this.images, this.category, this.sounds, this.soundsPositions);
        this.winner = sounds;
        this.playSoundParam(sounds);
    };
    MemoriaDeSonidosPage.prototype.playSoundParam = function (sounds) {
        this.stopSounds = false;
        this.index = -1;
        this.playArraySoundsParam(sounds);
    };
    MemoriaDeSonidosPage.prototype.playArraySoundsParam = function (arraySounds) {
        if (!this.stopSounds) {
            this.index++;
            if (this.index === this.sounds.length)
                return;
            var audio = new Audio("assets/sounds/" + this.category + "/" + arraySounds[this.index]);
            this.currentSounds[this.index] = audio;
            this.playArraySoundsParam(arraySounds);
        }
    };
    MemoriaDeSonidosPage.prototype.setWinnersPositions = function (rango, functionRandomNumber) {
        var winnerPositions = [];
        for (var i = 0; i <= rango - 2; i++) {
            var winnerPosition = functionRandomNumber(rango);
            if (winnerPositions.indexOf(winnerPosition) > -1)
                i--;
            else
                winnerPositions.push(winnerPosition);
        }
        return winnerPositions;
    };
    MemoriaDeSonidosPage.prototype.setImages = function (winnerPositions, functionRandomNumber, rango, images, category, winnerSounds, soundsPositions) {
        images.splice(0, images.length);
        winnerSounds.splice(0, winnerSounds.length);
        for (var x = 0; x <= rango; x++) {
            var path = "assets/img/Testa/" + category + "/" + functionRandomNumber(7);
            var image = path + ".jpg";
            if (images.indexOf(image) > -1)
                x--;
            else {
                if (x >= images.length)
                    images.push(path + ".jpg");
                else
                    images[x] = path + ".jpg";
            }
        }
        for (var dx = 0; dx < winnerPositions.length; dx++) {
            var soundPosition = 0;
            if (soundsPositions.length > 1)
                soundPosition = functionRandomNumber(soundsPositions.length - 1);
            var separated = images[winnerPositions[dx]].split('/');
            var position = soundsPositions[soundPosition];
            winnerSounds[position] = separated[separated.length - 1].split('.')[0] + ".mp3";
            //winnerSounds[soundsPositions[soundPosition]] = (images[winnerPositions[dx]].split('/')[images.length]).split('.')[0] + ".mp3";
            soundsPositions.splice(soundsPositions.indexOf(position), 1);
        }
        return winnerSounds;
    };
    MemoriaDeSonidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memoria-de-sonidos',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/memoria-de-sonidos/memoria-de-sonidos.html"*/'<!--\n  Generated template for the MemoriaDeSonidosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Memoria de sonidos</ion-title>\n  </ion-navbar>\n<div class="dificultades">\n    <ion-segment [(ngModel)]="dificultad" class="segmento">\n      <ion-segment-button value="facil" (click)="changeDifficulty()" style="color:white">\n        <p class="segmento-boton">Inicial</p>\n      </ion-segment-button>\n      <ion-segment-button value="intermedio" (click)="changeDifficulty()" style="color:white">\n        <p>Intermedio</p>\n      </ion-segment-button>\n      <ion-segment-button value="dificil" (click)="changeDifficulty()" style="color:white">\n        <p>Avanzado</p>\n      </ion-segment-button>     \n    </ion-segment>\n  </div>\n    <ion-item class="categorias">\n    <ion-label style="color:white">Categoria</ion-label>\n      <ion-select [(ngModel)]="category" (ionChange)="changeCategory()" style="color:white">\n          <ion-option value="{{categories[0]}}">{{categoriesFront[0]}}</ion-option>\n          <ion-option value="{{categories[1]}}">{{categoriesFront[1]}}</ion-option>\n          <ion-option value="{{categories[2]}}">{{categoriesFront[2]}}</ion-option>\n          <ion-option value="{{categories[3]}}">{{categoriesFront[3]}}</ion-option>\n          <ion-option value="{{categories[4]}}">{{categoriesFront[4]}}</ion-option>\n          <ion-option value="{{categories[5]}}">{{categoriesFront[5]}}</ion-option>\n      </ion-select>\n  </ion-item>\n</ion-header>\n\n\n<ion-content padding>\n	\n    <div class="chat-list-wrap {{layout}}">\n      <ion-list>\n        <ion-item  *ngFor="let image of images" (click)="selectImage(image, $event)">\n          <img  src="{{image}}">\n          <!-- <div class="chat-list-title">{{chat.name}}</div>\n          <div class="chat-list-sub-title">{{chat.lastText}}</div>\n          <div class="chat-list-price"><strong>Rs. {{chat.price}}</strong></div>\n          <div class="chat-list-discount">{{chat.discout}} OFF </div> -->\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n<ion-footer style="padding-top: 1%; padding-bottom: 1%">\n  <button class="center" ion-button round icon-left (click)="playSound()">\n      <div style="margin-top:2%; margin-bottom:2%">\n        <ion-icon name="volume-up" style="margin-right: 5%"></ion-icon>Reproducir sonido\n      </div>\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/memoria-de-sonidos/memoria-de-sonidos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], MemoriaDeSonidosPage);
    return MemoriaDeSonidosPage;
    var _a;
}());

//# sourceMappingURL=memoria-de-sonidos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map