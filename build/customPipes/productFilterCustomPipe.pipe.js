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
//PipeTransform is the Base Class for Pipes. If inheriting, you must implement transform() method
//Pipe is the Decorator to show Angular we are creating a Pipe (rather than a component, service etc)
// Pipe Decorator. In the HTML, we will reference this to use the Pipe.
var ProductFilterCustomPipe = function () {
    function ProductFilterCustomPipe() {
        _classCallCheck(this, ProductFilterCustomPipe);
    }

    _createClass(ProductFilterCustomPipe, [{
        key: "transform",
        value: function transform(productList, filterString) {
            // check if the filterString passed in by the user is empty. 
            // If not null, convert to lowercase for a case insensitive comparison
            var filter = filterString ? filterString.toLocaleLowerCase() : null;
            return filter ? productList.filter(function (product) {
                return product.productName.toLocaleLowerCase().indexOf(filter) !== -1;
            }) : productList;
        }
    }]);

    return ProductFilterCustomPipe;
}();
ProductFilterCustomPipe = __decorate([core_1.Pipe({
    name: "productFilterCustomPipe"
})], ProductFilterCustomPipe);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductFilterCustomPipe;
//# sourceMappingURL=productFilterCustomPipe.pipe.js.map