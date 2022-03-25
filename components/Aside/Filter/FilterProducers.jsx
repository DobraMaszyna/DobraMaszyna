import styled from "styled-components";
import FilterCheckbox from "./FilterCheckbox";

const FilterProducers = ({ addProducer }) => {
  return (
    <FilterProducersStyled>
      <FilterCheckbox title="BERNINA" addProducer={addProducer} />
      <FilterCheckbox title="BROTHER" addProducer={addProducer} />
      <FilterCheckbox title="ELNA" addProducer={addProducer} />
      <FilterCheckbox title="HUSQVARNA" addProducer={addProducer} />
      <FilterCheckbox title="JANOME" addProducer={addProducer} />
      <FilterCheckbox title="JUKI" addProducer={addProducer} />
      <FilterCheckbox title="KRAFT" addProducer={addProducer} />
      <FilterCheckbox title="MINERVA" addProducer={addProducer} />
      <FilterCheckbox title="PFAFF" addProducer={addProducer} />
      <FilterCheckbox title="SIRUBA" addProducer={addProducer} />
      <FilterCheckbox title="TEXI" addProducer={addProducer} />
      <FilterCheckbox title="SINGER" addProducer={addProducer} />
    </FilterProducersStyled>
  );
};

const FilterProducersStyled = styled.ul`
  text-decoration: none;
  list-style: none;
`;

export default FilterProducers;
