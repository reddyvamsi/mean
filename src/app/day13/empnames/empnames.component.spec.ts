import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpnamesComponent } from './empnames.component';

describe('EmpnamesComponent', () => {
  let component: EmpnamesComponent;
  let fixture: ComponentFixture<EmpnamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpnamesComponent]
    });
    fixture = TestBed.createComponent(EmpnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
