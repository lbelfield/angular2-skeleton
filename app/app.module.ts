// necessary imports
import { NgModule } from "@angular/core";
import { FormsModule }   from "@angular/forms"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { RouterModule, Routes }   from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

// bespoke components
import AppComponent from "./app.component"; 
import NavigationBarComponent from "./navigationBar/navigationBar.component";
import ParentComponent from "./showHide/parent.component";
import ChildComponent from "./showHide/child.component";
import InterpolationComponent from "./interpolation/interpolation.component";
import PropertyBindingComponent from "./propertyBinding/propertyBinding.component";
import EventBindingComponent from "./eventBinding/eventBinding.component";
import TwoWayBindingComponent from "./twoWayBinding/twoWayBinding.component";
import PipesComponent from "./pipes/pipes.component";
import CustomPipesComponent from "./customPipes/customPipes.component"
import ProductFilterCustomPipe from "./customPipes/customFilter.pipe";


// routing configuration
const appRoutes: Routes = [
        {path: "showHide", component: ParentComponent},
        {path: "interpolation", component: InterpolationComponent},
        {path: "propertyBinding", component: PropertyBindingComponent},
        {path: "eventBinding", component: EventBindingComponent},
        {path: "twoWayBinding", component: TwoWayBindingComponent},
        {path: "pipes", component: PipesComponent}, 
        {path: "customPipes", component: CustomPipesComponent},       
        {path: '', redirectTo: '/showHide', pathMatch: 'full'}
];

@NgModule({ 
  // Imports are angular modules 
  imports: [ 

    // 
    BrowserModule, 

    // used for routing
    RouterModule.forRoot(appRoutes),

    // used for ngModel and eventbinding or two way binding 
    FormsModule
    ], 

  providers: [
    {
      provide: LocationStrategy, 
      useClass : HashLocationStrategy 
    }],

  // need to add every component to our declarations
  declarations: [ 
    AppComponent, 
    NavigationBarComponent, 
    ParentComponent,
    ChildComponent, 
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesComponent, 
    CustomPipesComponent,
    ProductFilterCustomPipe
    ],

  // our bootstrap is AppComponent
  bootstrap: [AppComponent] 
})

export default class AppModule{}; 