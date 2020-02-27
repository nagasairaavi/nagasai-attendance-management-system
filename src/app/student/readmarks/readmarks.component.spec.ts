import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmarksComponent } from './readmarks.component';

describe('ReadmarksComponent', () => {
  let component: ReadmarksComponent;
  let fixture: ComponentFixture<ReadmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
