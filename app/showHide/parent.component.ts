import { Component } from "@angular/core";
import ChildComponent from "./child.component"

@Component({
    selector: "parent-component",
    templateUrl: "../../app/showHide/parent.html"
})

export default class ParentComponent {
    public childVisible: boolean;
    public childToggleHelloWorldString: string;

    public constructor() {
        this.childVisible = true;
        this.childToggleHelloWorldString = "start";
    }

    public showChild(): void {
        this.childVisible = true;
        this.childToggleHelloWorldString = "hello";
    }

    public hideChild(): void {
        this.childVisible = false;
        this.childToggleHelloWorldString = "world";
    }
}
