import styled from 'styled-components';

import { useQuery } from 'react-query';
import { useState } from 'react';

import FilterSection from './FilterSection';
import FilterProducers from './FilterProducers';
import SubmitFilters from './SubmitFilters';
import FilterPrice from './FilterPrice';

const Filter = () => {
  const [producers, setProducers] = useState([]);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);

  const submitFiltersHandler = () => {};

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
        <FilterPrice />
      </FilterSection>
      <FilterSection title='Producentci'>
        <FilterProducers addProducer={producerHandler} />
      </FilterSection>
      <SubmitFilters submit={submitFiltersHandler} />
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
