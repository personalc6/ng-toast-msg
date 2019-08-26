import { Component } from '@angular/core';
import { NgToastMsgService } from 'projects/ng-toast-msg/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-toast-msg-tester';

  constructor(private toast: NgToastMsgService) { }

  onClick() {
    this.toast.set({"msg": "test"});
  }
}
