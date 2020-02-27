import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadattendenceComponent } from './readattendence.component';

describe('ReadattendenceComponent', () => {
  let component: ReadattendenceComponent;
  let fixture: ComponentFixture<ReadattendenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadattendenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
