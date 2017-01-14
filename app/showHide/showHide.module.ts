import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; 
import { RouterModule, Routes }   from '@angular/router';

import ParentComponent from "./parent.component";
import ChildComponent from "./child.component";

const appRoutes: Routes = [
    {path: "showHide", component: ParentComponent}
]

@NgModule({
    // Imports = Modules. BrowserModule needed for ngIf. RouterModule needed for routing
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ParentComponent, ChildComponent],
})

export default class ShowHideModule{
}; 