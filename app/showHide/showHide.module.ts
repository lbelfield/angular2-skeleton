import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; 
import { RouterModule, Routes }   from '@angular/router';
//import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import ParentComponent from "./parent.component";
import ChildComponent from "./child.component";

const appRoutes: Routes = [
    {path: "showHide", component: ParentComponent}
]

@NgModule({ 
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  //providers: [{provide: LocationStrategy, useClass : HashLocationStrategy}],
  declarations: [ParentComponent, ChildComponent],
})

export default class ShowHideModule{
}; 