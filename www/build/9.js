webpackJsonp([9],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContentPageModule = /** @class */ (function () {
    function ContentPageModule() {
    }
    ContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__content__["a" /* ContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__content__["a" /* ContentPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__content__["a" /* ContentPage */]
            ]
        })
    ], ContentPageModule);
    return ContentPageModule;
}());

//# sourceMappingURL=content.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
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
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContentPage = /** @class */ (function () {
    function ContentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContentPage.prototype.categorias = function () {
        //this.navCtrl.push('CategoriasPage');
        this.navCtrl.push('IntruccionesCategoriasPage');
    };
    ContentPage.prototype.memoriaDeSonidos = function () {
        //this.navCtrl.push('MemoriaDeSonidosPage');
        this.navCtrl.push('IntruccionesMemoriaDeSonidosPage');
    };
    ContentPage.prototype.memoriaDeSonidosEnSecuencia = function () {
        //this.navCtrl.push('MemoriaDeSonidosEnSecuenciaPage');
        this.navCtrl.push('IntruccionesMemoriaDeSonidosEnSecuenciaPage');
    };
    ContentPage.prototype.identificacionDeContextosOSituaciones = function () {
        //this.navCtrl.push('IdentificacionDeContextosOSituacionesPage');
        this.navCtrl.push('IntruccionesIdentificacionContextosOSituacionesPage');
    };
    ContentPage.prototype.figuraFondo = function () {
        //this.navCtrl.push('FiguraFondoPage');
        this.navCtrl.push('IntruccionesFiguraFondoPage');
    };
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/content/content.html"*/'<!--\n  Generated template for the ContentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-title padding>\n      <h2 style="color:white">Menu principal</h2>\n    </ion-title>\n  	<button ion-button class="opciones" margin-vertical (click)="categorias()">Categorias</button>\n    <br>\n  	<button ion-button class="opciones" margin-vertical (click)="figuraFondo()">Figura Fondo</button>\n    <br>\n  	<button ion-button class="opciones" margin-vertical (click)="identificacionDeContextosOSituaciones()">Identificacion De Contextos <br>O Situaciones</button>\n    <br>\n  	<button ion-button class="opciones" margin-vertical (click)="memoriaDeSonidos()">Memoria <br>De Sonidos</button>\n    <br>\n  	<button ion-button class="opciones" margin-vertical (click)="memoriaDeSonidosEnSecuencia()">Memoria De <br>Sonidos En Secuencia</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/content/content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ })

});
//# sourceMappingURL=9.js.map