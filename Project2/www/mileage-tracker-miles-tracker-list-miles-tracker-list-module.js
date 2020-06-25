(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mileage-tracker-miles-tracker-list-miles-tracker-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center \">Mileage Tracker</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n  <h1 class=\"ion-text-center capitalize\">{{ time }}</h1>\n  <p class=\"ion-text-center\">A total of records you have entered for {{ time }}.</p>\n  <div >\n  <ion-grid fixed>\n    <ion-list>\n      <ion-row class=\"ion-text-center\">\n        <ion-item-divider>\n          <ion-col >\n            <ion-label>DATE</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>FROM</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>TO</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>MILES</ion-label>\n          </ion-col>\n        </ion-item-divider>\n      </ion-row>\n      <ion-row class=\"nowrap ion-align-items-end\">\n        <ion-col class=\"gridContainer\">\n          <ion-item *ngFor=\"let trip of trips\" class=\"numberTXT\">\n            {{ trip.Date | date: 'MM/dd/yy' }}\n          </ion-item>\n        </ion-col>\n        <ion-col class=\"gridContainer\">\n          <ion-item *ngFor=\"let trip of trips\" >\n            {{ trip.Beginning }} \n          </ion-item>\n        </ion-col>\n        <ion-col class=\"gridContainer\">\n          <ion-item *ngFor=\"let trip of trips\" >\n            {{ trip.Ending }} \n          </ion-item>\n        </ion-col>\n        <ion-col class=\"gridContainer\">\n          <ion-item *ngFor=\"let trip of trips\" class=\"numberTXT\">\n            {{ trip.total }} \n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MilesTrackerListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilesTrackerListPageRoutingModule", function() { return MilesTrackerListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _miles_tracker_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miles-tracker-list.page */ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.ts");




const routes = [
    {
        path: '',
        component: _miles_tracker_list_page__WEBPACK_IMPORTED_MODULE_3__["MilesTrackerListPage"]
    }
];
let MilesTrackerListPageRoutingModule = class MilesTrackerListPageRoutingModule {
};
MilesTrackerListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MilesTrackerListPageRoutingModule);



/***/ }),

/***/ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MilesTrackerListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilesTrackerListPageModule", function() { return MilesTrackerListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _miles_tracker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miles-tracker-list-routing.module */ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list-routing.module.ts");
/* harmony import */ var _miles_tracker_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miles-tracker-list.page */ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.ts");







let MilesTrackerListPageModule = class MilesTrackerListPageModule {
};
MilesTrackerListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _miles_tracker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MilesTrackerListPageRoutingModule"]
        ],
        declarations: [_miles_tracker_list_page__WEBPACK_IMPORTED_MODULE_6__["MilesTrackerListPage"]]
    })
], MilesTrackerListPageModule);



/***/ }),

/***/ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".capitalize {\n  text-transform: uppercase;\n}\n\n.gridContainer {\n  max-width: 25%;\n}\n\nion-item {\n  white-space: wrap;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlsZWFnZS10cmFja2VyL21pbGVzLXRyYWNrZXItbGlzdC9EOlxcT25lIERyaXZlXFxPbmVEcml2ZSAtIEJZVS1JZGFob1xcU2Nob29sXFxXREQgMzMwXFxXREQzMzBcXFByb2plY3QyL3NyY1xcYXBwXFxtaWxlYWdlLXRyYWNrZXJcXG1pbGVzLXRyYWNrZXItbGlzdFxcbWlsZXMtdHJhY2tlci1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWlsZWFnZS10cmFja2VyL21pbGVzLXRyYWNrZXItbGlzdC9taWxlcy10cmFja2VyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0cseUJBQUE7QUNDSDs7QURFQTtFQUNHLGNBQUE7QUNDSDs7QURFQTtFQUNHLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvbWlsZWFnZS10cmFja2VyL21pbGVzLXRyYWNrZXItbGlzdC9taWxlcy10cmFja2VyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcGl0YWxpemUge1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZ3JpZENvbnRhaW5lciB7XHJcbiAgIG1heC13aWR0aDogMjUlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgIHdoaXRlLXNwYWNlOiB3cmFwO1xyXG4gICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gICBvdmVyZmxvdzogaW5oZXJpdDtcclxufSIsIi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmdyaWRDb250YWluZXIge1xuICBtYXgtd2lkdGg6IDI1JTtcbn1cblxuaW9uLWl0ZW0ge1xuICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: MilesTrackerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilesTrackerListPage", function() { return MilesTrackerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_miles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/miles.service */ "./src/app/services/miles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let MilesTrackerListPage = class MilesTrackerListPage {
    constructor(milesService, loadingCtrl, alertCtrl, route) {
        this.milesService = milesService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.isLoading = false;
    }
    ngOnInit() {
        //this.milesService.currentTrips.subscribe(response => this.trips = response);
        //this.trips = this.milesService.currentTripsValue;
        const userId = this.route.snapshot.queryParams.userId;
        const date = this.route.snapshot.queryParams.date;
        this.time = this.route.snapshot.queryParams.time;
        this.getTrips(userId, date);
    }
    getTrips(userID, date) {
        this.isLoading = true;
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Getting Trips...' })
            .then(loadingEl => {
            loadingEl.present();
            this.milesService.getTrips(userID, date)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(resData => {
                this.trips = resData;
                loadingEl.dismiss();
                //document.location.href = '/mileage-tracker/miles-tracker-list';
            }, errRes => {
                loadingEl.dismiss();
                const message = 'No Trips Found.';
                this.showAlert(message);
            });
        });
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Finding Trips failed',
            message,
            buttons: ['Okay']
        })
            .then(alertEl => alertEl.present());
    }
};
MilesTrackerListPage.ctorParameters = () => [
    { type: src_app_services_miles_service__WEBPACK_IMPORTED_MODULE_4__["MilesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
MilesTrackerListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-miles-tracker-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./miles-tracker-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./miles-tracker-list.page.scss */ "./src/app/mileage-tracker/miles-tracker-list/miles-tracker-list.page.scss")).default]
    })
], MilesTrackerListPage);



/***/ })

}]);
//# sourceMappingURL=mileage-tracker-miles-tracker-list-miles-tracker-list-module.js.map