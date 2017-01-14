import { Component, Input, OnChanges, SimpleChange } from "@angular/core";
//Input tells angular that this is a Child and that a parent will make use of this field
//OnChanges is a LifeCycle Hook that implements a method: ngOnChanges().
//SimpleChange is the type which monitors any changes. There are two fields: currentValue and previousValue

@Component({
    selector: "child-component",
    templateUrl: "../../app/showHide/child.html"
})

export default class ChildComponent {

    //// comment out for visible
    @Input() visible: boolean;

    ////comment out for toggleHelloWorldString
    //@Input() toggleHelloWorldString: string;

    public ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        console.log(changes);

        //propName will be either visible or toggleHelloWorldString depending on which is commented out
        for (let propName in changes) {
            let changedProp = changes[propName];

            console.log(changedProp.currentValue);
            this.visible = changedProp.currentValue;
            //this.toggleHelloWorldString = changedProp.currentValue;
        }
    }



    // // ngOnChanges is a LifeCycle Hook
    // public ngOnChanges(changes: any) {
    //     console.log(changes);

    //     //console.log(changes.visible.currentValue);
    //     //this.toggleHelloWorldString = changes.visible.currentValue;

    //     console.log(changes.toggleHelloWorldString.currentValue);
    //     this.toggleHelloWorldString = changes.toggleHelloWorldString.currentValue;
    // }

}
