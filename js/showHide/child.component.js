"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
//Input tells angular that this is a Child and that a parent will make use of this field
//OnChanges is a LifeCycle Hook that implements a method: ngOnChanges().
//SimpleChange is the type which monitors any changes. There are two fields: currentValue and previousValue
let ChildComponent = class ChildComponent {
    ////comment out for toggleHelloWorldString
    //@Input() toggleHelloWorldString: string;
    ngOnChanges(changes) {
        console.log(changes);
        //propName will be either visible or toggleHelloWorldString depending on which is commented out
        for (let propName in changes) {
            let changedProp = changes[propName];
            console.log(changedProp.currentValue);
            this.visible = changedProp.currentValue;
        }
    }
};
__decorate([
    core_1.Input()
], ChildComponent.prototype, "visible", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: "child-component",
        templateUrl: "../../app/showHide/child.html"
    })
], ChildComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChildComponent;
//# sourceMappingURL=child.component.js.map