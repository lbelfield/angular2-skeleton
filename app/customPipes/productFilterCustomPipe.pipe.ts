import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./IProduct";

//PipeTransform is the Base Class for Pipes. If inheriting, you must implement transform() method
//Pipe is the Decorator to show Angular we are creating a Pipe (rather than a component, service etc)

// Pipe Decorator. In the HTML, we will reference this to use the Pipe.
@Pipe({
    name: "productFilterCustomPipe"
})

export default class ProductFilterCustomPipe implements PipeTransform {

    public transform(productList: IProduct[], filterString: string[]): IProduct[] {

        // check if the filterString passed in by the user is empty. 
        // If not null, convert to lowercase for a case insensitive comparison
        let filter: string = filterString[0] ? filterString[0].toLocaleLowerCase() : null;

        return filter ? productList.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : productList
    }
}