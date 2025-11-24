import React from 'react';
import type { ServiceItem } from '../../types/services';

type Props = {
  service: ServiceItem;
};

export default function ServiceCard({ service }: Props) {
  return (
    <div className="service-card border rounded p-3">
      {service.image && <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded" />}
      <h4 className="mt-2 font-medium">{service.title}</h4>
      {service.description && <p className="text-sm text-gray-600">{service.description}</p>}
    </div>
  );
}
