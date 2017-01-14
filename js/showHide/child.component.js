"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
//OnChanges is a LifeCycle Hook that implements ngOnChanges().
//SimpleChange is the type
let ChildComponent = class ChildComponent {
    // ngOnChanges is a LifeCycle Hook
    ngOnChanges(changes) {
        console.log(changes);
        console.log(typeof (changes));
        //console.log(changes.visible.currentValue);
        //this.savingIndicator = changes.visible.currentValue;
        console.log(changes.savingIndicator.currentValue);
        this.savingIndicator = changes.savingIndicator.currentValue;
    }
};
__decorate([
    core_1.Input()
], ChildComponent.prototype, "savingIndicator", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: "child-component",
        templateUrl: "../../app/showHide/child.html"
    })
], ChildComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChildComponent;
//# sourceMappingURL=child.component.js.map