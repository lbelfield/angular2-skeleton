import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; 

import ParentComponent from "./parent.component";
import ChildComponent from "./child.component";

@NgModule({
    // Imports = Modules. BrowserModule needed for ngIf.
    imports: [BrowserModule],
    declarations: [ParentComponent, ChildComponent],
})

export default class ShowHideModule{
}; 