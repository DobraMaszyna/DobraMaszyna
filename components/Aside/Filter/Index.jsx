import styled from 'styled-components';

import FilterSection from './FilterSection';

const Filter = () => {
  return (
    <FilterStyled>
      <h1>Fitruj</h1>
      <FilterSection title='Cena'></FilterSection>
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

export default Filter;
