import {Component} from "@angular/core";

@Component({
    selector: "my-showHide",
    templateUrl: "../../app/showHide/showHide.html"
})

export default class ShowHideComponent {
    public childVisible: boolean;
    public childSavingIndicator: string;

    public constructor() {
        this.childVisible = true;
        this.childSavingIndicator = "start";
    }

    public showChild():void {
        this.childVisible = true;
        this.childSavingIndicator = "hello";
    }

    public hideChild():void {
        this.childVisible = false;
        this.childSavingIndicator = "world";
    }
} 