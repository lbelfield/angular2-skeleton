"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
//OnChanges is a LifeCycle Hook that implements ngOnChanges().
//SimpleChange is the type
var ChildComponent = function () {
    function ChildComponent() {
        _classCallCheck(this, ChildComponent);
    }

    _createClass(ChildComponent, [{
        key: "ngOnChanges",

        // ngOnChanges is a LifeCycle Hook
        value: function ngOnChanges(changes) {
            console.log(changes);
            console.log(typeof changes === "undefined" ? "undefined" : _typeof(changes));
            //console.log(changes.visible.currentValue);
            //this.savingIndicator = changes.visible.currentValue;
            console.log(changes.savingIndicator.currentValue);
            this.savingIndicator = changes.savingIndicator.currentValue;
        }
    }]);

    return ChildComponent;
}();
__decorate([core_1.Input()], ChildComponent.prototype, "savingIndicator", void 0);
ChildComponent = __decorate([core_1.Component({
    selector: "child-component",
    templateUrl: "../../app/showHide/child.html"
})], ChildComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChildComponent;
//# sourceMappingURL=child.component.js.map