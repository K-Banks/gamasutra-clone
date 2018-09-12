webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api-keys.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return masterFirebaseConfig; });
var masterFirebaseConfig = {
    apiKey: "AIzaSyAACCWHLfyR84xAIi6fAzNGd9VUdCH-njQ",
    authDomain: "gamasutraclone.firebaseapp.com",
    databaseURL: "https://gamasutraclone.firebaseio.com",
    projectId: "gamasutraclone",
    storageBucket: "gamasutraclone.appspot.com",
    messagingSenderId: "578253526883"
};


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  background-color: transparent;\r\n  min-width: 1006px;\r\n}\r\n.wrapper {\r\n  min-width: 838px;\r\n  max-width: 838px;\r\n  background-color: white;\r\n}\r\n.col-3 {\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n}\r\nimg {\r\n  margin-bottom: 20px;\r\n}\r\n.row {\r\n background-color: #EEE;\r\n border: solid black 1px;\r\n}\r\n.col-3 {\r\n  border: solid black 1px;\r\n}\r\n.col-6 {\r\n  border: solid black 1px;\r\n}\r\nfooter {\r\n  border-top: 1px solid yellow;\r\n  padding-top: 15px;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-top-banner></app-top-banner>\r\n</div>\r\n\r\n<div class='container'>\r\n  <img alt=\"Gamasutra Logo\" src=\"https://twimgs.com/gamasutra/images/gamasutra_logo.png\">\r\n  <div class=\"wrapper\">\r\n    <app-site-nav></app-site-nav>\r\n    <app-topic-bar></app-topic-bar>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <app-left-bar></app-left-bar>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<footer>\r\n  <app-bottom-banner></app-bottom-banner>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Gamasutra';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_keys__ = __webpack_require__("../../../../../src/app/api-keys.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__top_banner_top_banner_component__ = __webpack_require__("../../../../../src/app/top-banner/top-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__site_nav_site_nav_component__ = __webpack_require__("../../../../../src/app/site-nav/site-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__topic_bar_topic_bar_component__ = __webpack_require__("../../../../../src/app/topic-bar/topic-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__left_bar_left_bar_component__ = __webpack_require__("../../../../../src/app/left-bar/left-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__major_stories_major_stories_component__ = __webpack_require__("../../../../../src/app/major-stories/major-stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__recent_stories_recent_stories_component__ = __webpack_require__("../../../../../src/app/recent-stories/recent-stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__right_bar_right_bar_component__ = __webpack_require__("../../../../../src/app/right-bar/right-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bottom_banner_bottom_banner_component__ = __webpack_require__("../../../../../src/app/bottom-banner/bottom-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__content_panel_content_panel_component__ = __webpack_require__("../../../../../src/app/content-panel/content-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: __WEBPACK_IMPORTED_MODULE_2__api_keys__["a" /* masterFirebaseConfig */].apiKey,
    authDomain: __WEBPACK_IMPORTED_MODULE_2__api_keys__["a" /* masterFirebaseConfig */].authDomain,
    databaseURL: __WEBPACK_IMPORTED_MODULE_2__api_keys__["a" /* masterFirebaseConfig */].databaseURL,
    storageBucket: __WEBPACK_IMPORTED_MODULE_2__api_keys__["a" /* masterFirebaseConfig */].storageBucket
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__top_banner_top_banner_component__["a" /* TopBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__site_nav_site_nav_component__["a" /* SiteNavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__topic_bar_topic_bar_component__["a" /* TopicBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__left_bar_left_bar_component__["a" /* LeftBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__major_stories_major_stories_component__["a" /* MajorStoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__recent_stories_recent_stories_component__["a" /* RecentStoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__right_bar_right_bar_component__["a" /* RightBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__bottom_banner_bottom_banner_component__["a" /* BottomBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__content_panel_content_panel_component__["a" /* ContentPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_19__post_post_component__["a" /* PostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'post',
        component: __WEBPACK_IMPORTED_MODULE_2__post_post_component__["a" /* PostComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesService = /** @class */ (function () {
    function ArticlesService(database) {
        this.database = database;
        this.articles = database.list('articles');
    }
    ArticlesService.prototype.getArticles = function () {
        return this.articles;
    };
    ArticlesService.prototype.getMainArticle = function () {
        return this.database.object('/articles/0');
    };
    ArticlesService.prototype.addNewArticle = function (newArticle) {
        this.articles.push(newArticle);
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "../../../../../src/app/bottom-banner/bottom-banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n  background: black;\r\n  color: white;\r\n}\r\n.top {\r\n  min-width: 1006px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nimg {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nul {\r\n  display: inline-block;\r\n  padding: 0px 15px;\r\n}\r\n.tech {\r\n  display: inline-block;\r\n  height: 60px;\r\n}\r\n.group {\r\n  height: 80px;\r\n  margin-left: 1px solid white;\r\n}\r\n.title {\r\n  font-weight: 700;\r\n}\r\nli {\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n  list-style: none;\r\n}\r\n#legal {\r\n  display: block;\r\n  float: right;\r\n}\r\n#legal li {\r\n  display: inline-block;\r\n  border-left: solid 1px white;\r\n  padding-left: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-banner/bottom-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"row container top\">\r\n    <div class=\"col-1\">\r\n      <img src=\"https://twimgs.com/nojitter/gama/UBM_Logo_White.png\" alt=\"UBM Logo\">\r\n    </div>\r\n    <div class=\"col-11\">\r\n      <ul class=\"tech group\">\r\n        <li class=\"title\">TECHNOLOGY GROUP</li>\r\n        <li *ngFor=\"let link of techLinks1\"><a href={{link.link}}>{{link.name}}</a></li>\r\n      </ul>\r\n      <ul class=\"tech\">\r\n        <li *ngFor=\"let link of techLinks2\"><a href={{link.link}}>{{link.name}}</a></li>\r\n      </ul>\r\n      <ul class=\"tech\">\r\n        <li *ngFor=\"let link of techLinks3\"><a href={{link.link}}>{{link.name}}</a></li>\r\n      </ul>\r\n      <ul class=\"tech\">\r\n        <li *ngFor=\"let link of techLinks4\"><a href={{link.link}}>{{link.name}}</a></li>\r\n      </ul>\r\n      <ul>\r\n        <li class=\"title\">COMMUNITIES SERVED</li>\r\n        <li *ngFor=\"let link of communityLinks\"><a href={{link.link}}>{{link.name}}</a></li>\r\n      </ul>\r\n      <ul>\r\n        <li class=\"title\">WORKING WITH US</li>\r\n        <li *ngFor=\"let link of workingLinks\"><a href={{link.link}}>{{link.name}}</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <ul id=\"legal\">\r\n      <li *ngFor=\"let link of legalLinks\"><a href={{link.link}}>{{link.name}}</a></li>\r\n      <li>Copyright (c) 2018 UBM, All rights reserved</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/bottom-banner/bottom-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_link_model__ = __webpack_require__("../../../../../src/app/model/link.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottomBannerComponent = /** @class */ (function () {
    function BottomBannerComponent() {
        this.techLinks1 = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Black Hat', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Content Marketing Institute', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Content Marketing World', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Dark Reading', '#'),
        ];
        this.techLinks2 = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Enterprise Connect', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('GDC', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Gamasutra', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('HDI', '#'),
        ];
        this.techLinks3 = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('ICMI', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('InformationWeek', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('INsecurity', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Interop ITX', '#'),
        ];
        this.techLinks4 = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Network Computing', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('No Jitter', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Service Management World', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('XRDC', '#'),
        ];
        this.communityLinks = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Content Marketing', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Enterprise IT', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Enterprise Communications', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Game Development', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Information Security', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('IT Services & Support', '#'),
        ];
        this.workingLinks = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Advertising Contracts', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Event Calendar', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Tech Marketing', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Solutions', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Contact Us', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Licensing', '#'),
        ];
        this.legalLinks = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Terms of Service', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Privacy Statement', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Legal Entities', '#'),
        ];
    }
    BottomBannerComponent.prototype.ngOnInit = function () {
    };
    BottomBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bottom-banner',
            template: __webpack_require__("../../../../../src/app/bottom-banner/bottom-banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bottom-banner/bottom-banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomBannerComponent);
    return BottomBannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content-panel/content-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-panel/content-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <img src=\"\" alt=\"\">\r\n  <h5>Title</h5>\r\n</div>\r\n<div class=\"\">\r\n  <a href=\"#\">View All</a>\r\n  <a href=\"#\">SAMPLE</a>\r\n  <hr>\r\n  <strong>May 11, 2018</strong>\r\n  <hr>\r\n  <ul>\r\n    <li>Link 1</li>\r\n    <li>Link 2</li>\r\n    <li>Link 3</li>\r\n    <li>Link 4</li>\r\n    <li>Link 5</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/content-panel/content-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentPanelComponent = /** @class */ (function () {
    function ContentPanelComponent() {
    }
    ContentPanelComponent.prototype.ngOnInit = function () {
    };
    ContentPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-panel',
            template: __webpack_require__("../../../../../src/app/content-panel/content-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content-panel/content-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentPanelComponent);
    return ContentPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/left-bar/left-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  font-size: 10px;\r\n}\r\n.login {\r\n  background-color: #81bc79;\r\n  width: 100%;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.login h4 {\r\n  font-size: 15px;\r\n  color: #22522A;\r\n}\r\n#forgotPass {\r\n  color: white;\r\n}\r\n#forgotPass:hover {\r\n  color: #22522a;\r\n  text-decoration: underline;\r\n}\r\n#signUp {\r\n  color: #600;\r\n}\r\n#signUp:hover {\r\n  text-decoration: underline;\r\n}\r\ninput {\r\n  width: 100%;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\n.col-6 {\r\n  text-align: right;\r\n}\r\n.socialMedia ul {\r\n  padding-left: 0px;\r\n}\r\n.socialMedia li {\r\n  display: inline-block;\r\n  width: 20%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-bar/left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"left-col\">\r\n  <div class=\"login\">\r\n    <form>\r\n      <h4>Member Login</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 info\">\r\n          <label for=\"email\">Email:</label>\r\n          <br>\r\n          <label for=\"Password:\">Password:</label>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <input type=\"text\">\r\n          <br>\r\n          <input type=\"text\">\r\n          <button type=\"button\">Login</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"help\">\r\n      <p><a href=\"#\" id=\"forgotPass\">Forgot Password?</a>     <a href=\"#\" id=\"signUp\">Sign Up</a></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"socialMedia\">\r\n    <ul>\r\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_facebook.png\" alt=\"Facebook\"></a></li>\r\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_twitter.png\" alt=\"Twitter\"></a></li>\r\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_feed.png\" alt=\"RSS\"></a></li>\r\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_newsletter.png\" alt=\"Email\"></a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"topics\">\r\n    <div class=\"programming\">\r\n      <img src=\"https://twimgs.com/gamasutra/images/button_programming.gif\" alt=\"Programming Icon\">\r\n      <p>PROGRAMMING</p>\r\n    </div>\r\n    <div class=\"art\">\r\n      <img src=\"https://twimgs.com/gamasutra/images/button_art.gif\" alt=\"Art Icon\">\r\n      <p>ART</p>\r\n    </div>\r\n    <div class=\"audio\">\r\n      <img src=\"https://twimgs.com/gamasutra/images/button_audio.gif\" alt=\"Audio Icon\">\r\n      <p>AUDIO</p>\r\n    </div>\r\n    <div class=\"design\">\r\n      <img src=\"https://twimgs.com/gamasutra/images/button_design.gif\" alt=\"Design Icon\">\r\n      <p>DESIGN</p>\r\n    </div>\r\n    <div class=\"production\">\r\n      <img src=\"https://twimgs.com/gamasutra/images/button_production.gif\" alt=\"Production Icon\">\r\n      <p>PRODUCTION</p>\r\n    </div>\r\n    <div class=\"biz/marketing\">\r\n      <img src=\"https://twimgs.com/gamasutra/images/button_business.gif\" alt=\"Biz/Marketing Icon\">\r\n      <p>BIZ/MARKETING</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"Latest Jobs\">\r\n    <div class=\"header\">\r\n      <img src=\"\" alt=\"\">\r\n      <h5>Title</h5>\r\n    </div>\r\n    <div class=\"\">\r\n      <a href=\"#\">View All</a>\r\n      <a href=\"#\">SAMPLE</a>\r\n      <hr>\r\n      <strong>May 11, 2018</strong>\r\n      <hr>\r\n      <ul>\r\n        <li>Link 1</li>\r\n        <li>Link 2</li>\r\n        <li>Link 3</li>\r\n        <li>Link 4</li>\r\n        <li>Link 5</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"\">\r\n    <app-content-panel></app-content-panel>\r\n  </div>\r\n  <div class=\"\">\r\n    <app-content-panel></app-content-panel>\r\n  </div>\r\n  <div class=\"\">\r\n    <app-content-panel></app-content-panel>\r\n  </div>\r\n  <div class=\"\">\r\n    <app-content-panel></app-content-panel>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/left-bar/left-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftBarComponent = /** @class */ (function () {
    function LeftBarComponent() {
    }
    LeftBarComponent.prototype.ngOnInit = function () {
    };
    LeftBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-left-bar',
            template: __webpack_require__("../../../../../src/app/left-bar/left-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/left-bar/left-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftBarComponent);
    return LeftBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <app-major-stories></app-major-stories>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <app-recent-stories></app-recent-stories>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <app-right-bar></app-right-bar>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/major-stories/major-stories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n  height: 400px;\r\n}\r\nimg {\r\n  width: 100%;\r\n}\r\n.main {\r\n  text-align: center;\r\n}\r\n.sample {\r\n  height: 80px;\r\n}\r\nh5 {\r\n  font-size: 15px;\r\n}\r\nh3 {\r\n  font-size: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/major-stories/major-stories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-6 main\">\r\n    <img src={{mainArticle?.image}} alt=\"Article Thumbnail Image\">\r\n    <h3>{{mainArticle?.title}}</h3>\r\n  </div>\r\n  <div class=\"col-6 sample\">\r\n    <div *ngFor=\"let article of articlesToList\">\r\n      <h5>{{article.title}}</h5>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/major-stories/major-stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MajorStoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__("../../../../../src/app/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MajorStoriesComponent = /** @class */ (function () {
    function MajorStoriesComponent(articlesService) {
        var _this = this;
        this.articlesService = articlesService;
        this.articlesService.getMainArticle().subscribe(function (dataLastEmittedFromObserver) {
            _this.mainArticle = dataLastEmittedFromObserver;
        });
        this.articlesService.getArticles().subscribe(function (dataLastEmittedFromObserver) {
            _this.articles = dataLastEmittedFromObserver;
            _this.articlesToList = _this.articles.slice(1, 7);
        });
    }
    MajorStoriesComponent.prototype.ngOnInit = function () { };
    MajorStoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-major-stories',
            template: __webpack_require__("../../../../../src/app/major-stories/major-stories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/major-stories/major-stories.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]])
    ], MajorStoriesComponent);
    return MajorStoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/article.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(title, author, date, image, paragraphs) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.image = image;
        this.paragraphs = paragraphs;
    }
    return Article;
}());



/***/ }),

