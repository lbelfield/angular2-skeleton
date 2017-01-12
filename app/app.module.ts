// necessary imports
import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { RouterModule, Routes }   from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

// bespoke components
import AppComponent from "./app.component"; 
import NavigationBarComponent from "./navigationBar/navigationBar.component";
import ShowHideComponent from "./showHide/showHide.component";
import WadupComponent from "./wadup/wadup.component";
import InterpolationComponent from "./interpolation/interpolation.component";
import PropertyBindingComponent from "./propertyBinding/propertyBinding.component";
import EventBindingComponent from "./eventBinding/eventBinding.component";

// routing configuration
const appRoutes: Routes = [
        {path: "showHide", component: ShowHideComponent},
        {path: "wadup", component: WadupComponent},
        {path: "interpolation", component: InterpolationComponent},
        {path: "propertyBinding", component: PropertyBindingComponent},
        {path: "eventBinding", component: EventBindingComponent},
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
    ShowHideComponent, 
    WadupComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent
    ],

  // our bootstrap is AppComponent
  bootstrap: [AppComponent] 
})

export default class AppModule{}; 