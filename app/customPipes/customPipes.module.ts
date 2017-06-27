import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 

import CustomPipesComponent from "./customPipes.component";
import ProductFilterCustomPipe from "./productFilterCustomPipe.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CustomPipesComponent, ProductFilterCustomPipe],
})

export default class CustomPipesModule {
}; 