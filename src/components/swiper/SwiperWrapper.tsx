import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function SwiperWrapper({ children }: Props) {
  return (
    <div className="swiper-wrapper overflow-hidden">
      {children}
    </div>
  );
}
