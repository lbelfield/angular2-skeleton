// Angular Modules and Services
import { NgModule } from "@angular/core";
import { FormsModule }   from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { RouterModule, Routes }   from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

// bespoke Modules
import ShowHideModule from "./showHide/showHide.module";
import TwoWayBindingModule from "./twoWayBinding/twoWayBinding.module";
import EventBindingModule from "./eventBinding/eventBinding.module";
import PropertyBindingModule from "./propertyBinding/propertyBinding.module";
import PipesModule from "./pipes/pipes.module";
import CustomPipesModule from "./customPipes/customPipes.module"
import InterpolationModule from "./interpolation/interpolation.module";

// bespoke Routing Module
import AppRoutesModule from "./app.routes";

// bespoke Components
import AppComponent from "./app.component"; 
import NavigationBarComponent from "./navigationBar/navigationBar.component";

@NgModule({ 
  // Used For Modules (both Angular and bespoke)
  imports: [ 

    // Angular - used for ngIf, ngFor etc
    BrowserModule, 

    // Angular - used for routing
    RouterModule,

    // Angular - used for ngModel and eventbinding or two way binding 
    FormsModule,

    // bespoke module
    ShowHideModule,
    TwoWayBindingModule,
    EventBindingModule,
    PropertyBindingModule,
    PipesModule,
    CustomPipesModule,
    InterpolationModule,

    // bespoke routing module
    AppRoutesModule
    ], 

    // Used For Components (and Custom Pipes) (both Angular and bespoke).
    // As we have already imported the Modules, we don't need to reimport all the Components'
    declarations: [AppComponent, NavigationBarComponent],

  // our bootstrap is AppComponent
  bootstrap: [AppComponent] 
})

export default class AppModule {
}; 