import styled from 'styled-components';

const FilterProducers = () => {
  return (
    <FilterProducersStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>BERNETT</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>BERNINA</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>BROTHER</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>COMEL</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>FISKARS</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>JACK</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>JUKI</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>KRAFT</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>MINERWA</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>SIRUBA</label>
      </ProductStyled>
      <ProductStyled>
        <input type='checkbox' />
        <label>TEXI</label>
      </ProductStyled>
    </FilterProducersStyled>
  );
};

const FilterProducersStyled = styled.ul`
  text-decoration: none;
  list-style: none;
`;

const ProductStyled = styled.li`
  input {
  }
  label {
    font-size: 16px;
  }
`;

export default FilterProducers;
