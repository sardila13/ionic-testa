webpackJsonp([11],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categorias/categorias.module": [
		274,
		10
	],
	"../pages/content/content.module": [
		275,
		9
	],
	"../pages/figura-fondo/figura-fondo.module": [
		276,
		8
	],
	"../pages/identificacion-de-contextos-o-situaciones/identificacion-de-contextos-o-situaciones.module": [
		277,
		7
	],
	"../pages/intrucciones-categorias/intrucciones-categorias.module": [
		278,
		6
	],
	"../pages/intrucciones-figura-fondo/intrucciones-figura-fondo.module": [
		279,
		5
	],
	"../pages/intrucciones-identificacion-contextos-o-situaciones/intrucciones-identificacion-contextos-o-situaciones.module": [
		280,
		4
	],
	"../pages/intrucciones-memoria-de-sonidos-en-secuencia/intrucciones-memoria-de-sonidos-en-secuencia.module": [
		282,
		3
	],
	"../pages/intrucciones-memoria-de-sonidos/intrucciones-memoria-de-sonidos.module": [
		281,
		2
	],
	"../pages/memoria-de-sonidos-en-secuencia/memoria-de-sonidos-en-secuencia.module": [
		283,
		1
	],
	"../pages/memoria-de-sonidos/memoria-de-sonidos.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.iniciar = function () {
            this.navCtrl.push('ContentPage');
        };
        //this.chats= dataProvider.getall();
        //console.log('this.chats',this.chats)
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.iniciar();
        }, 4000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/home/home.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content scroll="false">\n  <div class="splash-bg" style="width:100%"></div>\n  <div padding>\n    <h1 text-center padding style="color:white">Percepción Auditiva</h1>\n    <img src="assets/img/Testa/De la app/Logo final.png" style="padding-top:40%">\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_homedetail_homedetail__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_dataprovider_dataprovider__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_layout_switcher_layout_switcher__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_elastic_header_elastic_header__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_homedetail_homedetail__["a" /* HomeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__directives_layout_switcher_layout_switcher__["a" /* LayoutSwitcherDirective */],
                __WEBPACK_IMPORTED_MODULE_10__directives_elastic_header_elastic_header__["a" /* ElasticHeaderDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categorias/categorias.module#CategoriasPageModule', name: 'CategoriasPage', segment: 'categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/figura-fondo/figura-fondo.module#FiguraFondoPageModule', name: 'FiguraFondoPage', segment: 'figura-fondo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/identificacion-de-contextos-o-situaciones/identificacion-de-contextos-o-situaciones.module#IdentificacionDeContextosOSituacionesPageModule', name: 'IdentificacionDeContextosOSituacionesPage', segment: 'identificacion-de-contextos-o-situaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intrucciones-categorias/intrucciones-categorias.module#IntruccionesCategoriasPageModule', name: 'IntruccionesCategoriasPage', segment: 'intrucciones-categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intrucciones-figura-fondo/intrucciones-figura-fondo.module#IntruccionesFiguraFondoPageModule', name: 'IntruccionesFiguraFondoPage', segment: 'intrucciones-figura-fondo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intrucciones-identificacion-contextos-o-situaciones/intrucciones-identificacion-contextos-o-situaciones.module#IntruccionesIdentificacionContextosOSituacionesPageModule', name: 'IntruccionesIdentificacionContextosOSituacionesPage', segment: 'intrucciones-identificacion-contextos-o-situaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intrucciones-memoria-de-sonidos/intrucciones-memoria-de-sonidos.module#IntruccionesMemoriaDeSonidosPageModule', name: 'IntruccionesMemoriaDeSonidosPage', segment: 'intrucciones-memoria-de-sonidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intrucciones-memoria-de-sonidos-en-secuencia/intrucciones-memoria-de-sonidos-en-secuencia.module#IntruccionesMemoriaDeSonidosEnSecuenciaPageModule', name: 'IntruccionesMemoriaDeSonidosEnSecuenciaPage', segment: 'intrucciones-memoria-de-sonidos-en-secuencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/memoria-de-sonidos-en-secuencia/memoria-de-sonidos-en-secuencia.module#MemoriaDeSonidosEnSecuenciaPageModule', name: 'MemoriaDeSonidosEnSecuenciaPage', segment: 'memoria-de-sonidos-en-secuencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/memoria-de-sonidos/memoria-de-sonidos.module#MemoriaDeSonidosPageModule', name: 'MemoriaDeSonidosPage', segment: 'memoria-de-sonidos', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_homedetail_homedetail__["a" /* HomeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_dataprovider_dataprovider__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetailPage; });
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


var HomeDetailPage = /** @class */ (function () {
    function HomeDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagepath = navParams.get('img');
        this.name = navParams.get('name');
        this.lasttext = navParams.get('lasttext');
        this.discoutd = navParams.get('discout');
        this.price = navParams.get('price');
    }
    HomeDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomedetailPage', this.price);
    };
    HomeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homedetail',template:/*ion-inline-start:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/homedetail/homedetail.html"*/'<ion-header>\n\n  <div class="main-header">\n    <ion-navbar color="danger">\n      <ion-title>{{name}}</ion-title>\n    </ion-navbar>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="content-detail-wrap">\n    <img  src="{{imagepath}}">\n    <div class="sub-details">{{lasttext}}</div>\n    <div class="sub-price"><strong>Rs. {{price}}</strong></div>\n    <div class="sub-discount">{{discoutd}}</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dianasilva/Documents/Sebastian/Testa/App/Layout/src/pages/homedetail/homedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomeDetailPage);
    return HomeDetailPage;
}());

//# sourceMappingURL=homedetail.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = /** @class */ (function () {
    function DataProvider() {
        this.alldata = [];
        this.alldata = [{
                id: 0,
                name: 'Ray Sparrow',
                lastText: 'You on your way?',
                face: 'assets/img/glasses.jpg',
                price: '420',
                discout: '30%'
            }, {
                id: 1,
                name: 'Max Lynx 420',
                lastText: 'Hey, it\'s me',
                face: 'assets/img/cam.jpg',
                price: '400',
                discout: '10%'
            }, {
                id: 2,
                name: 'Adam Bradleyson',
                lastText: 'I should buy a boat',
                face: 'assets/img/guitar.jpg',
                price: '320',
                discout: '20%'
            }, {
                id: 3,
                name: 'Titne Governor',
                lastText: 'Look at my mukluks!',
                face: 'assets/img/glasses.jpg',
                price: '350',
                discout: '15%'
            }, {
                id: 4,
                name: 'Mike Harrington 320',
                lastText: 'This is wicked good ice cream.',
                face: 'assets/img/cam.jpg',
                price: '260',
                discout: '25%'
            }];
    }
    DataProvider.prototype.getall = function () {
        return this.alldata;
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=dataprovider.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSwitcherDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutSwitcherDirective = /** @class */ (function () {
    function LayoutSwitcherDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello LayoutSwitcherDirective Directive');
    }
    LayoutSwitcherDirective.prototype.ngOnInit = function () {
        //  this.element.nativeElement.addEventListener('click', () => {
        //     //  (this.element.nativeElement.firstElementChild)
        //   },false);
    };
    LayoutSwitcherDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[layout-switcher]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], LayoutSwitcherDirective);
    return LayoutSwitcherDirective;
}());

//# sourceMappingURL=layout-switcher.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticHeaderDirective = /** @class */ (function () {
    function ElasticHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeaderDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeaderDirective.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    ElasticHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[elastic-header]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ElasticHeaderDirective);
    return ElasticHeaderDirective;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map