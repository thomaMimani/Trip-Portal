import { Injectable } from '@angular/core';
import { TripKey } from '../interfaces/trip';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageDataServiceService {
  key: string = '';

  constructor() {}

  all() {
    // ToDo: get all trips from localStorage

    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  find(id: any) {
    // ToDo: get a single trip from id
    console.log(id);

    return this.all().find((item: any) => item.id == id);
    // return single trip
  }

  // create

  create(item: any) {
    let items = this.all();

    items.push(item);

    this.set(items);
  }

  // edit
  edit(id: number) {
    let items = this.all();

    items.edit(id);

    this.set(items);
  }

  // delete
  delete(id: number) {
    let items = this.all();

    items.delete(id);

    this.set(items);
  }

  private set(items: any) {
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
