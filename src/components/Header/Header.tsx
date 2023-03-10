import React from 'react';
import HeaderBanner from './HeaderBanner';
import SelectCurrency from './SelectCurrency';
import HeaderSocial from './HeaderSocial';
import Connect from './Connect';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <HeaderBanner />
      <div className="p-3 container mx-auto">
        <Link href="/" className="md:float-left md:w-1/4">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={143}
            height={35}
            className="mx-auto lg:mx-0"
          />
        </Link>
        <div className="md:w-3/4 md:flex justify-between md:float-right items-center">
          <HeaderSocial />
          <div className="flex gap-[10px] items-center mt-4 md:mt-0 justify-center">
            <SelectCurrency />
            <Connect />
          </div>
        </div>
      </div>
      <div className="clear-both" />
    </div>
  );
}
