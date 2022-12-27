import Image from 'next/image';
import { useId } from 'react';
import Select from 'react-select';

type OptionType = {
  value: string;
  label: JSX.Element;
};

const options: OptionType[] = [
  {
    value: 'a',
    label: <Image src="/assets/images/currency.png" alt="currency" width={23} height={23} />,
  },
  {
    value: 'b',
    label: <Image src="/assets/images/currency.png" alt="currency" width={23} height={23} />,
  },
  {
    value: 'c',
    label: <Image src="/assets/images/currency.png" alt="currency" width={23} height={23} />,
  },
];

export default function SelectCurrency() {
  return (
    <Select
      instanceId={useId()}
      className="currency react-select-container"
      classNamePrefix="react-select"
      options={options}
      defaultValue={options[0]}
      onChange={(item: any) => {
        console.log(item);
      }}
    />
  );
}
