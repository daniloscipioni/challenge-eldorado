import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeviceComponent } from './new-device.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

describe('NewDeviceComponent', () => {
  let component: NewDeviceComponent;
  let fixture: ComponentFixture<NewDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDeviceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
