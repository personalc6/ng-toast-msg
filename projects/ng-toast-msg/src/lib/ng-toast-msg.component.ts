import { Component, OnInit } from '@angular/core';
import { NgToastMsgService } from './ng-toast-msg.service';
import { NgToastMsgConfigService } from './config.service';

@Component({
  selector: 'ng-toast-msg',
  templateUrl: './ng-toast-msg.component.html',
  styleUrls: ['./ng-toast-msg.component.scss']
})
export class NgToastMsgComponent implements OnInit {

  constructor(public toast: NgToastMsgService, public config: NgToastMsgConfigService) { }

  ngOnInit() {
  }

}
