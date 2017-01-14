import {Component} from "@angular/core";

@Component({
    selector: "my-pipes",
    templateUrl: "../../app/pipes/pipes.html"
})

export default class PipesComponent {
    private float: number;
    private currency: number;
    private uppercase: string;
    private date: string;
} 