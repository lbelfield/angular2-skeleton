import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./IProduct";

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