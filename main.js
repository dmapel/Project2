(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .space {\n      padding: 10px;\n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background-color: orangered\">\n  <mat-toolbar-row>\n    <span class=\"example-spacer\"></span>\n    <a routerLink= \"\"><i class=\"material-icons\">\n        exit_to_app\n        </i></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.ts ***!
  \********************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminNavbarComponent = /** @class */ (function () {
    function AdminNavbarComponent() {
    }
    AdminNavbarComponent.prototype.ngOnInit = function () {
    };
    AdminNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-navbar',
            template: __webpack_require__(/*! ./admin-navbar.component.html */ "./src/app/admin-navbar/admin-navbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-navbar.component.css */ "./src/app/admin-navbar/admin-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminNavbarComponent);
    return AdminNavbarComponent;
}());



/***/ }),

/***/ "./src/app/admin-profile/admin-profile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-profile/admin-profile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#one {\n    margin-top: 900px;\n    text-decoration: none;\n    color: white;\n    width: 350px;\n    margin-left: 315px;\n}\n#two {\n    margin-top: 900px;\n    text-decoration: none;\n    color: white;\n    width: 350px;\n    margin-left: 25px;\n}\n#size {\n    width: 30%;\n    height:30%;\n    margin-left: 495px;\n    margin-top: 125px;  \n  }\nh2 {\n      text-align: center;\n  }"

/***/ }),

/***/ "./src/app/admin-profile/admin-profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-profile/admin-profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-navbar></app-admin-navbar>\n<mat-toolbar>\n<span class=\"button-row\">\n  <a routerLink=\"/view-users\"><button mat-raised-button style=\"background-color: orangered\" id=\"one\">View Users</button></a>\n</span>\n<span class=\"button-row\">\n  <a routerLink=\"/view-pages\"><button mat-raised-button style=\"background-color: orangered\" id=\"two\">View Pages</button></a>\n</span>\n</mat-toolbar>\n<img src= \"{{img}}\" id = \"size\">\n<h2>Admin</h2>"

/***/ }),

