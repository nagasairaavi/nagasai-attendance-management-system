import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterstudentComponent } from './registerstudent.component';

describe('RegisterstudentComponent', () => {
  let component: RegisterstudentComponent;
  let fixture: ComponentFixture<RegisterstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
