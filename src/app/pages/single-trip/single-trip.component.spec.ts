import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripComponent } from './single-trip.component';

describe('SingleTripThethComponent', () => {
  let component: SingleTripComponent;
  let fixture: ComponentFixture<SingleTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleTripComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
