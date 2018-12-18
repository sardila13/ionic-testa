webpackJsonp([3],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntruccionesMemoriaDeSonidosEnSecuenciaPageModule", function() { return IntruccionesMemoriaDeSonidosEnSecuenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intrucciones_memoria_de_sonidos_en_secuencia__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntruccionesMemoriaDeSonidosEnSecuenciaPageModule = /** @class */ (function () {
    function IntruccionesMemoriaDeSonidosEnSecuenciaPageModule() {
    }
    IntruccionesMemoriaDeSonidosEnSecuenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intrucciones_memoria_de_sonidos_en_secuencia__["a" /* IntruccionesMemoriaDeSonidosEnSecuenciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intrucciones_memoria_de_sonidos_en_secuencia__["a" /* IntruccionesMemoriaDeSonidosEnSecuenciaPage */]),
            ],
        })
    ], IntruccionesMemoriaDeSonidosEnSecuenciaPageModule);
    return IntruccionesMemoriaDeSonidosEnSecuenciaPageModule;
}());

//# sourceMappingURL=intrucciones-memoria-de-sonidos-en-secuencia.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntruccionesMemoriaDeSonidosEnSecuenciaPage; });
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
 * Generated class for the IntruccionesMemoriaDeSonidosEnSecuenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntruccionesMemoriaDeSonidosEnSecuenciaPage = /** @class */ (function () {
    function IntruccionesMemoriaDeSonidosEnSecuenciaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntruccionesMemoriaDeSonidosEnSecuenciaPage.prototype.iniciar = function () {
        this.navCtrl.push('MemoriaDeSonidosEnSecuenciaPage');
    };
    IntruccionesMemoriaDeSonidosEnSecuenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntruccionesMemoriaDeSonidosEnSecuenciaPage');
    };
    IntruccionesMemoriaDeSonidosEnSecuenciaPage.prototype.ionViewCanEnter = function () {
        if (this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "MemoriaDeSonidosEnSecuenciaPage") {
            this.navCtrl.push('ContentPage');
        }
    };
    IntruccionesMemoriaDeSonidosEnSecuenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intrucciones-memoria-de-sonidos-en-secuencia',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-memoria-de-sonidos-en-secuencia/intrucciones-memoria-de-sonidos-en-secuencia.html"*/'<!--\n  Generated template for the IntruccionesCategoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Intrucciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h2 style="color: white; padding-top: 50%; padding-bottom: 70% ; padding-left: 5%; padding-right: 5%">Señala las imagenes de los sonidos en el orden que los escuchaste</h2>\n	<button ion-button block outline padding (click)="iniciar()">Iniciar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-memoria-de-sonidos-en-secuencia/intrucciones-memoria-de-sonidos-en-secuencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntruccionesMemoriaDeSonidosEnSecuenciaPage);
    return IntruccionesMemoriaDeSonidosEnSecuenciaPage;
}());

//# sourceMappingURL=intrucciones-memoria-de-sonidos-en-secuencia.js.map

/***/ })

});
//# sourceMappingURL=3.js.map