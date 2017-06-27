import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 

import EventBindingComponent from "./eventBinding.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [EventBindingComponent],
})

export default class EventBindingModule {
}; 