/***/ "./src/app/admin-profile/admin-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-profile/admin-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProfileComponent = /** @class */ (function () {
    function AdminProfileComponent(userService) {
        this.userService = userService;
        this.img = "assets/pics/revature-logo-600x219.png";
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
    };
    AdminProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-profile',
            template: __webpack_require__(/*! ./admin-profile.component.html */ "./src/app/admin-profile/admin-profile.component.html"),
            styles: [__webpack_require__(/*! ./admin-profile.component.css */ "./src/app/admin-profile/admin-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-page/create-page.component */ "./src/app/create-page/create-page.component.ts");
/* harmony import */ var _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-users/view-users.component */ "./src/app/view-users/view-users.component.ts");
/* harmony import */ var _view_pages_view_pages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-pages/view-pages.component */ "./src/app/view-pages/view-pages.component.ts");
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "./src/app/admin-profile/admin-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    },
    {
        path: 'page',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"]
    },
    {
        path: 'search-bar',
        component: _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"]
    },
    {
        path: 'create-page',
        component: _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__["CreatePageComponent"]
    },
    {
        path: 'view-users',
        component: _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_9__["ViewUsersComponent"]
    },
    {
        path: 'view-pages',
        component: _view_pages_view_pages_component__WEBPACK_IMPORTED_MODULE_10__["ViewPagesComponent"]
    },
    {
        path: 'admin-profile',
        component: _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_11__["AdminProfileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-page/create-page.component */ "./src/app/create-page/create-page.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "./src/app/admin-profile/admin-profile.component.ts");
/* harmony import */ var _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-navbar/admin-navbar.component */ "./src/app/admin-navbar/admin-navbar.component.ts");
/* harmony import */ var _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-users/view-users.component */ "./src/app/view-users/view-users.component.ts");
/* harmony import */ var _view_pages_view_pages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-pages/view-pages.component */ "./src/app/view-pages/view-pages.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"],
                _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_11__["CreatePageComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_13__["SearchBarComponent"],
                _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_14__["AdminProfileComponent"],
                _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_15__["AdminNavbarComponent"],
                _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_16__["ViewUsersComponent"],
                _view_pages_view_pages_component__WEBPACK_IMPORTED_MODULE_17__["ViewPagesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-page/create-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-page/create-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .example-container {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .example-container > * {\n    width: 100%;\n  } */\n  .example-container {\n    display: flex;\n    flex-direction: column;\n    margin-top: 100px;\n    width: 500px;\n    margin-left: 435px;\n  }\n  .example-container > * {\n    width: 100%;\n  }\n  #size {\n    width: 30%;\n    height:30%;\n    margin-left: 480px;\n    margin-top: 100px;  \n  }\n  .background {\n    height: 100%;\n    width: 100%;\n}\n  label {\n  margin-left: 150px;\n}\n  button {\n  margin-left: 200px;\n}\n  h1 {\n    color: rgb(247, 104, 9);\n    margin-left: 510px;\n    margin-top: 100px;\n    margin-bottom: -80px;\n}\n  .carousel-inner {\n  width: 100%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/create-page/create-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-page/create-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"container\">\n    <h1>Create New Page</h1>\n    <div class=\"example-container\">\n        <mat-form-field>\n          <input matInput placeholder=\"Title\" [(ngModel)]=\"title\">\n        </mat-form-field>\n        <mat-form-field>\n            <textarea matInput placeholder=\"Summary\" [(ngModel)]=\"summary\"></textarea>\n          </mat-form-field>\n      \n        <mat-form-field>\n          <textarea matInput placeholder=\"Body\" [(ngModel)]=\"body\"></textarea>\n        </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select placeholder=\"Select a Theme\" [(ngModel)]=\"selectedValue\">\n            <mat-option *ngFor=\"let o of options\" [value]=\"o.name\">\n              {{o.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <input type=\"file\" (change)=\"onFileChanged($event)\"\n        >\n        <button (click)=\"onUpload()\">Upload!</button>\n        <!-- <p style=\"text-align: center;\"> The theme is   {{selectedValue}}</p> -->\n        <div class=\"button-row\">\n            <button mat-raised-button color=\"warn\" (click)=\"storePage()\">\n              Create Page\n            </button>\n          </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-page/create-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-page/create-page.component.ts ***!
  \******************************************************/
/*! exports provided: CreatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageComponent", function() { return CreatePageComponent; });
/* harmony import */ var _service_new_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/new-page.service */ "./src/app/service/new-page.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePageComponent = /** @class */ (function () {
    function CreatePageComponent(http, router, pageService, userService) {
        this.http = http;
        this.router = router;
        this.pageService = pageService;
        this.userService = userService;
        this.options = [
            { name: 'teal-theme', label: 'Teal' },
            { name: 'orange-theme', label: 'Orange' },
            { name: 'default-theme', label: 'White' }
        ];
    }
    CreatePageComponent.prototype.ngOnInit = function () {
    };
    //Get the image upload.
    CreatePageComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    CreatePageComponent.prototype.onUpload = function () {
        console.log(this.selectedFile);
    };
    CreatePageComponent.prototype.storePage = function () {
        //Gets the current user so we can user their uId.
        var current = this.userService.getCurrentUser();
        console.log(current);
        //If there is no current user, it will take it back to the login page.
        if (!current) {
            this.router.navigate(['']);
        }
        //Create a new page from user input.
        this.page = {
            creatorId: current.uId,
            title: this.title,
            summary: this.summary,
            body: this.body
        };
        //Insert new page in database.
        this.pageService.createNewPage(this.page.creatorId, this.page.title, this.page.summary, this.page.body).subscribe(function (data) {
            console.log(data);
        });
        //Set the new page as the current page.
        this.pageService.setPage(this.page);
        //Test to get the current page.
        console.log(this.pageService.getCurrentPage());
        //Calls the method to set the current page's theme.
        this.getSelectedValue();
    };
    //Gets the selected theme.
    CreatePageComponent.prototype.getSelectedValue = function () {
        console.log(this.selectedValue);
        this.pageService.setTheme(this.selectedValue);
        console.log(this.pageService.getTheme());
        this.router.navigate(['page']);
    };
    CreatePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-page',
            template: __webpack_require__(/*! ./create-page.component.html */ "./src/app/create-page/create-page.component.html"),
            styles: [__webpack_require__(/*! ./create-page.component.css */ "./src/app/create-page/create-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_new_page_service__WEBPACK_IMPORTED_MODULE_0__["NewPageService"], _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], CreatePageComponent);
    return CreatePageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    margin-top: 100px;\n    width: 500px;\n    margin-left: auto;\n    margin-right: auto; \n  }\n  \n  .example-container > * {\n    width: 100%;\n  }\n  \n  #size {\n    width: 100%;\n    /* height:30%;\n    margin-left: 480px;\n    margin-top: 125px;   */\n  }\n  \n  .background {\n    height: 100%;\n    width: 100%;\n    margin: 0 auto;\n}\n  \n  label {\n  margin: auto 160px;\n}\n  \n  button {\n  margin: auto 210px;\n}\n  \n  h5 {\n  margin: auto 50px;\n  color: orangered;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div style=\"width: 390px; margin: 100px auto;\">\n<img src= \"{{img}}\" id = \"size\">\n</div>\n<div class=\"example-container\">\n  <mat-form-field style=\"width:100%;\">\n    <input [(ngModel)] = 'username' matInput placeholder=\"Enter your username\" type=\"username\">\n  </mat-form-field>\n\n  <mat-form-field style=\"width:100%;\">\n    <input [(ngModel)] = 'password' matInput placeholder=\"Enter your password\" type=\"password\">\n  </mat-form-field>\n<div class=\"button-row\">\n  <button mat-raised-button color=\"warn\" (click) = \"login()\">Login</button>\n</div><br>\n<label>New user? Sign-up <a routerLink = \"/signup\">here</a>!</label>\n<h5>{{display}}</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_cognito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/cognito.service */ "./src/app/service/cognito.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(cognitoService, router, userService) {
        this.cognitoService = cognitoService;
        this.router = router;
        this.userService = userService;
        this.img = 'assets/pics/revature-logo-600x219.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        /* window.location.href= "https://revaturetech.auth.us-east-2.amazoncognito.com
         *     /login?response_type=token&client_id=4ptb0da4skq58fmigvjp65o1k
         *      &redirect_uri=http://localhost:4200/profile";
         */
    };
    //Attempt to sign in a user.
    //Attempt to sign in a user.
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.username);
        console.log(this.password);
        // First get the user's id token from cognito
        this.cognitoService.signIn(this.username, this.password).subscribe(function (result) {
            if (result) {
                _this.userService.getUserByUsername(_this.username, _this.password).subscribe(function (user) {
                    console.log(user);
                    if (user) {
                        if (_this.username === user.username)
                            console.log('Found in database.');
                        //Set the current user.
                        _this.userService.setCurrentUser(user);
                        //Store password.
                        _this.userService.storePassword(_this.password);
                        //Navigates to the search page or admin page depending on postion id.
                        if (user.posId == 1) {
                            _this.router.navigate(['admin-profile']);
                        }
                        else {
                            _this.router.navigate(['search-bar']);
                        }
                    }
                    else {
                        console.log("User not found in database.");
                    }
                });
                // If there was an error
                if (result['message']) {
                    _this.errorMessage = 'Invalid credentials';
                    alert("Username or password not valid. Please try again.");
                    return;
                }
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_cognito_service__WEBPACK_IMPORTED_MODULE_2__["CognitoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .space {\n      padding: 10px;\n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background-color: orangered\">\n  <mat-toolbar-row>\n    <span class=\"space\"><a routerLink=\"/search-bar\">Home</a></span>\n    <span class=\"space\"><a routerLink=\"/profile\">Profile</a></span>\n    <span class=\"space\"><a routerLink=\"/create-page\">Create Page</a></span>\n    <span class=\"example-spacer\"></span>\n    <a routerLink= \"\"><i class=\"material-icons\">\n        exit_to_app\n        </i></a>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n    .orange {\n        background-image: url(\"https://images.fineartamerica.com/images-medium-large/abstract-orange-and-red-background-nattapon-wongwean.jpg\");\n    }\n\n    .teal {\n        background-image: url(\"https://www.drnovelly.com/wp-content/uploads/2014/11/teal2.jpg\");\n    }\n</style>\n<div id=\"edit\">\n    <!--Button to open modal. -->\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n        Edit Page\n    </button>\n    <!--Modal-->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit the Page</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <label>Enter Title</label>\n                    <br>\n                   <input type=\"text\">\n                   <br>\n                   <label>Enter Summary</label>\n                   <br>\n                   <input type=\"text\">\n                   <br>\n                   <label>Enter Body</label>\n                   <br>\n                   <input type=\"text\">\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click) = \" updatePage()\">Save changes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"title\">\n    <h1>{{page.title}}</h1>\n</div>\n<div id=\"summary\">\n    <blockquote>{{ page.summary}}</blockquote>\n</div>\n<div id=\"img\">\n    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdP2-cdQ0Os7HQtUQTOOlZ_9c5lwZNI0kSzlujZg-dWqxZBJsN\">\n</div>\n<div id=\"body\">\n    <blockquote>{{page.body}}</blockquote>\n</div>\n\n<div id=\"comments\">\n    <blockquote>{{page.comments}}</blockquote>\n</div>\n\n<!--Orange theme-->\n<div *ngIf=\"theme == 'orange-theme'\" class=\"orange\">\n    <div id=\"title\">\n        <h1>{{page.title}}</h1>\n    </div>\n    <div id=\"summary\">\n        <blockquote>{{ page.summary}}</blockquote>\n    </div>\n    <div id=\"img\">\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdP2-cdQ0Os7HQtUQTOOlZ_9c5lwZNI0kSzlujZg-dWqxZBJsN\">\n    </div>\n    <div id=\"body\">\n        <blockquote>{{page.body}}</blockquote>\n    </div>\n\n    <div id=\"comments\">\n        <blockquote>{{page.comments}}</blockquote>\n    </div>\n</div>\n\n<!--Teal theme-->\n<div class=\"teal\" *ngIf=\"theme == 'teal-theme'\">\n\n    <div id=\"title\">\n        <h1>{{page.title}}</h1>\n    </div>\n    <div id=\"summary\">\n        <blockquote>{{ page.summary}}</blockquote>\n    </div>\n    <div id=\"img\">\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdP2-cdQ0Os7HQtUQTOOlZ_9c5lwZNI0kSzlujZg-dWqxZBJsN\">\n    </div>\n    <div id=\"body\">\n        <blockquote>{{page.body}}</blockquote>\n    </div>\n\n    <div id=\"comments\">\n        <blockquote>{{page.comments}}</blockquote>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n<!--Orange theme-->\n<!-- <img src=\"https://images.fineartamerica.com/images-medium-large/abstract-orange-and-red-background-nattapon-wongwean.jpg\"> -->\n<!--Teal theme-->\n<!-- <img src=\"https://www.drnovelly.com/wp-content/uploads/2014/11/teal2.jpg\"> -->\n"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_new_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/new-page.service */ "./src/app/service/new-page.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = /** @class */ (function () {
    function PageComponent(pageService, userService) {
        this.pageService = pageService;
        this.userService = userService;
        this.page = this.pageService.getCurrentPage();
        this.cUser = this.userService.getCurrentUser();
        this.theme = this.pageService.getTheme();
    }
    PageComponent.prototype.ngOnInit = function () {
        this.getTheme();
        //Get the current page and user.
        console.log(this.userService.getCurrentUser());
        console.log(this.pageService.getCurrentPage());
        console.log(this.userService.getPassword());
    };
    //Check for theme
    PageComponent.prototype.getTheme = function () {
        console.log(this.pageService.getTheme());
        console.log(this.cUser);
    };
    //Allows user to update the page.
    PageComponent.prototype.updatePage = function () {
        this.pageService.updatePage(this.cUser.uId, this.page.title, this.page.summary, this.page.body).subscribe(function (data) {
            console.log(data);
        });
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [_service_new_page_service__WEBPACK_IMPORTED_MODULE_1__["NewPageService"], _service_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#size {\n    height: 200px;\n    margin-top: 50px;\n    margin-left: 40px;\n    border: 2px solid orangered;\n    border-radius: 30px;\n} \n\n.section {\n    margin-top: -15px;\n    height: 100%;\n} \n\nmat-toolbar-row {\n   height: 35px;\n\n} \n\ni:hover {\n    cursor: pointer;\n} \n\nbutton {\n    margin-left: 40px;\n    margin-top: 10px;\n} \n\n.squares {\n    display: inline-block;\n    border: 2px solid black; \n    width: 195px; \n    height: 195px; \n    text-align: center; \n    margin: 1%;\n    background-color: #f5f5f5;\n\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <mat-toolbar style=\"height:400px\">\n    <span>\n      <mat-toolbar>\n        <mat-toolbar-row style=\"height: 100%\">\n          <img src=\"{{img}}\" id=\"size\">\n        </mat-toolbar-row>\n        <mat-toolbar-row style=\"height: 100%\">\n          <span style=\"flex: 1 1 auto\"></span>\n          <button type=\"button\">Upload pic</button>\n          <span style=\"flex: 1 1 auto\"></span>\n        </mat-toolbar-row>\n      </mat-toolbar>\n    </span>\n    <span>\n      <mat-toolbar style=\"margin-top: 40px\">\n        <mat-toolbar-row>\n          <h2>{{cUser.fName}} {{cUser.lName}}</h2>\n        </mat-toolbar-row>\n        <mat-toolbar-row>\n          <h3>Username:</h3>\n        </mat-toolbar-row>\n        <mat-toolbar-row>\n          <h4>{{cUser.username}}</h4>\n        </mat-toolbar-row>\n        <mat-toolbar-row>\n          <h3>Password:</h3>\n        </mat-toolbar-row>\n        <mat-toolbar-row *ngIf = \"!editUser\">\n          <h4>123*******</h4>\n          <span style=\"flex: 1 1 auto\"></span>\n          <i class=\"material-icons\" mat-raised-button matTooltip=\"Change Password\" aria-label=\"Button that displays a tooltip when focused or hovered over\" (click)=\"open()\">\n            border_color\n            </i>\n        </mat-toolbar-row>\n        <mat-toolbar-row *ngIf = \"editUser\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput [(ngModel)]=\"newPassword\" placeholder=\"Change Password\" maxlength=\"30\">\n          </mat-form-field>\n        <span style=\"flex: 1 1 auto\"></span>\n        <button type=\"button\" (click)=\"save()\">Save</button>\n        <mat-icon style=\"width:100px; margin-left: 20px; margin-top: 10px; cursor: pointer;\" (click) = \"cancel()\">cancel</mat-icon>\n      </mat-toolbar-row>\n      </mat-toolbar>\n    </span>\n  </mat-toolbar>\n</div>\n<div style=\"background-color: orangered\" class=\"section\">\n  <h2 style=\"background-color: #343a40; color: #f5f5f5;\">Pages Created</h2>\n  <!-- <span><canvas id =\"myCanvas\"></canvas></span> -->\n  <a routerLink=\"/page\" style=\"color: black;\"><div class=\"squares\" *ngFor = \"let p of page\"><h4>{{p.title}}</h4></div></a>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_new_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/new-page.service */ "./src/app/service/new-page.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/admin.service */ "./src/app/service/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, pageService, router, adminService, activatedRoute) {
        this.userService = userService;
        this.pageService = pageService;
        this.router = router;
        this.adminService = adminService;
        this.activatedRoute = activatedRoute;
        this.img = 'assets/pics/profile-placeholder.png';
        this.editUser = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cUser = this.userService.getCurrentUser();
        console.log(this.cUser);
        //If there is no current user, it will take it back to the login page.
        if (!this.cUser) {
            this.router.navigate(['']);
        }
        //If there is no current user, it will take it back to the login page.
        if (!this.cUser) {
            this.router.navigate(['']);
        }
        this.adminService.getAllPages().subscribe(function (data) {
            console.log(data);
            _this.page = data;
            for (var i = 0; i < _this.page.length; i++) {
                console.log(_this.page[i]);
                if (_this.page[i].creatorId == _this.cUser.uId && _this.page[i].pageStatusId == 1) {
                    _this.page.push(_this.page[i]);
                }
            }
        });
    };
    ProfileComponent.prototype.open = function () {
        this.editUser = true;
    };
    //Allows user to cancel process.
    ProfileComponent.prototype.cancel = function () {
        this.editUser = false;
    };
    ProfileComponent.prototype.updateUser = function () {
        console.log(this.newPassword);
        this.editUser = false;
        var password = this.userService.getPassword();
        this.userService.updateInfo(this.cUser.uId, this.cUser.fName, this.cUser.lName, this.cUser.uId, password);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _service_new_page_service__WEBPACK_IMPORTED_MODULE_1__["NewPageService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _service_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 130px;\n    width: 800px;\n    height: 50px; \n    font-size: 20px;\n}\n\n#size {\n    width: 30%;\n    height:30%;\n    margin-left: 493px;\n    margin-top: 80px; \n  }"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background-color: rgba(0,0,0,0)\">\n  <span>\n    <a routerLink=\"/profile\"><button mat-raised-button color=\"warn\">Your Profile</button></a>\n  </span>\n  <span style=\"flex: 1 1 auto\"></span>\n  <span>\n    <a routerLink=\"/create-page\"><button mat-raised-button color=\"warn\" id=\"cp\">Create a page</button></a>\n  </span>\n</mat-toolbar>\n<img src= \"{{img}}\" id = \"size\">\n<input type=\"text\" placeholder=\"search topic...\" style=\"width: 568px; margin-left: 404px;\">\n<div class=\"button-row\">\n  <button mat-raised-button color=\"warn\" style=\"margin-top: 40px; margin-left: 700px;\">Search</button>\n</div>\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(userService) {
        this.userService = userService;
        this.img = 'assets/pics/revature-logo-600x219.png';
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var current = this.userService.getCurrentUser();
        console.log(current);
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/service/admin.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/admin.service.ts ***!
  \******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    //Gets all pages.
    AdminService.prototype.getAllPages = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/get/allpages');
    };
    AdminService.prototype.getSinglePages = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/page/{pageId}');
    };
    AdminService.prototype.getAllUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/get/allusers');
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/service/cognito.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/cognito.service.ts ***!
  \********************************************/
/*! exports provided: CognitoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoService", function() { return CognitoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amazon-cognito-identity-js */ "./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CognitoService = /** @class */ (function () {
    function CognitoService() {
        // Revature Pool and Clent Ids.
        var poolData = {
            UserPoolId: 'us-east-2_eqhVcePBe',
            ClientId: '4ptb0da4skq58fmigvjp65o1k'
        };
        this.userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUserPool"](poolData);
    }
    // Sign in a user attempt.
    CognitoService.prototype.signIn = function (username, password) {
        var userData = {
            Username: username,
            Pool: this.userPool
        };
        var authenticationData = {
            Username: username,
            Password: password
        };
        var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["AuthenticationDetails"](authenticationData);
        var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUser"](userData);
        var resultStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (session) {
                console.log('[LOG] - Cognito login succeeded');
                resultStream.next(session.getIdToken());
            },
            onFailure: function (err) {
                console.log('[ERROR] - Failed to authenticate user');
                resultStream.next(err);
            }
        });
        return resultStream;
    };
    //Register a new user.
    CognitoService.prototype.registerUser = function (username, password, email) {
        console.log('[LOG] - In CognitoService.registerUser()');
        var attributeList = [];
        var emailData = {
            Name: 'email',
            Value: email
        };
        var emailAttribute = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUserAttribute"](emailData);
        attributeList.push(emailAttribute);
        var resultStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.userPool.signUp(username, password, attributeList, null, function (error, result) {
            if (error) {
                resultStream.next(error);
            }
            if (result) {
                resultStream.next(result);
            }
        });
        return resultStream;
    };
    CognitoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CognitoService);
    return CognitoService;
}());



/***/ }),

