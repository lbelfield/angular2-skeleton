import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 

import PipesComponent from "./pipes.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [PipesComponent],
})

export default class PipesModule {
}; 