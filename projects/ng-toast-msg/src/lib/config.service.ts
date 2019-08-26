import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgToastMsgConfigService {
  config = {
    position: "top-right",  //top-right, top-left, bottom-left, bottom-right
    order: "desc",  //desc, asc
    deleteInterval: 3000,
    aniInterval: 400,
  };

  constructor() { }
}