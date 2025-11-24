import React from 'react';
import type { TourismPlace } from '../../types/tourism';

type Props = {
  place: TourismPlace;
};

export default function PlaceCard({ place }: Props) {
  return (
    <article className="place-card border rounded p-4">
      {place.images?.[0] && <img src={place.images[0]} alt={place.name} className="w-full h-40 object-cover rounded" />}
      <h4 className="mt-2 font-medium">{place.name}</h4>
      <p className="text-sm text-gray-600">{place.description}</p>
    </article>
  );
}
