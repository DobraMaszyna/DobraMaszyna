import { useState, useEffect } from 'react';

import Select from 'react-select';

const CartSelectQuantity = () => {
  const [selectedOption, setSelectedOption] = useState({ value: 1, label: 1 });
  const [options, setOptions] = useState([]);

  const styles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#fff',
      borderColor: '#8E94F2',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#8E94F2',
        boxShadow: '0 0 5px #8E94F2',
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused
          ? isSelected
            ? '#8E94F2'
            : '#C6C9F8'
          : isSelected && '#8E94F2',
      };
    },
  };

  useEffect(() => {
    for (let i = 1; i < 100; i++) {
      setOptions((prevState) => [...prevState, { value: i, label: i }]);
    }
  }, []);

  return (
    <Select
      options={options}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      styles={styles}
    />
  );
};

export default CartSelectQuantity;
