import React from 'react';
import banner from '@/assets/images/banner-top.jpg';
import Image from 'next/image';

export default function HeaderBanner() {
  return (
    <Image
      src="/assets/images/banner-top.jpg"
      alt="Banner top"
      width={1440}
      height={73}
      className="w-full"
    />
  );
}
