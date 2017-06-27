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

// bespoke Components
import AppComponent from "./app.component"; 
import NavigationBarComponent from "./navigationBar/navigationBar.component";

import InterpolationComponent from "./interpolation/interpolation.component";
import PropertyBindingComponent from "./propertyBinding/propertyBinding.component";
import EventBindingComponent from "./eventBinding/eventBinding.component";
import TwoWayBindingComponent from "./twoWayBinding/twoWayBinding.component";
import PipesComponent from "./pipes/pipes.component";
import CustomPipesComponent from "./customPipes/customPipes.component"



// routing configuration
const appRoutes: Routes = [
        {path: "interpolation", component: InterpolationComponent},
        {path: "propertyBinding", component: PropertyBindingComponent},
        {path: "eventBinding", component: EventBindingComponent},
        {path: "twoWayBinding", component: TwoWayBindingComponent},
        {path: "pipes", component: PipesComponent}, 
        {path: "customPipes", component: CustomPipesComponent},       
        {path: "", redirectTo: "/showHide", pathMatch: "full"}
];

@NgModule({ 
  // Used For Modules (both Angular and bespoke)
  imports: [ 

    // used for ngIf, ngFor etc
    BrowserModule, 

    // used for routing
    RouterModule.forRoot(appRoutes),

    // used for ngModel and eventbinding or two way binding 
    FormsModule,

    // bespoke module with ParentComponent and ChildComponent
    ShowHideModule,
    TwoWayBindingModule,
    EventBindingModule,
    PropertyBindingModule,
    PipesModule,
    CustomPipesModule,
    InterpolationModule
    ], 

    // Used For Services (both Angular and bespoke)
  providers: [
    {
      provide: LocationStrategy, 
      useClass : HashLocationStrategy 
    }],

  // Used For Components (and Custom Pipes) (both Angular and bespoke)
    declarations: [AppComponent, NavigationBarComponent],

  // our bootstrap is AppComponent
  bootstrap: [AppComponent] 
})

export default class AppModule {
}; 