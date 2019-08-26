import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgToastMsgModule, NgToastMsgConfigService } from 'projects/ng-toast-msg/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgToastMsgModule
  ],
  providers: [NgToastMsgConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
