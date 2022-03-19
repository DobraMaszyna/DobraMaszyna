import styled from 'styled-components';
import FilterCheckbox from './FilterCheckbox';

const FilterProducers = ({ addProducer }) => {
  return (
    <FilterProducersStyled>
      <FilterCheckbox title='BERNINA AG' addProducer={addProducer} />
      <FilterCheckbox title='JUKI' addProducer={addProducer} />
      <FilterCheckbox title='BROTHER' addProducer={addProducer} />
      <FilterCheckbox title='FISKARS' addProducer={addProducer} />
    </FilterProducersStyled>
  );
};

const FilterProducersStyled = styled.ul`
  text-decoration: none;
  list-style: none;
`;

export default FilterProducers;
