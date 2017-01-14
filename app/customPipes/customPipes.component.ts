import {Component} from "@angular/core";
import {IProduct} from "./IProduct";
import ProductFilterCustomPipe from "./customFilter.pipe";

@Component({
    selector: "my-custom-pipes",
    templateUrl: "../../app/customPipes/customPipes.html"
})

export default class CustomPipesComponent {

    private listFilter: string = "am";
    private productList: IProduct[]= [
    {
        "productId" : 1,
        "productName" : "Garden Cart",
        "productCode": "X399A",
        "productPrice": 40.99
    },
    {
        "productId" : 2,
        "productName" : "Hammer",
        "productCode": "X452A",        
        "productPrice": 6.99,
    },
    {
        "productId" : 3,
        "productName" : "Radiator",
        "productCode": "X498A",
        "productPrice": 150,
    }];
}