/***/ "./src/app/service/new-page.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/new-page.service.ts ***!
  \*********************************************/
/*! exports provided: NewPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageService", function() { return NewPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPageService = /** @class */ (function () {
    function NewPageService(http) {
        this.http = http;
    }
    NewPageService_1 = NewPageService;
    //Set the current theme.
    NewPageService.prototype.setTheme = function (t) {
        NewPageService_1.theme = t;
    };
    //Method to store a page's theme.
    NewPageService.prototype.getTheme = function () {
        return NewPageService_1.theme;
    };
    // Method to store a page.
    NewPageService.prototype.setPage = function (page) {
        NewPageService_1.page = page;
    };
    //Method to get current page.
    NewPageService.prototype.getCurrentPage = function () {
        return NewPageService_1.page;
    };
    //Method to create new page.
    NewPageService.prototype.createNewPage = function (creatorId, title, summary, body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/create/page', { creatorId: creatorId, title: title, summary: summary, body: body });
    };
    //Method to update a page.
    NewPageService.prototype.updatePage = function (creatorId, title, summary, body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/edit/page', { creatorId: creatorId, title: title, summary: summary, body: body });
    };
    NewPageService = NewPageService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewPageService);
    return NewPageService;
    var NewPageService_1;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    UserService_1 = UserService;
    //Gets the user information by the username and password. 
    UserService.prototype.getUserByUsername = function (username, password) {
        console.log('[LOG] - In UserService.getUserByUsername()');
        console.log(username);
        console.log(password);
        console.log('LOG - Looking in database.....');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'login/user', { username: username, password: password });
    };
    //Allows a user to sign themeselves up.
    UserService.prototype.register = function (fName, lName, username, password) {
        console.log('[LOG] - In UserService.register()');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'create/user', { fName: fName, lName: lName, username: username, password: password });
    };
    //Updates the user info.
    UserService.prototype.updateInfo = function (fName, lName, username, password, uId) {
        console.log('[LOG] - In UserService.updateInfo()');
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'update/user', { fName: fName, lName: lName, username: username, password: password, uId: uId });
    };
    //Updates the user to an admin.
    UserService.prototype.promoteUser = function (posId) {
        console.log('[LOG] - In UserService.promoteUser()');
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'update/user', { posId: posId });
    };
    //Sets the current user.
    UserService.prototype.setCurrentUser = function (user) {
        UserService_1.currentUser = user;
    };
    //Gets the current user.
    UserService.prototype.getCurrentUser = function () {
        return UserService_1.currentUser;
    };
    //Logout the current user.
    UserService.prototype.logoutUser = function () {
        UserService_1.currentUser = null;
    };
    //Need to store password because they require it on the backend to update user.
    UserService.prototype.storePassword = function (password) {
        UserService_1.password = password;
    };
    //Get that password to use in update user info method.
    UserService.prototype.getPassword = function () {
        return UserService_1.password;
    };
    UserService = UserService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
    var UserService_1;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n    width: 500px;\n    margin-left: auto;\n    margin-right: auto; \n  }\n  \n  .example-container > * {\n    width: 100%;\n  }\n  \n  #size {\n    width: 100%;\n    /* margin-left: 510px;\n    margin-top: 135px; \n    margin-bottom: -29px;  */\n  }\n  \n  .background {\n    height: 100%;\n    width: 100%;\n    margin: 0 auto;\n}\n  \n  label {\n  margin-left: 205px;\n}\n  \n  button {\n  margin-left: 250px;\n}\n  \n  h2 {\n  font-family: 'Share Tech', sans-serif;\n  text-align: center;\n  margin-left: 40px;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <div style=\"width: 390px; margin: 100px auto;\">\n  <img src=\"{{img}}\" id=\"size\">\n  </div>\n  <div class=\"example-container\">\n    <h2>Create an account:</h2>\n    <mat-form-field style=\"width:100%;\">\n      <input matInput placeholder=\"Enter your first name\" [(ngModel)] = \"fName\"> \n    </mat-form-field>\n    <mat-form-field style=\"width:100%;\">\n      <input matInput placeholder=\"Enter your last name\" [(ngModel)] = \"lName\"> \n    </mat-form-field>\n    <mat-form-field style=\"width:100%;\">\n      <input matInput placeholder=\"Enter your email\" [(ngModel)] = \"email\">\n    </mat-form-field>\n    <mat-form-field style=\"width:100%;\">\n      <input matInput placeholder=\"Enter your username\" [(ngModel)] = \"username\">\n    </mat-form-field>\n  \n    <mat-form-field style=\"width:100%;\">\n      <input matInput placeholder=\"Enter your password\" [(ngModel)] = \"password\">\n    </mat-form-field>\n    \n    <mat-form-field style=\"width:100%;\">\n      <input matInput placeholder=\"Confirm your password\" [(ngModel)] = \"cPassword\">\n    </mat-form-field>\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"warn\" (click) = \"registerUser()\">Register</button>\n    </div>\n    <label>Already a user? Login <a routerLink=\"\">here</a>!</label>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/cognito.service */ "./src/app/service/cognito.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(cognito, userService, router) {
        this.cognito = cognito;
        this.userService = userService;
        this.router = router;
        this.img = "assets/pics/revature-logo-600x219.png";
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.username);
        console.log(this.email);
        console.log(this.password);
        //Add user to cognito pool.
        this.cognito.registerUser(this.username, this.password, this.email).subscribe(function (data) {
            console.log(data);
            //Pass to database.
            if (data) {
                alert("You have successfully registered. Please login.");
                _this.router.navigate(['']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_service_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoService"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/view-pages/view-pages.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-pages/view-pages.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-pages/view-pages.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-pages/view-pages.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-navbar></app-admin-navbar>\n<div>\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Title</th>\n      <th scope=\"col\">Tags</th>\n      <th scope=\"col\">Time Submitted</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let p of page\">\n      <th scope=\"row\">{{p.pageId}}</th>\n      <td>{{p.title}}</td>\n      <td>{{p.tags}}</td>\n      <td>{{p.timeSubmission}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/view-pages/view-pages.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-pages/view-pages.component.ts ***!
  \****************************************************/
/*! exports provided: ViewPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPagesComponent", function() { return ViewPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/admin.service */ "./src/app/service/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewPagesComponent = /** @class */ (function () {
    function ViewPagesComponent(userService, adminService) {
        this.userService = userService;
        this.adminService = adminService;
    }
    ViewPagesComponent.prototype.ngOnInit = function () {
        //   this.adminService.getAllPages().subscribe(
        //     (data: any) => {
        //       console.log(data);
        //       this.page = data;
        // }
        //   )
        this.adminService.getAllPages().subscribe(function (data) {
            console.log(data);
        });
    };
    ViewPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-pages',
            template: __webpack_require__(/*! ./view-pages.component.html */ "./src/app/view-pages/view-pages.component.html"),
            styles: [__webpack_require__(/*! ./view-pages.component.css */ "./src/app/view-pages/view-pages.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], ViewPagesComponent);
    return ViewPagesComponent;
}());



/***/ }),

/***/ "./src/app/view-users/view-users.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-users/view-users.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 70%;\n    margin: 0 auto;\n    background-color: rgb(241, 235, 227);\n  }\n\n  div {\n    margin-top: 40px;\n  }\n\n  #pagin {\n    width: 70%;\n    margin: 0 auto;\n    background-color: orangered;\n}"

/***/ }),

