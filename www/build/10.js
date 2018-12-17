webpackJsonp([10],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorias__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoriasPageModule = /** @class */ (function () {
    function CategoriasPageModule() {
    }
    CategoriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */]),
            ],
        })
    ], CategoriasPageModule);
    return CategoriasPageModule;
}());

//# sourceMappingURL=categorias.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
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
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(navCtrl) {
        //this.chats= dataProvider.getall();
        //console.log('this.chats',this.chats)
        this.navCtrl = navCtrl;
        this.layout = "grid-view";
        this.canWin = false;
        this.currentSound = new Audio();
        this.images = [];
        this.hide = [];
        this.dificultad = "facil";
        this.buttons = [];
        this.rango = 2;
        this.categories = ["animalesDeLaGranja", "animalesDeLaSelva",
            "mediosDeTransporte", "instrumentosMusicales", "cosasDeLaCasa", "sonidosDelCuerpo"];
        this.categoriesFront = ["Animales De LaGranja", "Animales De La Selva",
            "Medios De Transporte", "Instrumentos Musicales", "Cosas De La Casa", "Sonidos Del Cuerpo"];
        this.category = this.categories[0];
        for (var j = 0; j < 5; j++) {
            this.hide[j] = true;
        }
        var rango = 2;
        this.selectWinner(rango, this.setImages);
    }
    CategoriasPage.prototype.ionViewWillLeave = function () {
        console.log(this.currentSound);
        this.currentSound.pause();
    };
    CategoriasPage.prototype.ionViewDidLoad = function () {
        this.buttons;
        for (var a = 0; a < 8; a++) {
            var btnActual = "btn" + a;
            var elbtn = document.getElementById(btnActual);
            //elbtn.classList.add("imagenesFa");
            this.buttons.push(elbtn);
        }
    };
    CategoriasPage.prototype.changeCategory = function () {
        this.canWin = false;
        this.selectWinner(this.rango, this.setImages);
    };
    CategoriasPage.prototype.setClassImages = function (clase) {
        for (var b = 0; b < this.buttons.length; b++) {
            //this.buttons[b].classList.add(clase);
        }
    };
    CategoriasPage.prototype.randomNumber = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    CategoriasPage.prototype.hideImagenes = function () {
        if (this.dificultad === "facil") {
            for (var c = 0; c < 5; c++)
                this.hide[c] = true;
        }
        if (this.dificultad === "intermedio") {
            this.hide[0] = false;
            this.hide[1] = false;
            this.hide[2] = true;
            this.hide[3] = true;
            this.hide[4] = true;
        }
        if (this.dificultad === "dificil") {
            for (var ka = 0; ka < 5; ka++)
                this.hide[ka] = false;
        }
    };
    CategoriasPage.prototype.changeDifficulty = function () {
        this.canWin = false;
        this.currentSound.pause();
        this.hideImagenes();
        var clase = "";
        var rango = 1;
        if (this.dificultad === "facil") {
            this.layout = "grid-view";
            rango = 2;
            clase = "imagenesFa";
        }
        else if (this.dificultad === "intermedio") {
            this.layout = "grid-view";
            rango = 4;
            clase = "imagenesIntermedio";
        }
        else if (this.dificultad === "dificil") {
            this.layout = "grid-view";
            rango = 7;
            clase = "imagenesDif";
        }
        this.rango = rango;
        this.setClassImages(clase);
        this.selectWinner(rango, this.setImages);
    };
    CategoriasPage.prototype.playSound = function () {
        this.canWin = true;
        this.currentSound.pause();
        this.currentSound.play();
    };
    CategoriasPage.prototype.playSoundParam = function (soundPath) {
        var sound = new Audio("assets/sounds/" + soundPath);
        return sound;
    };
    CategoriasPage.prototype.selectImage = function (path, event) {
        var _this = this;
        var imagen = "assets" + event.path[0].src.split("assets")[1];
        var id = this.images.indexOf(path);
        if (this.canWin) {
            if (this.winner === id) {
                this.currentSound.pause();
                //console.log("Ganaste");
                //window.alert("Ganaste");
                this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/checkmark.png";
                setTimeout(function () {
                    _this.selectWinner(_this.rango, _this.setImages);
                }, 3000);
            }
            else {
                console.log("Perdiste");
                this.images[this.images.indexOf(imagen)] = "assets/img/Testa/De la app/Llorar.png";
            }
        }
    };
    CategoriasPage.prototype.selectWinnerPosition = function (rango) {
        var winnerPosition = this.randomNumber(rango);
        this.winner = winnerPosition;
        return winnerPosition;
    };
    CategoriasPage.prototype.selectWinner = function (rango, functionSetImages) {
        this.canWin = false;
        var winnerPosition = this.selectWinnerPosition(rango);
        var winnerSound = functionSetImages(rango, winnerPosition, this.randomNumber, this.category, this.images);
        this.setSound(winnerSound);
    };
    CategoriasPage.prototype.setSound = function (sound) {
        this.winnerSound = sound;
        this.currentSound = this.playSoundParam(sound);
    };
    CategoriasPage.prototype.setImages = function (rango, winnerPosition, functionRandom, category, images) {
        var winnerSound;
        images.splice(0, images.length);
        for (var i = 0; i <= rango; i++) {
            var path = category + "/" + functionRandom(7);
            var imagePath = "assets/img/Testa/" + path;
            var image = imagePath + ".jpg";
            if (images.indexOf(image) > -1)
                i--;
            else {
                if (i === winnerPosition)
                    winnerSound = path + ".mp3";
                if (i >= images.length)
                    images.push(imagePath + ".jpg");
                else
                    images[i] = imagePath + ".jpg";
            }
        }
        return winnerSound;
    };
    CategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorias',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/categorias/categorias.html"*/'<!--\n  Generated template for the CategoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Categorias</ion-title>\n  </ion-navbar>\n<div class="dificultades">\n    <ion-segment [(ngModel)]="dificultad" class="segmento">\n      <ion-segment-button value="facil" (click)="changeDifficulty()" style="color:white">\n        <p class="segmento-boton">Inicial</p>\n      </ion-segment-button>\n      <ion-segment-button value="intermedio" (click)="changeDifficulty()" style="color:white">\n        <p>Intermedio</p>\n      </ion-segment-button>\n      <ion-segment-button value="dificil" (click)="changeDifficulty()" style="color:white">\n        <p>Avanzado</p>\n      </ion-segment-button>     \n    </ion-segment>\n  </div>\n  <ion-item class="categorias">\n    <ion-label style="color:white">Categoria</ion-label>\n      <ion-select [(ngModel)]="category" (ionChange)="changeCategory()" style="color:white">\n          <ion-option value="{{categories[0]}}">{{categoriesFront[0]}}</ion-option>\n          <ion-option value="{{categories[1]}}">{{categoriesFront[1]}}</ion-option>\n          <ion-option value="{{categories[2]}}">{{categoriesFront[2]}}</ion-option>\n          <ion-option value="{{categories[3]}}">{{categoriesFront[3]}}</ion-option>\n          <ion-option value="{{categories[4]}}">{{categoriesFront[4]}}</ion-option>\n          <ion-option value="{{categories[5]}}">{{categoriesFront[5]}}</ion-option>\n      </ion-select>\n  </ion-item>\n</ion-header>\n\n\n<ion-content padding class="content">\n	\n    \n    <div class="chat-list-wrap {{layout}}">\n      <ion-list>\n        <ion-item  *ngFor="let image of images" (click)="selectImage(image, $event)" style="background-color: #1B3255">\n          <img style="background-color: #1B3255"   src="{{image}}">\n          <!-- <div class="chat-list-title">{{chat.name}}</div>\n          <div class="chat-list-sub-title">{{chat.lastText}}</div>\n          <div class="chat-list-price"><strong>Rs. {{chat.price}}</strong></div>\n          <div class="chat-list-discount">{{chat.discout}} OFF </div> -->\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n<ion-footer style="padding-top: 1em; padding-bottom: 1em">\n  <button class="center" ion-button round icon-left (click)="playSound()">\n      <div style="margin-top:5%; margin-bottom:5%">\n        <ion-icon name="volume-up" style="margin-right: 5%"></ion-icon>Reproducir sonido\n      </div>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/categorias/categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CategoriasPage);
    return CategoriasPage;
}());

//# sourceMappingURL=categorias.js.map

/***/ })

});
//# sourceMappingURL=10.js.map