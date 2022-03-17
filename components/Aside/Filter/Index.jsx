import styled from 'styled-components';

import FilterSection from './FilterSection';
import FilterProducers from './FilterProducers';

const Filter = () => {
  return (
    <FilterStyled>
      <h1>Filtruj</h1>
      <FilterSection color='red' title='Cena'></FilterSection>
      <MinPriceStyled type='number' value='1000' />
      <MaxPriceStyled type='number' value='2000' />
      <FilterSection color='blue' />
      <FilterProducers />
    </FilterStyled>
  );
};

const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 35px;
    font-weight: bold;
  }
`;

const MinPriceStyled = styled.input``;

const MaxPriceStyled = styled.input``;

export default Filter;
