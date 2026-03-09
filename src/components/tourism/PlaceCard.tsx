import React from "react";
import type { TourismPlace } from "../../types/tourism";

type Props = {
  place: TourismPlace;
};

export default function PlaceCard({ place }: Props) {
  return (
    <article className="place-card border border-primary-100 rounded p-4">
      {place.images?.[0] && (
        <img
          src={place.images[0]}
          alt={place.name}
          className="w-full h-40 object-cover rounded"
        />
      )}
      <h4 className="mt-2 font-medium text-primary-900">{place.name}</h4>
      <p className="text-sm text-primary-900/60">{place.description}</p>
    </article>
  );
}
