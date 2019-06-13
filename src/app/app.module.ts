import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { ListitemComponent } from "./listitem/listitem.component";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { IAppState, store } from "./store/store";
import { SelectedItemsComponent } from "./selected-items/selected-items.component";

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    ListitemComponent,
    SelectedItemsComponent
  ],
  imports: [BrowserModule, NgReduxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
