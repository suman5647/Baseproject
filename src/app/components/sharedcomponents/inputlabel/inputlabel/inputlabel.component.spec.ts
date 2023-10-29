import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlabelComponent } from './inputlabel.component';

describe('InputlabelComponent', () => {
  let component: InputlabelComponent;
  let fixture: ComponentFixture<InputlabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputlabelComponent]
    });
    fixture = TestBed.createComponent(InputlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
