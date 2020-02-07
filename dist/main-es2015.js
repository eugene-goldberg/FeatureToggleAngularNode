(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Feature Toggle</span>\n  <span class=\"spacer\"></span>\n  <!-- Reload data:\n  <button mat-icon-button (click)=\"refresh()\">\n    <mat-icon>refresh</mat-icon>\n  </button> -->\n</mat-toolbar>\n\n<form class=\"formwidth\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n  <table class=\"fullwidth\" cellspacing=\"10\" >\n      <tr>\n          <td>\n              <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Request ID\" id=\"requestId\" [(ngModel)]=\"model.requestId\" name=\"requestId\">\n              </mat-form-field>\n          </td>\n          <td>\n              <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Application\" id=\"application\" [(ngModel)]=\"model.application\" name=\"application\">\n              </mat-form-field>\n          </td>\n      \n  \n  <p>\n      <mat-form-field class=\"fullwidth\">\n          <input matInput placeholder=\"Component\" id=\"component\" [(ngModel)]=\"model.component\" name=\"component\">\n      </mat-form-field>\n  </p>\n      \n          <td>\n              <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Feature\" id=\"feature\" [(ngModel)]=\"model.feature\" name=\"feature\">\n              </mat-form-field>\n          </td>\n          \n          <td>\n            <mat-checkbox [checked]=model.on>\n            </mat-checkbox>\n          </td>\n\n          <p>\n            <button mat-button type=\"submit\" md-raised-button>Search</button>\n        </p>\n      </tr>\n  </table>\n</form>\n\n<div class=\"container mat-elevation-z8\">\n\n  <!-- <div class=\"form\">\n    <mat-form-field floatPlaceholder=\"never\" color=\"accent\">\n      <input matInput #filter placeholder=\"Filter issues\">\n    </mat-form-field>\n  </div> -->\n\n  <mat-table #table [dataSource]=\"myDs\" matSort class=\"mat-cell\">\n    ng update @angular/cli @angular/core\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"requestId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Request ID</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >{{row.id}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"application\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Application</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.application}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"component\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Component</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.component}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"on\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> On /Off </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox [checked]=row.on>\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    \n\n    <ng-container matColumnDef=\"feature\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Feature</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.feature}}</mat-cell>\n    </ng-container>\n\n\n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row; let i=index;\">\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(i, row.id, row.application, row.component, row.feature, row.on)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i, row.id, row.application, row.component, row.feature, row.on)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialogs/add/add.dialog.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialogs/add/add.dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Add New Feature Toggle</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #input class=\"form-control\" placeholder=\"Request Id\" [(ngModel)]=\"data.id\" name=\"requestId\" >\n        <!-- <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error> -->\n      </mat-form-field>\n    </div>\n\n    <!--Textarea for demo purposes-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Application\" [(ngModel)]=\"data.application\" name=\"application\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <!--Contains mat-hint for characters count and has maxLengt set-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #inputstate class=\"form-control\" placeholder=\"Component\" [(ngModel)]=\"data.component\" name=\"component\" maxlength=\"20\" required >\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        <mat-hint align=\"end\">{{inputstate.value?.length || 0}}/10</mat-hint>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #inputstate class=\"form-control\" placeholder=\"Feature\" [(ngModel)]=\"data.feature\" name=\"feature\" maxlength=\"20\" required >\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        <mat-hint align=\"end\">{{inputstate.value?.length || 0}}/10</mat-hint>\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-checkbox [(ngModel)]=\"data.on\" name=\"on\">\n          On / Off\n      </mat-checkbox >\n    </div>\n\n    <!-- <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput placeholder=\"Url\" [(ngModel)]=\"data.url\" name=\"url\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput placeholder=\"Created at\" [(ngModel)]=\"data.created_at\" name=\"created_at\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput placeholder=\"Updated at\" [(ngModel)]=\"data.updated_at\" name=\"updated_at\">\n      </mat-form-field>\n    </div> -->\n\n    <div mat-dialog-actions>\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialogs/delete/delete.dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialogs/delete/delete.dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Are you sure?</h3>\n  <div mat-dialog-content>\n    Id: {{data.id}}\n    <p></p>\n    Name: {{data.name}}\n    <p></p>\n    State: {{data.state}}\n    <p></p>\n    Url: {{data.url}}\n    <p></p>\n  </div>\n\n  <div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">Delete</button>\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialogs/edit/edit.dialog.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialogs/edit/edit.dialog.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Issue id: {{data.id}}</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #input class=\"form-control\" placeholder=\"Request ID\" [(ngModel)]=\"data.id\" name=\"requestId\" >\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <!--Textarea for demo purposes-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Application\" [(ngModel)]=\"data.application\" name=\"application\"  ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <!--Contains mat-hint for characters count and has maxLengt set-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #inputstate class=\"form-control\" placeholder=\"Component\" [(ngModel)]=\"data.component\" name=\"component\" maxlength=\"10\"  >\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        <mat-hint align=\"end\">{{inputstate.value?.length || 0}}/10</mat-hint>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #inputstate class=\"form-control\" placeholder=\"Feature\" [(ngModel)]=\"data.feature\" name=\"feature\" maxlength=\"10\"  >\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        <mat-hint align=\"end\">{{inputstate.value?.length || 0}}/10</mat-hint>\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-checkbox [(ngModel)]=\"data.on\" name=\"on\">\n          \n      </mat-checkbox >\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button [type]=\"submit\"  [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.container {\n  display: flex;\n  flex-direction: column;\n}\n/* Toolbar */\n.spacer {\n  flex: 1 1 auto;\n}\n/* Filter */\n.form {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n.mat-form-field {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n/* Mat table */\n.no-results {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic;\n}\n.mat-cell:nth-child(1),\n.mat-header-cell:nth-child(1){\n  flex: 0 0 6%;\n}\n.mat-cell:nth-child(2),\n.mat-header-cell:nth-child(2){\n  flex: 0 0 15%;\n}\n.mat-cell:nth-child(3),\n.mat-header-cell:nth-child(3){\n  flex: 0 0 15%;\n}\n.mat-cell:nth-child(7),\n.mat-header-cell:nth-child(7){\n  flex: 0 0 7%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBLFlBQVk7QUFDWjtFQUNFLGNBQWM7QUFDaEI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBUb29sYmFyICovXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qIEZpbHRlciAqL1xuLmZvcm0ge1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXgtaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vKiBNYXQgdGFibGUgKi9cbi5uby1yZXN1bHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDEpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpe1xuICBmbGV4OiAwIDAgMTUlO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyl7XG4gIGZsZXg6IDAgMCAxNSU7XG59XG5cbi5tYXQtY2VsbDpudGgtY2hpbGQoNyksXG4ubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KXtcbiAgZmxleDogMCAwIDclO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/add/add.dialog.component */ "./src/app/dialogs/add/add.dialog.component.ts");
/* harmony import */ var _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogs/edit/edit.dialog.component */ "./src/app/dialogs/edit/edit.dialog.component.ts");
/* harmony import */ var _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");














