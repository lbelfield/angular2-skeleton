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


const appRoutes: Routes = [
        {path: "showHide", component: ShowHideComponent},
        {path: "wadup", component: WadupComponent},
        {path: '', redirectTo: '/showHide', pathMatch: 'full'}
];

@NgModule({ 
  imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ], 
  providers: [{provide: LocationStrategy, useClass : HashLocationStrategy }],

  //need to add every component to our declarations
  declarations: [ AppComponent, NavigationBarComponent, ShowHideComponent, WadupComponent ],

  // our bootstrap is AppComponent
  bootstrap: [AppComponent] 
})

export default class AppModule{}; 