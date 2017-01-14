import {Component} from "@angular/core";
import {IImages} from "./IImages";

@Component({
    selector: "my-property-binding.",
    templateUrl: "../../app/propertyBinding/propertyBinding.html"
})

export default class PropertyBindingComponent {

    private imageWidth: number = 300;
    private imageMargin: number = 20;

    private images: IImages[] = [
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
    ]
} 