let AppComponent = class AppComponent {
    constructor(httpClient, dialog, dataService) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.dataService = dataService;
        this.displayedColumns = ['requestId', 'application', 'component', 'feature', 'on', 'actions'];
        this.model = new _models_issue__WEBPACK_IMPORTED_MODULE_7__["Issue"]();
    }
    ngOnInit() {
        // this.loadData();
        this.dataService.getTest().subscribe(data => {
            const ds = data.content;
            this.myDs = data.content; // FILL THE ARRAY WITH DATA.
            console.log(ds);
        }, (err) => {
            console.log(err.message);
        });
    }
    onSubmit() {
        this.dataService.doSearch(this.model)
            .subscribe(data => {
            const ds = JSON.stringify(data[0]);
            this.myDs = data;
            console.log(ds);
        }, (err) => {
            console.log(err.message);
        });
    }
    // refresh() {
    //   this.loadData();
    // }
    addNew(issue) {
        const dialogRef = this.dialog.open(_dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddDialogComponent"], {
            data: { issue: issue }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
                // this.refreshTable();
                this.dataService.getTest().subscribe(data => {
                    const ds = data.content;
                    this.myDs = data.content; // FILL THE ARRAY WITH DATA.
                    console.log(ds);
                }, (err) => {
                    console.log(err.message);
                });
            }
        });
    }
    startEdit(i, id, application, component, feature, on) {
        this.id = id;
        // index row is used just for debugging proposes and can be removed
        this.index = i;
        console.log(this.index);
        const dialogRef = this.dialog.open(_dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["EditDialogComponent"], {
            data: { id: id, application: application, component: component, feature: feature, on: on }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
                // Then you update that record using data from dialogData (values you enetered)
                // this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
                // And lastly refresh table
                // this.refreshTable();
                this.dataService.getTest().subscribe(data => {
                    const ds = data.content;
                    this.myDs = data.content; // FILL THE ARRAY WITH DATA.
                    console.log(ds);
                }, (err) => {
                    console.log(err.message);
                });
            }
        });
    }
    deleteItem(i, id, application, component, feature, on) {
        this.index = i;
        this.id = id;
        const dialogRef = this.dialog.open(_dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DeleteDialogComponent"], {
            data: { id: id, application: application, component: component, on: on }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
            }
        });
    }
    refreshTable() {
        // Refreshing table using paginator
        // Thanks yeager-j for tips
        // https://github.com/marinantonio/angular-mat-table-crud/issues/12
        // this.paginator._changePageSize(this.paginator.pageSize);
    }
    /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
      // OLD METHOD:
      // if there's a paginator active we're using it for refresh
      if (this.dataSource._paginator.hasNextPage()) {
        this.dataSource._paginator.nextPage();
        this.dataSource._paginator.previousPage();
        // in case we're on last page this if will tick
      } else if (this.dataSource._paginator.hasPreviousPage()) {
        this.dataSource._paginator.previousPage();
        this.dataSource._paginator.nextPage();
        // in all other cases including active filter we do it like this
      } else {
        this.dataSource.filter = '';
        this.dataSource.filter = this.filter.nativeElement.value;
      }*/
    loadData() {
        // this.exampleDatabase = new DataService(this.httpClient);
        // this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        // fromEvent(this.filter.nativeElement, 'keyup')
        //   // .debounceTime(150)
        //   // .distinctUntilChanged()
        //   .subscribe(() => {
        //     if (!this.dataSource) {
        //       return;
        //     }
        //     this.dataSource.filter = this.filter.nativeElement.value;
        //   });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
], AppComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
], AppComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AppComponent.prototype, "filter", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], AppComponent);

