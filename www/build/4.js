webpackJsonp([4],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntruccionesIdentificacionContextosOSituacionesPageModule", function() { return IntruccionesIdentificacionContextosOSituacionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intrucciones_identificacion_contextos_o_situaciones__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntruccionesIdentificacionContextosOSituacionesPageModule = /** @class */ (function () {
    function IntruccionesIdentificacionContextosOSituacionesPageModule() {
    }
    IntruccionesIdentificacionContextosOSituacionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intrucciones_identificacion_contextos_o_situaciones__["a" /* IntruccionesIdentificacionContextosOSituacionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intrucciones_identificacion_contextos_o_situaciones__["a" /* IntruccionesIdentificacionContextosOSituacionesPage */]),
            ],
        })
    ], IntruccionesIdentificacionContextosOSituacionesPageModule);
    return IntruccionesIdentificacionContextosOSituacionesPageModule;
}());

//# sourceMappingURL=intrucciones-identificacion-contextos-o-situaciones.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntruccionesIdentificacionContextosOSituacionesPage; });
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
 * Generated class for the IntruccionesIdentificacionContextosOSituacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntruccionesIdentificacionContextosOSituacionesPage = /** @class */ (function () {
    function IntruccionesIdentificacionContextosOSituacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntruccionesIdentificacionContextosOSituacionesPage.prototype.iniciar = function () {
        this.navCtrl.push('IdentificacionDeContextosOSituacionesPage');
    };
    IntruccionesIdentificacionContextosOSituacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntruccionesIdentificacionContextosOSituacionesPage');
    };
    IntruccionesIdentificacionContextosOSituacionesPage.prototype.ionViewCanEnter = function () {
        if (this.navCtrl.last() !== undefined && this.navCtrl.last().component.name == "IdentificacionDeContextosOSituacionesPage") {
            this.navCtrl.push('ContentPage');
        }
    };
    IntruccionesIdentificacionContextosOSituacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intrucciones-identificacion-contextos-o-situaciones',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-identificacion-contextos-o-situaciones/intrucciones-identificacion-contextos-o-situaciones.html"*/'<!--\n  Generated template for the IntruccionesCategoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Intrucciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h2 style="color: white; padding-top: 50%; padding-bottom: 70% ; padding-left: 5%; padding-right: 5%">Señala la imagen que corresponde con la situaciòn que escuchas</h2>\n	<button ion-button block outline padding (click)="iniciar()">Iniciar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/intrucciones-identificacion-contextos-o-situaciones/intrucciones-identificacion-contextos-o-situaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntruccionesIdentificacionContextosOSituacionesPage);
    return IntruccionesIdentificacionContextosOSituacionesPage;
}());

//# sourceMappingURL=intrucciones-identificacion-contextos-o-situaciones.js.map

/***/ })

});
//# sourceMappingURL=4.js.map