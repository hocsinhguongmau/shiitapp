import React from 'react';
import Image from 'next/image';

export default function Chart() {
  return (
    <div className="mt-5">
      <Image
        src="/assets/images/chart.jpg"
        alt="Banner"
        className="w-full"
        width={1052}
        height={930}
      />
    </div>
  );
}