/***/ "./src/app/view-users/view-users.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-users/view-users.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-navbar></app-admin-navbar>\n<div>\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Firstname:</th>\n      <th scope=\"col\">Lastname:</th>\n      <th scope=\"col\">Username:</th>\n      <th scope=\"col\">Position:</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let u of user\">\n      <th scope=\"row\">{{u.uId}}</th>\n      <td>{{u.fName}}</td>\n      <td>{{u.lName}}</td>\n      <td>{{u.username}}</td>\n      <td><span *ngIf = \"u.posId == 1\">Admin</span>\n         <span *ngIf = \"u.posId == 2\">User</span>\n    </td>\n    <td>\n        <span *ngIf = \"u.posId == 2\"><button type=\"button\" class=\"btn btn-dark\" (click) = \"promote(u.uId)\">Promote to Admin</button></span>\n    </td>\n    </tr>\n  </tbody>\n</table>\n<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\" id=\"pagin\">\n</mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/view-users/view-users.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-users/view-users.component.ts ***!
  \****************************************************/
/*! exports provided: ViewUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUsersComponent", function() { return ViewUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUsersComponent = /** @class */ (function () {
    function ViewUsersComponent(adminService, userService) {
        this.adminService = adminService;
        this.userService = userService;
    }
    ViewUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllUsers().subscribe(function (data) {
            console.log(data);
            _this.user = data;
        });
    };
    ViewUsersComponent.prototype.promote = function (positionId) {
        var data = {
            uId: positionId,
            posId: 1,
        };
        // Changed method to promote user.
        this.userService.promoteUser(positionId).subscribe(function (stat) {
            alert('Promoted to admin');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ViewUsersComponent.prototype, "paginator", void 0);
    ViewUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-users',
            template: __webpack_require__(/*! ./view-users.component.html */ "./src/app/view-users/view-users.component.html"),
            styles: [__webpack_require__(/*! ./view-users.component.css */ "./src/app/view-users/view-users.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ViewUsersComponent);
    return ViewUsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    envName: "dev",
    apiUrl: 'http://ec2-18-188-229-73.us-east-2.compute.amazonaws.com:8080/',
    context: "http://localhost:4200/swagger-ui.html"
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dralex/my_git_repo/Project2Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map