webpackJsonp([5],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntruccionesFiguraFondoPageModule", function() { return IntruccionesFiguraFondoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intrucciones_figura_fondo__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntruccionesFiguraFondoPageModule = /** @class */ (function () {
    function IntruccionesFiguraFondoPageModule() {
    }
    IntruccionesFiguraFondoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intrucciones_figura_fondo__["a" /* IntruccionesFiguraFondoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intrucciones_figura_fondo__["a" /* IntruccionesFiguraFondoPage */]),
            ],
        })
    ], IntruccionesFiguraFondoPageModule);
    return IntruccionesFiguraFondoPageModule;
}());

//# sourceMappingURL=intrucciones-figura-fondo.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntruccionesFiguraFondoPage; });
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
 * Generated class for the IntruccionesFiguraFondoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntruccionesFiguraFondoPage = /** @class */ (function () {
    function IntruccionesFiguraFondoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntruccionesFiguraFondoPage.prototype.iniciar = function () {
        this.navCtrl.push('FiguraFondoPage');
    };
    IntruccionesFiguraFondoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntruccionesFiguraFondoPage');
    };
    IntruccionesFiguraFondoPage.prototype.ionViewCanEnter = function () {
        console.log(this.navCtrl.last().component.name);
        if (this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "FiguraFondoPage") {
            this.navCtrl.push('ContentPage');
        }
    };
    IntruccionesFiguraFondoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intrucciones-figura-fondo',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-figura-fondo/intrucciones-figura-fondo.html"*/'<!--\n  Generated template for the IntruccionesCategoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Intrucciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h1 style="color: white; padding-top: 20%; padding-bottom: 5% ; padding-left: 5%; padding-right: 5%">Intermedio:</h1>\n	<h2 style="color: white;padding-left: 5%; padding-right: 5%">Debes encontrar los 2 sonidos que escuchas a continuaciòn.</h2>\n	<h1 style="color: white; padding-top: 5%; padding-bottom: 5% ; padding-left: 5%; padding-right: 5%">Avanzado:</h1>\n	<h2 style="color: white;padding-left: 5%; padding-bottom: 20% ; padding-right: 5%">Debes encontrar los 3 sonidos que escuchas a continuaciòn.</h2>\n</ion-content>\n<ion-footer style="padding: 1em">\n		<button ion-button block outline padding (click)="iniciar()">Iniciar</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-figura-fondo/intrucciones-figura-fondo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntruccionesFiguraFondoPage);
    return IntruccionesFiguraFondoPage;
}());

//# sourceMappingURL=intrucciones-figura-fondo.js.map

/***/ })

});
//# sourceMappingURL=5.js.map