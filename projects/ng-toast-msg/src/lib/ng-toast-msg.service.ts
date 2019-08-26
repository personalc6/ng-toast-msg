import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgToastMsgConfigService } from './config.service';

declare global {
  interface Toast {
    "id": number,
    "title"?: string,
    "content": string,
    "show"?: boolean,
  }
}

@Injectable({
  providedIn: 'root'
})
export class NgToastMsgService {
  subscribe;
  list: Array<Toast> = [];
  msg: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(config: NgToastMsgConfigService) {
    this.subscribe = this.msg.subscribe(val => {
      if(val==='clear') { // clear
        this.list = [];
        return;
      } else if(val.hasOwnProperty('id')) { // remove item
        const idx = this.list.findIndex(x => x.id === val.id);
        this.list[idx].show = false;
        
        setTimeout(() => {
          const idx = this.list.findIndex(x => x.id === val.id);
          this.list.splice(idx, 1);
        }, config.config.aniInterval);
      } else if(val.hasOwnProperty('msg')) {  // add item
        let max_id = 0;
        for(let i in this.list) { if(this.list[i].id > max_id) max_id = this.list[i].id; }
        val.id = ++max_id;

        if(config.config.order === 'asc') this.list.push(val);
        else if(config.config.order === 'desc') this.list.unshift(val);

        setTimeout(() => {
          const idx = this.list.findIndex(x => x.id === max_id);
          this.list[idx].show = true;
        });
        setTimeout(() => { this.set({id: max_id}); }, config.config.deleteInterval);
      }
    });
  }

  get = this.msg.asObservable();
  set = (data) => this.msg.next(data);
  clear = () => this.msg.next('clear');
}
