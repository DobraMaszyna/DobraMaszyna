import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { changeFilter } from '../../../redux/productFilter';

import FilterSection from './FilterSection';
import FilterProducers from './FilterProducers';
import SubmitFilters from './SubmitFilters';
import FilterPrice from './FilterPrice';

const Filter = () => {
  const dispatch = useDispatch();

  const [producers, setProducers] = useState([]);

  const [maxPrice, setMaxPrice] = useState(9999999);
  const [minPrice, setMinPrice] = useState(0);

  const producerHandler = (producer, isChecked) => {
    if (isChecked) {
      setProducers((prev) => [...prev, producer]);
    } else {
      setProducers(producers.filter((title) => title !== producer));
    }
  };

  return (
    <FilterStyled>
      <h1>Filtruj</h1>

      <FilterSection title='Cena'>
        <FilterPrice
          changeMaxPrice={(e) => setMaxPrice(e.target.value)}
          changeMinPrice={(e) => setMinPrice(e.target.value)}
        />
      </FilterSection>
      <FilterSection title='Producenci'>
        <FilterProducers addProducer={producerHandler} />
      </FilterSection>
      <SubmitFilters
        submit={() =>
          dispatch(
            changeFilter({
              price: { $range: [minPrice, maxPrice] },
              producer: { $in: producers },
            })
          )
        }
      />
    </FilterStyled>
  );
};

const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export default Filter;
