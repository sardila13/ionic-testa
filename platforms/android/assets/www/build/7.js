webpackJsonp([7],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificacionDeContextosOSituacionesPageModule", function() { return IdentificacionDeContextosOSituacionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identificacion_de_contextos_o_situaciones__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdentificacionDeContextosOSituacionesPageModule = /** @class */ (function () {
    function IdentificacionDeContextosOSituacionesPageModule() {
    }
    IdentificacionDeContextosOSituacionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__identificacion_de_contextos_o_situaciones__["a" /* IdentificacionDeContextosOSituacionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__identificacion_de_contextos_o_situaciones__["a" /* IdentificacionDeContextosOSituacionesPage */]),
            ],
        })
    ], IdentificacionDeContextosOSituacionesPageModule);
    return IdentificacionDeContextosOSituacionesPageModule;
}());

//# sourceMappingURL=identificacion-de-contextos-o-situaciones.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentificacionDeContextosOSituacionesPage; });
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
 * Generated class for the IdentificacionDeContextosOSituacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdentificacionDeContextosOSituacionesPage = /** @class */ (function () {
    function IdentificacionDeContextosOSituacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.layout = "grid-view";
        this.canWin = false;
        this.currentSound = new Audio();
        this.images = [];
        this.hide = [];
        this.dificultad = "facil";
        this.winnerSound = "";
        this.category = "situaciones";
        for (var j = 0; j < 5; j++) {
            this.hide[j] = true;
        }
        this.rango = 3;
        this.selectWinnerCategory(3, this.setImages);
    }
    IdentificacionDeContextosOSituacionesPage.prototype.ionViewWillLeave = function () {
        this.currentSound.pause();
        this.currentSound.currentTime = 0;
    };
    IdentificacionDeContextosOSituacionesPage.prototype.ionViewDidLoad = function () {
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
    };
    IdentificacionDeContextosOSituacionesPage.prototype.selectImage = function (id, event) {
        var _this = this;
        var imagen = "assets" + event.path[0].src.split("assets")[1];
        if (this.canWin) {
            var separated = this.winnerSound.split('/');
            var separated2 = id.split('/');
            var winner = separated[separated.length - 1].split('.')[0];
            id = separated2[separated2.length - 1].split('.')[0];
            if (winner === id) {
                this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                setTimeout(function () {
                    _this.selectWinnerCategory(_this.rango, _this.setImages);
                }, 3000);
                this.currentSound.pause();
                this.canWin = false;
                console.log("Ganaste");
            }
            else {
                console.log("Perdiste");
                this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
            }
        }
    };
    //Extra methods non related to the specific class
    IdentificacionDeContextosOSituacionesPage.prototype.randomNumber = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    IdentificacionDeContextosOSituacionesPage.prototype.playSound = function () {
        this.canWin = true;
        this.currentSound.pause();
        this.currentSound.play();
    };
    IdentificacionDeContextosOSituacionesPage.prototype.playSoundParam = function (soundPath) {
        var sound = new Audio("assets/sounds/" + soundPath);
        return sound;
    };
    IdentificacionDeContextosOSituacionesPage.prototype.changeDifficulty = function () {
        this.canWin = false;
        this.currentSound.pause();
        this.hideImagenes();
        var rango = 1;
        if (this.dificultad === "facil") {
            rango = 3;
        }
        else if (this.dificultad === "intermedio") {
            rango = 5;
        }
        else if (this.dificultad === "dificil") {
            rango = 8;
        }
        this.rango = rango;
        /*this.selectWinnerCategory(rango, this.setArrayCategory, this.selectWinnerPosition);*/
        //this.setClassImages(clase);
        this.selectWinnerCategory(rango, this.setImages);
    };
    IdentificacionDeContextosOSituacionesPage.prototype.hideImagenes = function () {
        if (this.dificultad === "facil") {
            this.layout = "grid-view";
            for (var c = 0; c < 5; c++)
                this.hide[c] = true;
        }
        if (this.dificultad === "intermedio") {
            this.layout = "grid-view";
            this.hide[0] = false;
            this.hide[1] = false;
            this.hide[2] = true;
            this.hide[3] = true;
            this.hide[4] = true;
        }
        if (this.dificultad === "dificil") {
            this.layout = "grid-view";
            for (var ka = 0; ka < 5; ka++)
                this.hide[ka] = false;
        }
    };
    IdentificacionDeContextosOSituacionesPage.prototype.selectWinnerPosition = function (rango) {
        var winnerPosition = this.randomNumber(rango - 1);
        return winnerPosition;
    };
    IdentificacionDeContextosOSituacionesPage.prototype.selectWinnerCategory = function (rango, functionSetImages) {
        this.canWin = false;
        var winnerPosition = this.selectWinnerPosition(rango);
        //console.log("Winner category " +  " " + this.categories[winnerCategory]);
        //console.log("Winner position " + winnerPosition);
        var winnerSound = functionSetImages(winnerPosition, this.category, rango, this.randomNumber, this.images);
        this.winnerSound = winnerSound;
        this.currentSound = this.playSoundParam(winnerSound);
    };
    IdentificacionDeContextosOSituacionesPage.prototype.setImages = function (winnerPosition, category, rango, functionRandom, images) {
        var imageToAdd;
        var numbers = ["0", "1", "2", "3", "4", "5", "6", "7"];
        images.splice(0, images.length);
        var winnerSound;
        for (var h = 0; h < rango; h++) {
            var position = functionRandom(numbers.length - 1);
            var value = numbers[position];
            numbers.splice(position, 1);
            var path = "assets/img/Testa/" + category + "/" + value;
            imageToAdd = path + ".jpg";
            if (h == winnerPosition)
                winnerSound = category + "/" + value + ".mp3";
            if (h >= images.length)
                images.push(imageToAdd);
            else
                images[h] = imageToAdd;
        }
        return winnerSound;
    };
    IdentificacionDeContextosOSituacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-identificacion-de-contextos-o-situaciones',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/identificacion-de-contextos-o-situaciones/identificacion-de-contextos-o-situaciones.html"*/'<!--\n  Generated template for the IdentificacionDeContextosOSituacionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contextos o situaciones</ion-title>\n  </ion-navbar>\n<div class="dificultades">\n    <ion-segment [(ngModel)]="dificultad" class="segmento">\n      <ion-segment-button value="facil" (click)="changeDifficulty()" style="color:white">\n        <p class="segmento-boton">Inicial</p>\n      </ion-segment-button>\n      <ion-segment-button value="intermedio" (click)="changeDifficulty()" style="color:white">\n        <p>Intermedio</p>\n      </ion-segment-button>\n      <ion-segment-button value="dificil" (click)="changeDifficulty()" style="color:white">\n        <p>Avanzado</p>\n      </ion-segment-button>     \n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="rchat-list-wrap {{layout}}">\n      <ion-list>\n        <ion-item  *ngFor="let image of images" (click)="selectImage(image, $event)">\n          <img  src="{{image}}">\n          <!-- <div class="chat-list-title">{{chat.name}}</div>\n          <div class="chat-list-sub-title">{{chat.lastText}}</div>\n          <div class="chat-list-price"><strong>Rs. {{chat.price}}</strong></div>\n          <div class="chat-list-discount">{{chat.discout}} OFF </div> -->\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n<ion-footer style="padding-top: 1%; padding-bottom: 1%">\n  <button class="center" ion-button round icon-left (click)="playSound()">\n      <div style="margin-top:2%; margin-bottom:2%">\n        <ion-icon name="volume-up" style="margin-right: 5%"></ion-icon>Reproducir sonido\n      </div>\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/identificacion-de-contextos-o-situaciones/identificacion-de-contextos-o-situaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IdentificacionDeContextosOSituacionesPage);
    return IdentificacionDeContextosOSituacionesPage;
}());

//# sourceMappingURL=identificacion-de-contextos-o-situaciones.js.map

/***/ })

});
//# sourceMappingURL=7.js.map