/***/ "../../../../../src/app/model/link.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = /** @class */ (function () {
    function Link(name, link) {
        this.name = name;
        this.link = link;
    }
    return Link;
}());



/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>Post a new article</h2>\r\n  <label>Title of new article</label>\r\n  <input class=\"form-control\" #newTitle>\r\n  <label>Your name (author)</label>\r\n  <input class=\"form-control\" #newAuthor>\r\n  <label>URL for image thumbnail</label>\r\n  <input class=\"form-control\" #newImage>\r\n  <label>Write your post below:</label>\r\n  <textarea class=\"form-control\" #newParagraphs rows=\"5\"></textarea>\r\n  <br>\r\n  <button class=\"btn\" (click)=\"submitNewArticle(newTitle.value, newAuthor.value, newImage.value, newParagraphs.value); newTitle.value=''; newAuthor.value=''; newImage.value=''; newParagraphs.value=''\">Submit my Article!</button>\r\n</div>\r\n<br>\r\n<button (click)=\"goHome()\" class=\"button\">Go Back To Homepage</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_article_model__ = __webpack_require__("../../../../../src/app/model/article.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_service__ = __webpack_require__("../../../../../src/app/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = /** @class */ (function () {
    function PostComponent(router, articlesService) {
        this.router = router;
        this.articlesService = articlesService;
    }
    PostComponent.prototype.submitNewArticle = function (title, author, image, paragraphs) {
        var newDate = new Date;
        var date = (newDate.getMonth() + 1) + "/" + newDate.getUTCDate() + "/" +
            newDate.getUTCFullYear();
        var newArticle = new __WEBPACK_IMPORTED_MODULE_2__model_article_model__["a" /* Article */](title, author, date, image, paragraphs);
        this.articlesService.addNewArticle(newArticle);
    };
    PostComponent.prototype.goHome = function () {
        this.router.navigate([""]);
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/post.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recent-stories/recent-stories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-4 img {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recent-stories/recent-stories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\r\n  <div class=\"panel-header\">\r\n    <img src=\"https://twimgs.com/gamasutra//images/icon_news.png\" alt=\"Latest Updates\">\r\n    <h4>Latest Updates</h4>\r\n  </div>\r\n  <div class=\"panel-body\" *ngFor=\"let article of articles\">\r\n    <strong>{{article?.title}}</strong>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-8\">\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <img src={{article?.image}} alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/recent-stories/recent-stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentStoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__("../../../../../src/app/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentStoriesComponent = /** @class */ (function () {
    function RecentStoriesComponent(articlesService) {
        this.articlesService = articlesService;
    }
    RecentStoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articlesService.getArticles().subscribe(function (dataLastEmittedFromObserver) {
            _this.articles = dataLastEmittedFromObserver;
        });
        this.articles = this.articles.slice(1);
        this.single = this.articles[3];
    };
    RecentStoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recent-stories',
            template: __webpack_require__("../../../../../src/app/recent-stories/recent-stories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recent-stories/recent-stories.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]])
    ], RecentStoriesComponent);
    return RecentStoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/right-bar/right-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/right-bar/right-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"header\">\r\n    <img src=\"https://twimgs.com/gamasutra//images/icon_blogs.png\" alt=\"Image\">\r\n    <h3>Write for Gamasutra!</h3>\r\n  </div>\r\n  <div class=\"\">\r\n    <img src=\"https://twimgs.com/gamasutra//images/img_joinTheConversation.jpg\" alt=\"Fingers on the Keyboard\">\r\n    <p>Share your thoughts, knowledge and ideas with the largest community of game developers in the world. If we like what we see, we'll promote your pose on our home page.</p>\r\n    <button class=\"btn\" (click)=\"goToPost()\">START BLOGGING NOW</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/right-bar/right-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RightBarComponent = /** @class */ (function () {
    function RightBarComponent(router) {
        this.router = router;
    }
    RightBarComponent.prototype.ngOnInit = function () {
    };
    RightBarComponent.prototype.goToPost = function () {
        this.router.navigate(['post']);
    };
    RightBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-right-bar',
            template: __webpack_require__("../../../../../src/app/right-bar/right-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/right-bar/right-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RightBarComponent);
    return RightBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/site-nav/site-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  max-width: 838px;\r\n  height: 30px;\r\n  background-color: #DDD;\r\n}\r\n\r\n\r\ndiv {\r\n  display: inline-block;\r\n  font-size: 9px;\r\n  font-weight: 700;\r\n  line-height: 30px;\r\n  height: 30px;\r\n}\r\n\r\n\r\n.jobs {\r\n  display: block;\r\n  float: left;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#dd8d34), to(#d96a00));\r\n  background: linear-gradient(#dd8d34, #d96a00);\r\n  background-clip: border-box;\r\n  width: 124px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.jobs a {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n.jobs a:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n.nav {\r\n  width: 502px;\r\n}\r\n\r\n\r\n.nav a {\r\n  margin: 0px 25px 0px 25px;\r\n  color: #336658;\r\n}\r\n\r\n\r\n.nav a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n.search {\r\n  display: block;\r\n  width: 208px;\r\n  text-align: center;\r\n  float: right;\r\n  color: white;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#888), to(#333));\r\n  background: linear-gradient(#888, #333);\r\n}\r\n\r\n\r\ninput {\r\n  border: 0px;\r\n  padding: 0px;\r\n  height: 25px;\r\n  margin-left: 10px;\r\n  margin-right: 5px;\r\n}\r\n\r\n\r\nbutton {\r\n  color: white;\r\n  border: 1px;\r\n  padding: 0px;\r\n  width: 21px;\r\n  height: 16px;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site-nav/site-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"jobs\">\r\n    <a href=\"#\">GAME JOBS</a>\r\n  </div>\r\n  <div class=\"nav\">\r\n    <a *ngFor=\"let link of navLinkList\" href={{link.link}}>{{link.name}}</a>\r\n  </div>\r\n  <div class=\"search\">\r\n    <form>\r\n      <label for=\"search\">SEARCH</label>\r\n      <input type=\"text\">\r\n      <button type=\"button\">GO</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/site-nav/site-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_link_model__ = __webpack_require__("../../../../../src/app/model/link.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SiteNavComponent = /** @class */ (function () {
    function SiteNavComponent() {
        this.navLinkList = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('UPDATES', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('BLOGS', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('CONTRACTORS', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('NEWSLETTER', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('STORE', '#'),
        ];
    }
    SiteNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-site-nav',
            template: __webpack_require__("../../../../../src/app/site-nav/site-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/site-nav/site-nav.component.css")]
        })
    ], SiteNavComponent);
    return SiteNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/top-banner/top-banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  background-color: black;\r\n  color: white;\r\n}\r\nli {\r\n  display: inline-block;\r\n  padding: 5px 28px 5px 28px;\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-banner/top-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ul>\r\n    <li>Our Properties: </li>\r\n    <li *ngFor=\"let link of bannerLinkList\"><a href={{link.link}}>{{link.name}}</a></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/top-banner/top-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_link_model__ = __webpack_require__("../../../../../src/app/model/link.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopBannerComponent = /** @class */ (function () {
    function TopBannerComponent() {
        this.bannerLinkList = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('Gamasutra', 'http://www.gamasutra.com/'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('GameCareerGuide', 'http://www.gamecareerguide.com/'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('IndieGames', 'http://indiegames.com/index.html'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('GDC Vault', 'http://www.gdcvault.com/'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('GDC', 'http://www.gdconf.com/'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('IGF', 'http://www.igf.com/')
        ];
    }
    TopBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-banner',
            template: __webpack_require__("../../../../../src/app/top-banner/top-banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top-banner/top-banner.component.css")]
        })
    ], TopBannerComponent);
    return TopBannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topic-bar/topic-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  max-width: 838px;\r\n  height: 37px;\r\n  background-color: #DDD;\r\n}\r\nul {\r\n  font-size: 9px;\r\n  font-weight: 700;\r\n  height: 33px;\r\n  vertical-align: middle;\r\n}\r\nli {\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#77d59b), to(#097141));\r\n  background: linear-gradient(#77d59b, #097141);\r\n  margin-right: 2px;\r\n  margin-left: 2px;\r\n}\r\na {\r\n  color: white;\r\n}\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n.developer {\r\n  height: 33px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic-bar/topic-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n      <li class=\"nav-item\" *ngFor=\"let link of links\"><a href={{link.link}} class=\"nav-link\" role=\"tab\">{{link.name}}</a></li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/topic-bar/topic-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_link_model__ = __webpack_require__("../../../../../src/app/model/link.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicBarComponent = /** @class */ (function () {
    function TopicBarComponent() {
        this.links = [
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('All', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('CONSOLE/PC', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('SMARTPHONE/TABLET', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('INDEPENDENT', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('VR/AR', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('SOCIAL/ONLINE', '#'),
            new __WEBPACK_IMPORTED_MODULE_1__model_link_model__["a" /* Link */]('GAME DEVELOPER ON GAMASUTRA', '#')
        ];
    }
    TopicBarComponent.prototype.ngOnInit = function () {
    };
    TopicBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic-bar',
            template: __webpack_require__("../../../../../src/app/topic-bar/topic-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topic-bar/topic-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicBarComponent);
    return TopicBarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map