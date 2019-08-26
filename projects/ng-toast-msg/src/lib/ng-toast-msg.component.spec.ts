import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToastMsgComponent } from './ng-toast-msg.component';

describe('NgToastMsgComponent', () => {
  let component: NgToastMsgComponent;
  let fixture: ComponentFixture<NgToastMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgToastMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToastMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
