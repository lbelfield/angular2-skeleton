import { Component } from "@angular/core";
import ChildComponent from "./child.component"

@Component({
    selector: "parent-component",
    templateUrl: "../../app/showHide/parent.html"
})

export default class ParentComponent {
    public childVisible: boolean;
    public childSavingIndicator: string;

    public constructor() {
        this.childVisible = true;
        this.childSavingIndicator = "start";
    }

    public showChild(): void {
        this.childVisible = true;
        this.childSavingIndicator = "hello";
    }

    public hideChild(): void {
        this.childVisible = false;
        this.childSavingIndicator = "world";
    }
}
