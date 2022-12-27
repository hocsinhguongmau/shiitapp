import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

export default function HeaderSocial({}: Props) {
  return (
    <ul className="flex gap-[10px] mt-4 md:mt-0 justify-center md:justify-start">
      <li>
        <Link href="https:google.com" target="_blank">
          <span className="w-[22px] h-[22px] rounded-md bg-[#094cbc] block text-white text-sm pt-1">
            <BsTwitter className="mx-auto" />
          </span>
        </Link>
      </li>
      <li>
        <Link href="https:google.com" target="_blank">
          <span className="w-[22px] h-[22px] rounded-md bg-[#094cbc] block text-white text-sm pt-1">
            <FaTelegramPlane className="mx-auto" />
          </span>
        </Link>
      </li>
      <li>
        <Link href="https:google.com" target="_blank">
          <span className="w-[22px] h-[22px] rounded-md bg-[#094cbc] block text-white pt-1">
            <Image
              src="/assets/images/social.png"
              width={16}
              height={9}
              className="mx-auto mt-0.5"
              alt=""
            />
          </span>
        </Link>
      </li>
    </ul>
  );
}
