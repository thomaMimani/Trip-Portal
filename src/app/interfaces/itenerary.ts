export interface Itinerary {
  title: string;
  description: string;
}

export type Itineraries = Array<Itinerary>;

export const ItineraryKey = 'itineraries';
