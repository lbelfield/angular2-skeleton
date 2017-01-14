"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// necessary imports
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
// bespoke components
const app_component_1 = require("./app.component");
const navigationBar_component_1 = require("./navigationBar/navigationBar.component");
const parent_component_1 = require("./showHide/parent.component");
const child_component_1 = require("./showHide/child.component");
const interpolation_component_1 = require("./interpolation/interpolation.component");
const propertyBinding_component_1 = require("./propertyBinding/propertyBinding.component");
const eventBinding_component_1 = require("./eventBinding/eventBinding.component");
const twoWayBinding_component_1 = require("./twoWayBinding/twoWayBinding.component");
const pipes_component_1 = require("./pipes/pipes.component");
const customPipes_component_1 = require("./customPipes/customPipes.component");
const customFilter_pipe_1 = require("./customPipes/customFilter.pipe");
// routing configuration
const appRoutes = [
    { path: "showHide", component: parent_component_1.default },
    { path: "interpolation", component: interpolation_component_1.default },
    { path: "propertyBinding", component: propertyBinding_component_1.default },
    { path: "eventBinding", component: eventBinding_component_1.default },
    { path: "twoWayBinding", component: twoWayBinding_component_1.default },
    { path: "pipes", component: pipes_component_1.default },
    { path: "customPipes", component: customPipes_component_1.default },
    { path: '', redirectTo: '/showHide', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        // Imports are angular modules 
        imports: [
            // 
            platform_browser_1.BrowserModule,
            // used for routing
            router_1.RouterModule.forRoot(appRoutes),
            // used for ngModel and eventbinding or two way binding 
            forms_1.FormsModule
        ],
        providers: [
            {
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            }],
        // need to add every component to our declarations
        declarations: [
            app_component_1.default,
            navigationBar_component_1.default,
            parent_component_1.default,
            child_component_1.default,
            interpolation_component_1.default,
            propertyBinding_component_1.default,
            eventBinding_component_1.default,
            twoWayBinding_component_1.default,
            pipes_component_1.default,
            customPipes_component_1.default,
            customFilter_pipe_1.default
        ],
        // our bootstrap is AppComponent
        bootstrap: [app_component_1.default]
    })
], AppModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
;
//# sourceMappingURL=app.module.js.map