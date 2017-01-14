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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require('@angular/router');
var parent_component_1 = require("./parent.component");
var child_component_1 = require("./child.component");
var appRoutes = [{ path: "showHide", component: parent_component_1.default }];
var ShowHideModule = function ShowHideModule() {
    _classCallCheck(this, ShowHideModule);
};
ShowHideModule = __decorate([core_1.NgModule({
    // Imports = Modules. BrowserModule needed for ngIf. RouterModule needed for routing
    imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
    declarations: [parent_component_1.default, child_component_1.default]
})], ShowHideModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShowHideModule;
;
//# sourceMappingURL=showHide.module.js.map