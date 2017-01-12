"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let PropertyBindingComponent = class PropertyBindingComponent {
    constructor() {
        this.imageWidth = 300;
        this.imageMargin = 20;
        this.images = [
            {
                "imageUrl": "http://s0.geograph.org.uk/geophotos/01/98/31/1983152_0a7b3fd7.jpg",
                "imageTitle": "Ham Sandwich Sign Post in Kent"
            },
            {
                "imageUrl": "http://funnyasduck.net/wp-content/uploads/2012/11/funny-angry-kid-bitch-stole-fish-girl-pics.jpg",
                "imageTitle": "Bitch Stole My Fish"
            },
            {
                "imageUrl": "https://s-media-cache-ak0.pinimg.com/736x/f7/08/1e/f7081eb41b1b584aa1eae8be843725e5.jpg",
                "imageTitle": "Daddy"
            }
        ];
    }
};
PropertyBindingComponent = __decorate([
    core_1.Component({
        selector: "my-property-binding.",
        templateUrl: "../../app/propertyBinding/propertyBinding.html"
    })
], PropertyBindingComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PropertyBindingComponent;
//# sourceMappingURL=propertyBinding.component.js.map