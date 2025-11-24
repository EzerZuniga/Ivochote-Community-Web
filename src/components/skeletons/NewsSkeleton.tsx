import React from 'react';

export default function NewsSkeleton() {
  return (
    <div className="news-skeleton animate-pulse space-y-2">
      <div className="bg-gray-200 h-40 rounded" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
