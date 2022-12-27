import Link from 'next/link';
import React from 'react';

export default function HomeText() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">BSC Charts</h1>
      <h2 className="text-3xl mt-4">
        View price charts for any token in your wallet (binance smart chain)
      </h2>
      <h3 className="text-xl font-medium mt-2">
        Telegram public chat:{' '}
        <Link href="https://t.me/poocointokenchat" className="text-blue-500" target="_blank">
          https://t.me/poocointokenchat
        </Link>
      </h3>
    </div>
  );
}
