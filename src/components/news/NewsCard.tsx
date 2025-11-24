import React from 'react';
import type { News } from '../../types/news';

type Props = {
  item: News;
};

export default function NewsCard({ item }: Props) {
  return (
    <article className="news-card border rounded p-4">
      {item.image && <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />}
      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.excerpt}</p>
      <time className="text-xs text-gray-500">{item.date}</time>
    </article>
  );
}
