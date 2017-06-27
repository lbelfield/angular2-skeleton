import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 

import InterpolationComponent from "./interpolation.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [InterpolationComponent],
})

export default class InterpolationModule {
}; 