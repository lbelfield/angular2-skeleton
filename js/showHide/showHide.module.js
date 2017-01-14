"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require('@angular/router');
const parent_component_1 = require("./parent.component");
const child_component_1 = require("./child.component");
const appRoutes = [
    { path: "showHide", component: parent_component_1.default }
];
let ShowHideModule = class ShowHideModule {
};
ShowHideModule = __decorate([
    core_1.NgModule({
        // Imports = Modules. BrowserModule needed for ngIf. RouterModule needed for routing
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [parent_component_1.default, child_component_1.default],
    })
], ShowHideModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShowHideModule;
;
//# sourceMappingURL=showHide.module.js.map