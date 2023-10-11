import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpinformationComponent } from './empinformation.component';

describe('EmpinformationComponent', () => {
  let component: EmpinformationComponent;
  let fixture: ComponentFixture<EmpinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpinformationComponent]
    });
    fixture = TestBed.createComponent(EmpinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
