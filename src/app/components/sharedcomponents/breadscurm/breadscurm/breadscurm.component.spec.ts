import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadscurmComponent } from './breadscurm.component';

describe('BreadscurmComponent', () => {
  let component: BreadscurmComponent;
  let fixture: ComponentFixture<BreadscurmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadscurmComponent]
    });
    fixture = TestBed.createComponent(BreadscurmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
