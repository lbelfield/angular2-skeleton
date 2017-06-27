import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 

import TwoWayBindingComponent from "./twoWayBinding.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [TwoWayBindingComponent],
})

export default class TwoWayBindingModule {
}; 