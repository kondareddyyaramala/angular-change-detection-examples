import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { FocusOneDirective } from './directives/focus-one.directive';
import { FocusTwoDirective } from './directives/focus-two.directive';
import { CurrencyDirective } from './directives/currency.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    FocusOneDirective,
    FocusTwoDirective,
    CurrencyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
