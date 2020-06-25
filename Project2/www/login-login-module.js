(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" class=\"login-form\">\n    \n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n        <!--<img src=\"../assets/img/logo.png\">-->\n        <h1>Orginizd Logo here</h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\" offset=\"1\">\n          <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input \n              type=\"text\" \n              name=\"email\" \n              autofocus=\"true\"\n              ngModel \n              required \n              #emailCtrl=\"ngModel\"\n            ></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" lines=\"none\">\n              <ion-label class=\"error-danger\">Should be a valid email address.</ion-label>\n          </ion-item>\n          <ion-item class=\"margin-top-5\">\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input \n              type=\"password\" \n              name=\"password\"\n              ngModel \n              required\n              #passwordCtrl=\"ngModel\"\n            ></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" lines=\"none\">\n              <ion-label class=\"error-danger\">Should be 6 characters long.</ion-label>\n          </ion-item>\n          <div class=\"forgot-box ion-text-right\">\n            <!--<a class=\"btn-forgot\" routerLink=\"/auth/forgot\">Forgot Password?</a>-->\n          </div>\n          <div class=\"ion-text-center\">\n            <ion-button \n              type=\"submit\" \n              color=\"secondary\" \n              expand=\"block\"\n              [disabled]=\"!f.valid\"\n            >\n                LOGIN\n            </ion-button>            \n          </div>\n          <div class=\"btn-register\">\n            <a routerLink=\"/login/register\" class=\"secondary-item-text\">\n                REGISTER\n            </a>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "common").then(__webpack_require__.bind(null, /*! ./register/register.module */ "./src/app/login/register/register.module.ts")).then(m => m.RegisterPageModule)
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  transform: translate(-50%, -50%);\n}\n.login-form .primary-item {\n  --background: var(--ion-color-primary);\n  --background-focused: var(--ion-color-primary);\n}\n.login-form .secondary-item-text {\n  color: var(--ion-color-primary-contrast);\n}\n.login-form .error-danger {\n  color: var(--ion-color-danger);\n}\n.login-form .btn-register {\n  padding-top: 10px;\n}\n.login-form .margin-top-5 {\n  margin-top: 5px;\n}\n.login-form .forgot-box {\n  padding: 10px 0;\n}\n.login-form .forgot-box .btn-forgot {\n  color: var(--ion-color-primary-contrast);\n}\n@media (prefers-color-scheme: dark) {\n  .login-form .secondary-item-text {\n    color: var(--ion-color-basic-contrast);\n  }\n  .login-form .forgot-box .btn-forgot {\n    color: var(--ion-color-basic-contrast);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXE9uZSBEcml2ZVxcT25lRHJpdmUgLSBCWVUtSWRhaG9cXFNjaG9vbFxcV0REIDMzMFxcV0REMzMwXFxQcm9qZWN0Mi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDQ0g7QURBRztFQUNJLHNDQUFBO0VBQ0EsOENBQUE7QUNFUDtBREFHO0VBQ0ksd0NBQUE7QUNFUDtBREFHO0VBQ0ksOEJBQUE7QUNFUDtBREFHO0VBQ0ksaUJBQUE7QUNFUDtBREFHO0VBQ0ksZUFBQTtBQ0VQO0FEQUc7RUFDSSxlQUFBO0FDRVA7QURETztFQUNJLHdDQUFBO0FDR1g7QURFQTtFQUVPO0lBQ0ksc0NBQUE7RUNBVDtFREdTO0lBQ0ksc0NBQUE7RUNEYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm17XHJcbiAgIHRvcDogNTAlO1xyXG4gICBsZWZ0OiA1MCU7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIC5wcmltYXJ5LWl0ZW17XHJcbiAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgIH1cclxuICAgLnNlY29uZGFyeS1pdGVtLXRleHR7XHJcbiAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICB9XHJcbiAgIC5lcnJvci1kYW5nZXJ7XHJcbiAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgIH1cclxuICAgLmJ0bi1yZWdpc3RlcntcclxuICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICB9XHJcbiAgIC5tYXJnaW4tdG9wLTV7XHJcbiAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgIH1cclxuICAgLmZvcmdvdC1ib3h7XHJcbiAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAuYnRuLWZvcmdvdHtcclxuICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgLmxvZ2luLWZvcm17XHJcbiAgICAgICAuc2Vjb25kYXJ5LWl0ZW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2ljLWNvbnRyYXN0KTtcclxuICAgICAgIH1cclxuICAgICAgIC5mb3Jnb3QtYm94e1xyXG4gICAgICAgICAgIC5idG4tZm9yZ290e1xyXG4gICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2ljLWNvbnRyYXN0KTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH1cclxufSIsIi5sb2dpbi1mb3JtIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5sb2dpbi1mb3JtIC5wcmltYXJ5LWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5sb2dpbi1mb3JtIC5zZWNvbmRhcnktaXRlbS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cbi5sb2dpbi1mb3JtIC5lcnJvci1kYW5nZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG4ubG9naW4tZm9ybSAuYnRuLXJlZ2lzdGVyIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ubG9naW4tZm9ybSAubWFyZ2luLXRvcC01IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmxvZ2luLWZvcm0gLmZvcmdvdC1ib3gge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ubG9naW4tZm9ybSAuZm9yZ290LWJveCAuYnRuLWZvcmdvdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLmxvZ2luLWZvcm0gLnNlY29uZGFyeS1pdGVtLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmFzaWMtY29udHJhc3QpO1xuICB9XG4gIC5sb2dpbi1mb3JtIC5mb3Jnb3QtYm94IC5idG4tZm9yZ290IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJhc2ljLWNvbnRyYXN0KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication-service.service */ "./src/app/services/authentication-service.service.ts");






let LoginPage = class LoginPage {
    constructor(authenticationService, router, loadingCtrl, alertCtrl) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/mileage-tracker']);
        }
    }
    ngOnInit() {
    }
    authenticate(email, password) {
        this.isLoading = true;
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            loadingEl.present();
            this.authenticationService.login(email, password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(resData => {
                loadingEl.dismiss();
                document.location.href = '/mileage-tracker';
            }, errRes => {
                loadingEl.dismiss();
                const message = 'Authentication Failed.';
                this.showAlert(message);
            });
        });
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Authentication failed',
            message,
            buttons: ['Okay']
        })
            .then(alertEl => alertEl.present());
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        this.authenticate(email, password);
        form.reset();
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map