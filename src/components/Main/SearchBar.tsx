import { useRouter } from 'next/router';
import React, { useId } from 'react';
import Select from 'react-select';

const SelectOption = () => (
  <div className="text-sm p-3">
    <p className="uppercase">METALAND TOKEN (LAND)</p>
    <p className="text-[10px] text-gray-500">0xB27ADAfFB9fEa1801459a1a81B17218288c097cc</p>
    <p className="uppercase text-right">
      LP: 169.04 BNB <span className="text-green-600">($46,130)</span>
    </p>
  </div>
);

const options = [
  {
    value: 'METALAND TOKEN (LAND) 0xB27ADAfFB9fEa1801459a1a81B17218288c097cc',
    label: <SelectOption />,
    url: '/test1',
  },
  { value: 'token', label: <SelectOption />, url: '/test2' },
  { value: 'vanilla', label: <SelectOption />, url: '/test3' },
];

export default function SearchBar() {
  const router = useRouter();

  const handleChange = (e: any) => {
    router.push(e.url);
  };

  return (
    <Select
      instanceId={useId()}
      options={options}
      className="main-search react-select-container"
      classNamePrefix="react-select"
      onChange={handleChange}
    />
  );
}