class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["DataSource"] {
    constructor(_exampleDatabase, _paginator, _sort) {
        super();
        this._exampleDatabase = _exampleDatabase;
        this._paginator = _paginator;
        this._sort = _sort;
        this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"]('');
        this.filteredData = [];
        this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
    }
    get filter() {
        return this._filterChange.value;
    }
    set filter(filter) {
        this._filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];
        this._exampleDatabase.getAllIssues();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(() => {
            // Filter data
            this.filteredData = this._exampleDatabase.data.slice().filter((issue) => {
                const searchStr = (issue.id + issue.application.toLowerCase());
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = '';
            let propertyB = '';
            switch (this._sort.active) {
                case 'requestId':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'title':
                    [propertyA, propertyB] = [a.application, b.application];
                    break;
                case 'state':
                    [propertyA, propertyB] = [a.component, b.component];
                    break;
                case 'url':
                    [propertyA, propertyB] = [a.feature, b.feature];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}
ExampleDataSource.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"] },
    { type: _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"] }
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/add/add.dialog.component */ "./src/app/dialogs/add/add.dialog.component.ts");
/* harmony import */ var _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialogs/edit/edit.dialog.component */ "./src/app/dialogs/edit/edit.dialog.component.ts");
/* harmony import */ var _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AddDialogComponent"],
            _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EditDialogComponent"],
            _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DeleteDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"]
        ],
        entryComponents: [
            _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AddDialogComponent"],
            _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EditDialogComponent"],
            _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DeleteDialogComponent"]
        ],
        exports: [
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"]
        ],
        providers: [
            _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/dialogs/add/add.dialog.component.ts ***!
  \*****************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");






let AddDialogComponent = class AddDialogComponent {
    constructor(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            // Validators.email,
        ]);
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.dataService.addIssue(this.data);
    }
};
AddDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _models_issue__WEBPACK_IMPORTED_MODULE_5__["Issue"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
AddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add.dialog',
        template: __webpack_require__(/*! raw-loader!../../dialogs/add/add.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dialogs/add/add.dialog.html"),
        styles: [__webpack_require__(/*! ../../dialogs/add/add.dialog.css */ "./src/app/dialogs/add/add.dialog.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _models_issue__WEBPACK_IMPORTED_MODULE_5__["Issue"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], AddDialogComponent);



/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.css":
/*!********************************************!*\
  !*** ./src/app/dialogs/add/add.dialog.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9hZGQvYWRkLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9hZGQvYWRkLmRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dialogs/delete/delete.dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.dataService.deleteIssue(this.data.id);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-delete.dialog',
        template: __webpack_require__(/*! raw-loader!../../dialogs/delete/delete.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dialogs/delete/delete.dialog.html"),
        styles: [__webpack_require__(/*! ../../dialogs/delete/delete.dialog.css */ "./src/app/dialogs/delete/delete.dialog.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], DeleteDialogComponent);



/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.css":
/*!**************************************************!*\
  !*** ./src/app/dialogs/delete/delete.dialog.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/edit/edit.dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let EditDialogComponent = class EditDialogComponent {
    constructor(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            // Validators.email,
        ]);
        const myData = data;
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    stopEdit() {
        this.dataService.updateIssue(this.data);
    }
};
EditDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-baza.dialog',
        template: __webpack_require__(/*! raw-loader!../../dialogs/edit/edit.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dialogs/edit/edit.dialog.html"),
        styles: [__webpack_require__(/*! ../../dialogs/edit/edit.dialog.css */ "./src/app/dialogs/edit/edit.dialog.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], EditDialogComponent);



/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.css":
/*!**********************************************!*\
  !*** ./src/app/dialogs/edit/edit.dialog.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9lZGl0L2VkaXQuZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2VkaXQvZWRpdC5kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/models/issue.ts":
/*!*********************************!*\
  !*** ./src/app/models/issue.ts ***!
  \*********************************/
/*! exports provided: Issue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function() { return Issue; });
class Issue {
}


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// tslint:disable-next-line:import-blacklist


let DataService = class DataService {
    // constructor (private httpClient: HttpClient, private _http: Http) {}
    constructor(_http) {
        this._http = _http;
        // This will point to a stand-alone Spring Boot REST endpoint
        // private readonly API_URL = ;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllIssues() {
        // this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
        //     this.dataChange.next(data);
        //   },
        //   (error: HttpErrorResponse) => {
        //   console.log (error.name + ' ' + error.message);
        //   });
    }
    getTest() {
        // console.log('API_URL' + environment.ApiUrl);
        return this._http.get('/api/getall')
            .map((res) => res.json());
    }
    doSearch(issue) {
        this.dialogData = issue;
        const requestId = this.dialogData['requestId'];
        const application = this.dialogData['application'];
        const component = this.dialogData['component'];
        const feature = this.dialogData['feature'];
        const on = this.dialogData['on'] || false;
        const dataObject = { requestId: requestId, application: application, component: component,
            feature: feature, on: on };
        return this._http.post('/api/search', dataObject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((res) => res.json()));
    }
    // solo para demo, el API usado no admite modificaciones salvo que seamos desarrolldores de angular,
    // por lo que los metodos no hacen nada
    addIssue(issue) {
        this.dialogData = issue;
        const requestId = this.dialogData['requestId'];
        const application = this.dialogData['application'];
        const component = this.dialogData['component'];
        const feature = this.dialogData['feature'];
        const on = this.dialogData['on'];
        const dataObject = { requestIond: requestId, application: application, component: component,
            feature: feature, on: on };
        console.log('Issue content:  ' + this.dialogData);
        // console.log(environment.ApiUrl);
        this._http.post('/api/addnew', dataObject).subscribe({
            // next: data => this.postId = data.id,
            error: error => console.error('There was an error!', error)
        });
    }
    updateIssue(issue) {
        this.dialogData = issue;
        const id = this.dialogData['id'];
        const application = this.dialogData['application'];
        const component = this.dialogData['component'];
        const feature = this.dialogData['feature'];
        const on = this.dialogData['on'];
        const dataObject = { id: id, application: application, component: component, feature: feature, on: on };
        // console.log('POST API_URL:   ' + environment.ApiUrl);
        // console.log('Issue content:  ' + this.dialogData);
        this._http.post('/api/addnew', dataObject).subscribe({
            error: error => console.error('There was an error!', error)
        });
    }
    deleteIssue(id) {
        console.log(id);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
], DataService);

/* EJEMPLOS de metodos CRUD reales, atencion, los tipos no corresponden con los utilizados más arriba:

    // Create de [C]rud: ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Añadido con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // Update de cr[U]d UPDATE, PUT METHOD
    updateItem(kanbanItem: KanbanItem): void {
      this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Modificado con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // Delete de cru[D] DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Eliminado con éxito', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Ha ocurrido un error. Los detalles: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    ApiUrl: "http://localhost:8080/example/v1/hotels"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eugene/dev/node/FT/FeatureToggleAngularNode/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map