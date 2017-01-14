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
var CustomPipesComponent = function CustomPipesComponent() {
    _classCallCheck(this, CustomPipesComponent);

    this.listFilter = "am";
    this.productList = [{
        "productId": 1,
        "productName": "Garden Cart",
        "productCode": "X399A",
        "productPrice": 40.99
    }, {
        "productId": 2,
        "productName": "Hammer",
        "productCode": "X452A",
        "productPrice": 6.99
    }, {
        "productId": 3,
        "productName": "Radiator",
        "productCode": "X498A",
        "productPrice": 150
    }];
};
CustomPipesComponent = __decorate([core_1.Component({
    selector: "my-custom-pipes",
    templateUrl: "../../app/customPipes/customPipes.html"
})], CustomPipesComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomPipesComponent;
//# sourceMappingURL=customPipes.component.js.map