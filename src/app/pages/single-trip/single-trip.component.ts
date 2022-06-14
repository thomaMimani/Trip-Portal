import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { TripService } from 'src/app/services/trip.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss'],
})
export class SingleTripComponent implements OnInit {
  trip: any;
  bookingForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    adults: new FormControl(''),
    children: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  public tripId: number | undefined;
  public tripDestination: number | undefined;
  public tripPrice: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.tripId = id;

    this.trip = this.tripService.find(this.tripId);
  }

  alert() {
    // window.alert('Submitted succesfully!');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.bookingForm.value);
    this.bookingService.create(this.bookingForm.value);
  }
}
