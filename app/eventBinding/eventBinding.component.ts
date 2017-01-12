import {Component} from "@angular/core";

@Component({
    selector: "my-event-binding",
    templateUrl: "../../app/eventBinding/eventBinding.html"
})

export default class EventBindingComponent {
    private showLabel: boolean = false;

    private toggleLabel(): void {
        this.showLabel = !this.showLabel;
    }
} 