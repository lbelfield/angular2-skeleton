"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// necessary imports
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
// bespoke components
const app_component_1 = require("./app.component");
const navigationBar_component_1 = require("./navigationBar/navigationBar.component");
const showHide_component_1 = require("./showHide/showHide.component");
const wadup_component_1 = require("./wadup/wadup.component");
const appRoutes = [
    { path: "showHide", component: showHide_component_1.default },
    { path: "wadup", component: wadup_component_1.default },
    { path: '', redirectTo: '/showHide', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        //need to add every component to our declarations
        declarations: [app_component_1.default, navigationBar_component_1.default, showHide_component_1.default, wadup_component_1.default],
        // our bootstrap is AppComponent
        bootstrap: [app_component_1.default]
    })
], AppModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
;
//# sourceMappingURL=app.module.js.map