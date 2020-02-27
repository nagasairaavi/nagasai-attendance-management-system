import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateidComponent } from './generateid.component';

describe('GenerateidComponent', () => {
  let component: GenerateidComponent;
  let fixture: ComponentFixture<GenerateidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
