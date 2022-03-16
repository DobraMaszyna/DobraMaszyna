import styled from 'styled-components';

const FilterProducents = () => {
  return (
    <FilterProducentsStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>BERNETT</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>BERNINA</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>BROTHER</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>COMEL</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>FISKARS</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>JACK</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>JUKI</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>KRAFT</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>MINERWA</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>SIRUBA</label>
      </ProductStyled>
      <ProductStyled>
        <input type="checkbox"/>
        <label>TEXI</label>
      </ProductStyled>
      
    </FilterProducentsStyled>
  )
}

const FilterProducentsStyled = styled.ul`
  text-decoration: none;
  list-style: none;
`;

const ProductStyled = styled.li`
  input{
    width: 20px;
    height: 20px;
  }

  label{
    font-size: 25px;
  }
`




export default FilterProducents