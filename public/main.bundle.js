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
    storageBucket: "",
    messagingSenderId: "578253526883"
};


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background-color: transparent;\n  min-width: 1006px;\n}\n.wrapper {\n  min-width: 838px;\n  max-width: 838px;\n  background-color: white;\n}\nimg {\n  margin-bottom: 20px;\n}\n.row {\n background-color: #EEE;\n border: solid black 1px;\n}\n.col-3 {\n  border: solid black 1px;\n}\n.col-6 {\n  border: solid black 1px;\n}\nfooter {\n  border-top: 1px solid yellow;\n  padding-top: 15px;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-top-banner></app-top-banner>\n</div>\n\n<div class='container'>\n  <img alt=\"Gamasutra Logo\" src=\"https://twimgs.com/gamasutra/images/gamasutra_logo.png\">\n  <div class=\"wrapper\">\n    <app-site-nav></app-site-nav>\n    <app-topic-bar></app-topic-bar>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <app-left-bar></app-left-bar>\n      </div>\n      <div class=\"col-9\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n\n<footer>\n  <app-bottom-banner></app-bottom-banner>\n</footer>\n"

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
exports.push([module.i, ".footer {\n  background: black;\n  color: white;\n}\n.top {\n  min-width: 1006px;\n  margin-left: auto;\n  margin-right: auto;\n}\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\nul {\n  display: inline-block;\n  padding: 0px 15px;\n}\n.tech {\n  display: inline-block;\n  height: 60px;\n}\n.group {\n  height: 80px;\n  margin-left: 1px solid white;\n}\n.title {\n  font-weight: 700;\n}\nli {\n  font-size: 11px;\n  font-weight: 400;\n  list-style: none;\n}\n#legal {\n  display: block;\n  float: right;\n}\n#legal li {\n  display: inline-block;\n  border-left: solid 1px white;\n  padding-left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-banner/bottom-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"row container top\">\n    <div class=\"col-1\">\n      <img src=\"https://twimgs.com/nojitter/gama/UBM_Logo_White.png\" alt=\"UBM Logo\">\n    </div>\n    <div class=\"col-11\">\n      <ul class=\"tech group\">\n        <li class=\"title\">TECHNOLOGY GROUP</li>\n        <li *ngFor=\"let link of techLinks1\"><a href={{link.link}}>{{link.name}}</a></li>\n      </ul>\n      <ul class=\"tech\">\n        <li *ngFor=\"let link of techLinks2\"><a href={{link.link}}>{{link.name}}</a></li>\n      </ul>\n      <ul class=\"tech\">\n        <li *ngFor=\"let link of techLinks3\"><a href={{link.link}}>{{link.name}}</a></li>\n      </ul>\n      <ul class=\"tech\">\n        <li *ngFor=\"let link of techLinks4\"><a href={{link.link}}>{{link.name}}</a></li>\n      </ul>\n      <ul>\n        <li class=\"title\">COMMUNITIES SERVED</li>\n        <li *ngFor=\"let link of communityLinks\"><a href={{link.link}}>{{link.name}}</a></li>\n      </ul>\n      <ul>\n        <li class=\"title\">WORKING WITH US</li>\n        <li *ngFor=\"let link of workingLinks\"><a href={{link.link}}>{{link.name}}</a></li>\n      </ul>\n    </div>\n  </div>\n  <div>\n    <ul id=\"legal\">\n      <li *ngFor=\"let link of legalLinks\"><a href={{link.link}}>{{link.name}}</a></li>\n      <li>Copyright (c) 2018 UBM, All rights reserved</li>\n    </ul>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"header\">\n  <img src=\"\" alt=\"\">\n  <h5>Title</h5>\n</div>\n<div class=\"\">\n  <a href=\"#\">View All</a>\n  <a href=\"#\">SAMPLE</a>\n  <hr>\n  <strong>May 11, 2018</strong>\n  <hr>\n  <ul>\n    <li>Link 1</li>\n    <li>Link 2</li>\n    <li>Link 3</li>\n    <li>Link 4</li>\n    <li>Link 5</li>\n  </ul>\n</div>\n"

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
exports.push([module.i, "div {\n  font-size: 10px;\n  border: 1px solid black;\n}\ninput {\n  width: 30px;\n}\nli {\n  list-style: none;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/left-bar/left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"\">\n    <form>\n      <h4>Member Login</h4>\n      <label for=\"email\">Email:</label>\n      <input type=\"text\">\n      <br>\n      <label for=\"Password:\">Password:</label>\n      <input type=\"text\">\n      <button type=\"button\">Login</button>\n    </form>\n    <p><a href=\"#\">Forgot Password?</a><a href=\"#\">Sign Up</a></p>\n  </div>\n  <div class=\"socialMedia\">\n    <ul>\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_facebook.png\" alt=\"Facebook\"></a></li>\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_twitter.png\" alt=\"Twitter\"></a></li>\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_feed.png\" alt=\"RSS\"></a></li>\n      <li><a href=\"#\"><img src=\"https://twimgs.com/gamasutra/images/icon_newsletter.png\" alt=\"Email\"></a></li>\n    </ul>\n  </div>\n  <div class=\"topics\">\n    <div class=\"programming\">\n      <img src=\"https://twimgs.com/gamasutra/images/button_programming.gif\" alt=\"Programming Icon\">\n      <p>PROGRAMMING</p>\n    </div>\n    <div class=\"art\">\n      <img src=\"https://twimgs.com/gamasutra/images/button_art.gif\" alt=\"Art Icon\">\n      <p>ART</p>\n    </div>\n    <div class=\"audio\">\n      <img src=\"https://twimgs.com/gamasutra/images/button_audio.gif\" alt=\"Audio Icon\">\n      <p>AUDIO</p>\n    </div>\n    <div class=\"design\">\n      <img src=\"https://twimgs.com/gamasutra/images/button_design.gif\" alt=\"Design Icon\">\n      <p>DESIGN</p>\n    </div>\n    <div class=\"production\">\n      <img src=\"https://twimgs.com/gamasutra/images/button_production.gif\" alt=\"Production Icon\">\n      <p>PRODUCTION</p>\n    </div>\n    <div class=\"biz/marketing\">\n      <img src=\"https://twimgs.com/gamasutra/images/button_business.gif\" alt=\"Biz/Marketing Icon\">\n      <p>BIZ/MARKETING</p>\n    </div>\n  </div>\n  <div class=\"Latest Jobs\">\n    <div class=\"header\">\n      <img src=\"\" alt=\"\">\n      <h5>Title</h5>\n    </div>\n    <div class=\"\">\n      <a href=\"#\">View All</a>\n      <a href=\"#\">SAMPLE</a>\n      <hr>\n      <strong>May 11, 2018</strong>\n      <hr>\n      <ul>\n        <li>Link 1</li>\n        <li>Link 2</li>\n        <li>Link 3</li>\n        <li>Link 4</li>\n        <li>Link 5</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"\">\n    <app-content-panel></app-content-panel>\n  </div>\n  <div class=\"\">\n    <app-content-panel></app-content-panel>\n  </div>\n  <div class=\"\">\n    <app-content-panel></app-content-panel>\n  </div>\n  <div class=\"\">\n    <app-content-panel></app-content-panel>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"row\">\n  <app-major-stories></app-major-stories>\n</div>\n<div class=\"row\">\n  <div class=\"col-6\">\n    <app-recent-stories></app-recent-stories>\n  </div>\n  <div class=\"col-6\">\n    <app-right-bar></app-right-bar>\n  </div>\n</div>\n"

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
exports.push([module.i, "img {\n  width: 100%;\n}\n.main {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/major-stories/major-stories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6 main\">\n    <img src={{mainArticle?.image}} alt=\"Article Thumbnail Image\">\n    <h3>{{mainArticle?.title}}</h3>\n  </div>\n  <div class=\"col-6\">\n    <div *ngFor=\"let article of articlesToList\">\n      <h3>{{article.title}}</h3>\n      <hr>\n    </div>\n  </div>\n</div>\n"

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
            _this.articlesToList = _this.articles.slice(1);
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

module.exports = "<div>\n  <h2>Post a new article</h2>\n  <label>Title of new article</label>\n  <input class=\"form-control\" #newTitle>\n  <label>Your name (author)</label>\n  <input class=\"form-control\" #newAuthor>\n  <label>URL for image thumbnail</label>\n  <input class=\"form-control\" #newImage>\n  <label>Write your post below:</label>\n  <textarea class=\"form-control\" #newParagraphs rows=\"5\"></textarea>\n  <br>\n  <button class=\"btn\" (click)=\"submitNewArticle(newTitle.value, newAuthor.value, newImage.value, newParagraphs.value); newTitle.value=''; newAuthor.value=''; newImage.value=''; newParagraphs.value=''\">Submit my Article!</button>\n</div>\n<br>\n<button (click)=\"goHome()\" class=\"button\">Go Back To Homepage</button>\n"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recent-stories/recent-stories.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  recent-stories works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/recent-stories/recent-stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentStoriesComponent; });
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

var RecentStoriesComponent = /** @class */ (function () {
    function RecentStoriesComponent() {
    }
    RecentStoriesComponent.prototype.ngOnInit = function () {
    };
    RecentStoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recent-stories',
            template: __webpack_require__("../../../../../src/app/recent-stories/recent-stories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recent-stories/recent-stories.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div>\n  <div class=\"header\">\n    <img src=\"https://twimgs.com/gamasutra//images/icon_blogs.png\" alt=\"Image\">\n    <h3>Write for Gamasutra!</h3>\n  </div>\n  <div class=\"\">\n    <img src=\"https://twimgs.com/gamasutra//images/img_joinTheConversation.jpg\" alt=\"Fingers on the Keyboard\">\n    <p>Share your thoughts, knowledge and ideas with the largest community of game developers in the world. If we like what we see, we'll promote your pose on our home page.</p>\n    <button class=\"btn\" (click)=\"goToPost()\">START BLOGGING NOW</button>\n  </div>\n</div>\n"

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
exports.push([module.i, ".wrapper {\n  max-width: 838px;\n  height: 30px;\n  background-color: #DDD;\n}\n\n\ndiv {\n  display: inline-block;\n  font-size: 9px;\n  font-weight: 700;\n  line-height: 30px;\n  height: 30px;\n}\n\n\n.jobs {\n  display: block;\n  float: left;\n  background: -webkit-gradient(linear, left top, left bottom, from(#dd8d34), to(#d96a00));\n  background: linear-gradient(#dd8d34, #d96a00);\n  background-clip: border-box;\n  width: 124px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n\n.jobs a {\n  color: white;\n  text-decoration: none;\n}\n\n\n.jobs a:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n\n.nav {\n  width: 502px;\n}\n\n\n.nav a {\n  margin: 0px 25px 0px 25px;\n  color: #336658;\n}\n\n\n.nav a:hover {\n  text-decoration: underline;\n}\n\n\n.search {\n  display: block;\n  width: 208px;\n  text-align: center;\n  float: right;\n  color: white;\n  background: -webkit-gradient(linear, left top, left bottom, from(#888), to(#333));\n  background: linear-gradient(#888, #333);\n}\n\n\ninput {\n  border: 0px;\n  padding: 0px;\n  height: 25px;\n  margin-left: 10px;\n  margin-right: 5px;\n}\n\n\nbutton {\n  color: white;\n  border: 1px;\n  padding: 0px;\n  width: 21px;\n  height: 16px;\n  background-color: transparent;\n}\n\n\nbutton:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site-nav/site-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"jobs\">\n    <a href=\"#\">GAME JOBS</a>\n  </div>\n  <div class=\"nav\">\n    <a *ngFor=\"let link of navLinkList\" href={{link.link}}>{{link.name}}</a>\n  </div>\n  <div class=\"search\">\n    <form>\n      <label for=\"search\">SEARCH</label>\n      <input type=\"text\">\n      <button type=\"button\">GO</button>\n    </form>\n  </div>\n</div>\n"

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
exports.push([module.i, "div {\n  background-color: black;\n  color: white;\n}\nli {\n  display: inline-block;\n  padding: 5px 28px 5px 28px;\n}\na {\n  color: white;\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-banner/top-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li>Our Properties: </li>\n    <li *ngFor=\"let link of bannerLinkList\"><a href={{link.link}}>{{link.name}}</a></li>\n  </ul>\n</div>\n"

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
exports.push([module.i, ".wrapper {\n  max-width: 838px;\n  height: 37px;\n  background-color: #DDD;\n}\nul {\n  font-size: 9px;\n  font-weight: 700;\n  height: 33px;\n  vertical-align: middle;\n}\nli {\n  background: -webkit-gradient(linear, left top, left bottom, from(#77d59b), to(#097141));\n  background: linear-gradient(#77d59b, #097141);\n  margin-right: 2px;\n  margin-left: 2px;\n}\na {\n  color: white;\n}\na:hover {\n  text-decoration: underline;\n}\n.developer {\n  height: 33px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic-bar/topic-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let link of links\"><a href={{link.link}} class=\"nav-link\" role=\"tab\">{{link.name}}</a></li>\n    </ul>\n</div>\n"

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
var environment = {
    production: true
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