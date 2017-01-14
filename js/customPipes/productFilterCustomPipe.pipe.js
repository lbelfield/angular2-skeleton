"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
//PipeTransform is the Base Class for Pipes. If inheriting, you must implement transform() method
//Pipe is the Decorator to show Angular we are creating a Pipe (rather than a component, service etc)
// Pipe Decorator. In the HTML, we will reference this to use the Pipe.
let ProductFilterCustomPipe = class ProductFilterCustomPipe {
    transform(productList, filterString) {
        // check if the filterString passed in by the user is empty. 
        // If not null, convert to lowercase for a case insensitive comparison
        let filter = filterString[0] ? filterString[0].toLocaleLowerCase() : null;
        return filter ? productList.filter((product) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : productList;
    }
};
ProductFilterCustomPipe = __decorate([
    core_1.Pipe({
        name: "productFilterCustomPipe"
    })
], ProductFilterCustomPipe);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductFilterCustomPipe;
//# sourceMappingURL=productFilterCustomPipe.pipe.js.map