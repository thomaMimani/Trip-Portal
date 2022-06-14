import { Injectable } from '@angular/core';
import { BookingKey } from '../interfaces/booking';
import { LocalStorageDataServiceService } from './local-storage-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService extends LocalStorageDataServiceService {
  key: string;

  constructor() {
    super();
    this.key = BookingKey;
  }
}
