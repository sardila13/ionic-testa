webpackJsonp([2],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntruccionesMemoriaDeSonidosPageModule", function() { return IntruccionesMemoriaDeSonidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intrucciones_memoria_de_sonidos__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntruccionesMemoriaDeSonidosPageModule = /** @class */ (function () {
    function IntruccionesMemoriaDeSonidosPageModule() {
    }
    IntruccionesMemoriaDeSonidosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intrucciones_memoria_de_sonidos__["a" /* IntruccionesMemoriaDeSonidosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intrucciones_memoria_de_sonidos__["a" /* IntruccionesMemoriaDeSonidosPage */]),
            ],
        })
    ], IntruccionesMemoriaDeSonidosPageModule);
    return IntruccionesMemoriaDeSonidosPageModule;
}());

//# sourceMappingURL=intrucciones-memoria-de-sonidos.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntruccionesMemoriaDeSonidosPage; });
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
 * Generated class for the IntruccionesMemoriaDeSonidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntruccionesMemoriaDeSonidosPage = /** @class */ (function () {
    function IntruccionesMemoriaDeSonidosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntruccionesMemoriaDeSonidosPage.prototype.iniciar = function () {
        this.navCtrl.push('MemoriaDeSonidosPage');
    };
    IntruccionesMemoriaDeSonidosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntruccionesMemoriaDeSonidosPage');
    };
    IntruccionesMemoriaDeSonidosPage.prototype.ionViewCanEnter = function () {
        if (this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "MemoriaDeSonidosPage") {
            this.navCtrl.push('ContentPage');
        }
    };
    IntruccionesMemoriaDeSonidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intrucciones-memoria-de-sonidos',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-memoria-de-sonidos/intrucciones-memoria-de-sonidos.html"*/'<!--\n  Generated template for the IntruccionesCategoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Intrucciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h2 style="color: white; padding-top: 50%; padding-bottom: 70% ; padding-left: 5%; padding-right: 5%">Señala las imagenes de los sonidos que escuchaste</h2>\n	<button ion-button block outline padding (click)="iniciar()">Iniciar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-memoria-de-sonidos/intrucciones-memoria-de-sonidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntruccionesMemoriaDeSonidosPage);
    return IntruccionesMemoriaDeSonidosPage;
}());

//# sourceMappingURL=intrucciones-memoria-de-sonidos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map