"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Modules and Services
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
// bespoke Modules
var showHide_module_1 = require("./showHide/showHide.module");
// bespoke Components
var app_component_1 = require("./app.component");
var navigationBar_component_1 = require("./navigationBar/navigationBar.component");
var interpolation_component_1 = require("./interpolation/interpolation.component");
var propertyBinding_component_1 = require("./propertyBinding/propertyBinding.component");
var eventBinding_component_1 = require("./eventBinding/eventBinding.component");
var twoWayBinding_component_1 = require("./twoWayBinding/twoWayBinding.component");
var pipes_component_1 = require("./pipes/pipes.component");
var customPipes_component_1 = require("./customPipes/customPipes.component");
var productFilterCustomPipe_pipe_1 = require("./customPipes/productFilterCustomPipe.pipe");
// routing configuration
var appRoutes = [{ path: "interpolation", component: interpolation_component_1.default }, { path: "propertyBinding", component: propertyBinding_component_1.default }, { path: "eventBinding", component: eventBinding_component_1.default }, { path: "twoWayBinding", component: twoWayBinding_component_1.default }, { path: "pipes", component: pipes_component_1.default }, { path: "customPipes", component: customPipes_component_1.default }, { path: "", redirectTo: "/showHide", pathMatch: "full" }];
var AppModule = function AppModule() {
    _classCallCheck(this, AppModule);
};
AppModule = __decorate([core_1.NgModule({
    // Used For Modules (both Angular and bespoke)
    imports: [
    // used for ngIf, ngFor etc
    platform_browser_1.BrowserModule,
    // used for routing
    router_1.RouterModule.forRoot(appRoutes),
    // used for ngModel and eventbinding or two way binding 
    forms_1.FormsModule,
    // bespoke module with ParentComponent and ChildComponent
    showHide_module_1.default],
    // Used For Services (both Angular and bespoke)
    providers: [{
        provide: common_1.LocationStrategy,
        useClass: common_1.HashLocationStrategy
    }],
    // Used For Components (and Custom Pipes) (both Angular and bespoke)
    declarations: [app_component_1.default, navigationBar_component_1.default, interpolation_component_1.default, propertyBinding_component_1.default, eventBinding_component_1.default, twoWayBinding_component_1.default, pipes_component_1.default, customPipes_component_1.default, productFilterCustomPipe_pipe_1.default],
    // our bootstrap is AppComponent
    bootstrap: [app_component_1.default]
})], AppModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
;
//# sourceMappingURL=app.module.js.map