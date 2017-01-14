"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Modules and Services
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
// bespoke Modules
const showHide_module_1 = require("./showHide/showHide.module");
// bespoke Components
const app_component_1 = require("./app.component");
const navigationBar_component_1 = require("./navigationBar/navigationBar.component");
const interpolation_component_1 = require("./interpolation/interpolation.component");
const propertyBinding_component_1 = require("./propertyBinding/propertyBinding.component");
const eventBinding_component_1 = require("./eventBinding/eventBinding.component");
const twoWayBinding_component_1 = require("./twoWayBinding/twoWayBinding.component");
const pipes_component_1 = require("./pipes/pipes.component");
const customPipes_component_1 = require("./customPipes/customPipes.component");
const productFilterCustomPipe_pipe_1 = require("./customPipes/productFilterCustomPipe.pipe");
// routing configuration
const appRoutes = [
    { path: "interpolation", component: interpolation_component_1.default },
    { path: "propertyBinding", component: propertyBinding_component_1.default },
    { path: "eventBinding", component: eventBinding_component_1.default },
    { path: "twoWayBinding", component: twoWayBinding_component_1.default },
    { path: "pipes", component: pipes_component_1.default },
    { path: "customPipes", component: customPipes_component_1.default },
    { path: "", redirectTo: "/showHide", pathMatch: "full" }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        // Used For Modules (both Angular and bespoke)
        imports: [
            // used for ngIf, ngFor etc
            platform_browser_1.BrowserModule,
            // used for routing
            router_1.RouterModule.forRoot(appRoutes),
            // used for ngModel and eventbinding or two way binding 
            forms_1.FormsModule,
            // bespoke module with ParentComponent and ChildComponent
            showHide_module_1.default
        ],
        // Used For Services (both Angular and bespoke)
        providers: [
            {
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            }],
        // Used For Components (and Custom Pipes) (both Angular and bespoke)
        declarations: [
            app_component_1.default,
            navigationBar_component_1.default,
            interpolation_component_1.default,
            propertyBinding_component_1.default,
            eventBinding_component_1.default,
            twoWayBinding_component_1.default,
            pipes_component_1.default,
            customPipes_component_1.default,
            productFilterCustomPipe_pipe_1.default
        ],
        // our bootstrap is AppComponent
        bootstrap: [app_component_1.default]
    })
], AppModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
;
//# sourceMappingURL=app.module.js.map