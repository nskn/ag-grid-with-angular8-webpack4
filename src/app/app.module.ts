import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
// ag-grid
import {AgGridModule} from "ag-grid-angular";
// application
import {AppComponent} from "./app.component";

@NgModule({
 declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents([]
        )
    ],
   
   providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
