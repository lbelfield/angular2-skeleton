// Angular Modules and Services
import { NgModule } from "@angular/core";
import { RouterModule, Routes }   from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import InterpolationComponent from "./interpolation/interpolation.component";
import PropertyBindingComponent from "./propertyBinding/propertyBinding.component";
import EventBindingComponent from "./eventBinding/eventBinding.component";
import TwoWayBindingComponent from "./twoWayBinding/twoWayBinding.component";
import PipesComponent from "./pipes/pipes.component";
import CustomPipesComponent from "./customPipes/customPipes.component";
import ParentComponent from "./showHide/parent.component";

// routing configuration
const appRoutes: Routes = [
        {path: "interpolation", component: InterpolationComponent},
        {path: "propertyBinding", component: PropertyBindingComponent},
        {path: "eventBinding", component: EventBindingComponent},
        {path: "twoWayBinding", component: TwoWayBindingComponent},
        {path: "pipes", component: PipesComponent}, 
        {path: "customPipes", component: CustomPipesComponent},
        {path: "showHide", component: ParentComponent},       
        {path: "", redirectTo: "/showHide", pathMatch: "full"}
];

@NgModule({
  imports: [ 
    // used for routing
    RouterModule.forRoot(appRoutes)
    ], 

    // Used For Services (both Angular and bespoke)
  providers: [
    {
      provide: LocationStrategy, 
      useClass : HashLocationStrategy 
    }],
})

export default class AppRoutesModule {
}; 