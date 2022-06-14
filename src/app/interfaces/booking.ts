export interface Booking {
  fromD: string;
  toD: string;
  adults: number;
  children: number;
  email: string;
  phone: string;
}

export type Bookings = Array<Booking>;

export const BookingKey = 'bookings';
