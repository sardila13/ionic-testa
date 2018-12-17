webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoriaDeSonidosEnSecuenciaPageModule", function() { return MemoriaDeSonidosEnSecuenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memoria_de_sonidos_en_secuencia__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MemoriaDeSonidosEnSecuenciaPageModule = /** @class */ (function () {
    function MemoriaDeSonidosEnSecuenciaPageModule() {
    }
    MemoriaDeSonidosEnSecuenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__memoria_de_sonidos_en_secuencia__["a" /* MemoriaDeSonidosEnSecuenciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__memoria_de_sonidos_en_secuencia__["a" /* MemoriaDeSonidosEnSecuenciaPage */]),
            ],
        })
    ], MemoriaDeSonidosEnSecuenciaPageModule);
    return MemoriaDeSonidosEnSecuenciaPageModule;
}());

//# sourceMappingURL=memoria-de-sonidos-en-secuencia.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoriaDeSonidosEnSecuenciaPage; });
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
 * Generated class for the MemoriaDeSonidosEnSecuenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemoriaDeSonidosEnSecuenciaPage = /** @class */ (function () {
    function MemoriaDeSonidosEnSecuenciaPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.layout = "grid-view";
        this.canWin = false;
        this.currentSounds = [];
        this.images = [];
        this.sounds = [];
        this.hide = [];
        this.encontrados = 0;
        this.dificultad = "facil";
        this.rango = 1;
        this.soundsPositions = [0, 1];
        this.categories = ["animalesDeLaGranja", "animalesDeLaSelva",
            "mediosDeTransporte", "instrumentosMusicales", "cosasDeLaCasa", "sonidosDelCuerpo"];
        this.categoriesFront = ["Animales De LaGranja", "Animales De La Selva",
            "Medios De Transporte", "Instrumentos Musicales", "Cosas De La Casa", "Sonidos Del Cuerpo"];
        this.category = this.categories[0];
        for (var j = 0; j < 4; j++) {
            this.hide[j] = true;
        }
        var rango = 1;
        this.setImagesAndPositions(rango);
    }
    MemoriaDeSonidosEnSecuenciaPage.prototype.ionViewWillLeave = function () {
        this.pauseSounds();
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.ionViewDidLoad = function () {
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.setClassImages = function (clase) {
        for (var b = 0; b < this.buttons.length; b++) {
            this.buttons[b].classList.add(clase);
        }
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.randomNumber = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.hideImagenes = function () {
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
    MemoriaDeSonidosEnSecuenciaPage.prototype.pauseSounds = function () {
        for (var xy = 0; xy < this.currentSounds.length; xy++) {
            this.currentSounds[xy].pause();
            this.currentSounds[xy].currentTime = 0;
        }
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.selectImage = function (id, event) {
        var _this = this;
        var array = id.split('/');
        var imagen = "assets" + event.path[0].src.split("assets")[1];
        var sonido = array[array.length - 1].split('.')[0] + ".mp3";
        if (this.canWin) {
            //var sound = this.images[id].split(".jpg")[0] + ".mp3";
            var arreglo = this.sounds[this.encontrados].split('/');
            var sound = arreglo[arreglo.length - 1];
            if (sonido === sound) {
                if (this.encontrados == this.sounds.length - 1) {
                    console.log("Ganaste");
                    this.canWin = false;
                    this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                    setTimeout(function () {
                        _this.changeDifficulty();
                    }, 3000);
                }
                else {
                    console.log("Encontraste uno");
                    this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                    this.encontrados++;
                }
            }
            else {
                this.encontrados = 0;
                this.canWin = false;
                this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
                setTimeout(function () {
                    _this.changeDifficulty();
                }, 3000);
                console.log("Intenta de nuevo");
            }
        }
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.changeDifficulty = function () {
        this.canWin = false;
        this.pauseSounds();
        this.hideImagenes();
        this.sounds = [];
        var rango = 1;
        if (this.dificultad === "facil") {
            this.soundsPositions = [0, 1];
            rango = 1;
        }
        else if (this.dificultad === "intermedio") {
            this.soundsPositions = [0, 1, 2, 3];
            rango = 3;
        }
        else if (this.dificultad === "dificil") {
            this.soundsPositions = [0, 1, 2, 3, 4, 5];
            rango = 5;
        }
        this.encontrados = 0;
        this.rango = rango;
        this.setImagesAndPositions(rango);
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.changeCategory = function (id) {
        this.changeDifficulty();
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.playSound = function () {
        this.pauseSounds();
        this.index = -1;
        this.playArraySounds();
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.playArraySounds = function () {
        var _this = this;
        this.index++;
        ;
        if (this.index === this.sounds.length) {
            this.canWin = true;
            return;
        }
        ;
        var audio = new Audio(this.sounds[this.index]);
        this.currentSounds[this.index] = audio;
        audio.play();
        audio.addEventListener('ended', function () { return _this.playArraySounds(); });
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.setImagesAndPositions = function (rango) {
        this.canWin = false;
        var winnerPositions = this.setWinnersPositions(rango, this.randomNumber);
        var sounds = this.setImages(winnerPositions, this.randomNumber, rango, this.images, this.category, this.sounds, this.soundsPositions);
        this.encontrados = 0;
        this.playSoundParam(sounds);
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.playSoundParam = function (sounds) {
        this.index = -1;
        this.playArraySoundsParam(sounds);
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.playArraySoundsParam = function (arraySounds) {
        this.index++;
        ;
        if (this.index === this.sounds.length)
            return;
        var audio = new Audio(arraySounds[this.index]);
        this.currentSounds[this.index] = audio;
        this.playArraySoundsParam(arraySounds);
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.setWinnersPositions = function (rango, functionRandomNumber) {
        var winnerPositions = [];
        for (var i = 0; i <= rango; i++) {
            var winnerPosition = functionRandomNumber(rango);
            if (winnerPositions.indexOf(winnerPosition) > -1)
                i--;
            else
                winnerPositions.push(winnerPosition);
        }
        this.winner = winnerPositions;
        return winnerPositions;
    };
    MemoriaDeSonidosEnSecuenciaPage.prototype.setImages = function (winnerPositions, functionRandomNumber, rango, images, category, winnerSounds, soundsPositions) {
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
            var actualPosition = soundsPositions[soundPosition];
            var number = images[winnerPositions[dx]].split('/');
            //winnerSounds[actualPosition] = images[winnerPositions[dx]].split(".jpg")[0] + ".mp3";
            winnerSounds[actualPosition] = "assets/sounds/" + category + '/' + number[number.length - 1].split('.')[0] + ".mp3";
            console.log(winnerSounds);
            soundsPositions.splice(soundsPositions.indexOf(actualPosition), 1);
        }
        return winnerSounds;
    };
    MemoriaDeSonidosEnSecuenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memoria-de-sonidos-en-secuencia',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/memoria-de-sonidos-en-secuencia/memoria-de-sonidos-en-secuencia.html"*/'<!--\n  Generated template for the MemoriaDeSonidosEnSecuenciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sonidos en secuencia</ion-title>\n  </ion-navbar>\n  <div class="dificultades">\n    <ion-segment [(ngModel)]="dificultad" class="segmento">\n      <ion-segment-button value="facil" (click)="changeDifficulty()" style="color:white">\n        <p class="segmento-boton">Inicial</p>\n      </ion-segment-button>\n      <ion-segment-button value="intermedio" (click)="changeDifficulty()" style="color:white">\n        <p>Intermedio</p>\n      </ion-segment-button>\n      <ion-segment-button value="dificil" (click)="changeDifficulty()" style="color:white">\n        <p>Avanzado</p>\n      </ion-segment-button>     \n    </ion-segment>\n  </div>\n    <ion-item class="categorias">\n    <ion-label style="color:white">Categoria</ion-label>\n      <ion-select [(ngModel)]="category" (ionChange)="changeCategory()" style="color:white">\n          <ion-option value="{{categories[0]}}">{{categoriesFront[0]}}</ion-option>\n          <ion-option value="{{categories[1]}}">{{categoriesFront[1]}}</ion-option>\n          <ion-option value="{{categories[2]}}">{{categoriesFront[2]}}</ion-option>\n          <ion-option value="{{categories[3]}}">{{categoriesFront[3]}}</ion-option>\n          <ion-option value="{{categories[4]}}">{{categoriesFront[4]}}</ion-option>\n          <ion-option value="{{categories[5]}}">{{categoriesFront[5]}}</ion-option>\n      </ion-select>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <div class="chat-list-wrap {{layout}}">\n      <ion-list>\n        <ion-item  *ngFor="let image of images" (click)="selectImage(image, $event)">\n          <img  src="{{image}}">\n          <!-- <div class="chat-list-title">{{chat.name}}</div>\n          <div class="chat-list-sub-title">{{chat.lastText}}</div>\n          <div class="chat-list-price"><strong>Rs. {{chat.price}}</strong></div>\n          <div class="chat-list-discount">{{chat.discout}} OFF </div> -->\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n<ion-footer style="padding-top: 1%; padding-bottom: 1%">\n  <button class="center" ion-button round icon-left (click)="playSound()">\n      <div style="margin-top:2%; margin-bottom:2%">\n        <ion-icon name="volume-up" style="margin-right: 5%"></ion-icon>Reproducir sonido\n      </div>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/memoria-de-sonidos-en-secuencia/memoria-de-sonidos-en-secuencia.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], MemoriaDeSonidosEnSecuenciaPage);
    return MemoriaDeSonidosEnSecuenciaPage;
    var _a;
}());

//# sourceMappingURL=memoria-de-sonidos-en-secuencia.js.map

/***/ })

});
//# sourceMappingURL=1.js.map