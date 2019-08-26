import { NgModule } from '@angular/core';
import { NgToastMsgComponent } from './ng-toast-msg.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NgToastMsgComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgToastMsgComponent]
})
export class NgToastMsgModule { }
