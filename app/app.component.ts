import { Component } from "@angular/core"; 

@Component({
    // the element defined in the index.html
    selector: "my-app",
    
    // Given this configuration, when the browser URL for this application becomes /showHide, 
    // the router matches that URL to the route path /showHide 
    // and displays the ShowHideComponent after a RouterOutlet that you've placed in the host view's HTML.
    template: `
    <navigation-bar></navigation-bar>
    <router-outlet></router-outlet>`   
})

export default class AppComponent {
} 