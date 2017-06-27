import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 

import PropertyBindingComponent from "./propertyBinding.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [PropertyBindingComponent],
})

export default class PropertyBindingModule {
}; 