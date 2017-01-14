import { Component, Input, OnChanges, SimpleChange } from "@angular/core";
//OnChanges is a LifeCycle Hook that implements ngOnChanges().
//SimpleChange is the type

@Component({
    selector: "child-component",
    templateUrl: "../../app/showHide/child.html"
})

export default class ChildComponent {

    // @Input() visible: boolean;
    @Input() savingIndicator: string;

    // ngOnChanges is a LifeCycle Hook
    public ngOnChanges(changes: any) {
        console.log(changes);

        //console.log(changes.visible.currentValue);
        //this.savingIndicator = changes.visible.currentValue;

        console.log(changes.savingIndicator.currentValue);
        this.savingIndicator = changes.savingIndicator.currentValue;
    }
}
