"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import
// importing Component from core
const core_1 = require("@angular/core");
// Decorator
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        // the element defined in the index.html
        selector: "my-app",
        // Given this configuration, when the browser URL for this application becomes /showHide, 
        // the router matches that URL to the route path /showHide 
        // and displays the ShowHideComponent after a RouterOutlet that you've placed in the host view's HTML.
        template: `
    <navigation-bar></navigation-bar>
    <router-outlet></router-outlet>`
    })
], AppComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map