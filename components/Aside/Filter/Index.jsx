import styled from 'styled-components';

import FilterSection from './FilterSection';
import FilterProducents from './FilterProducents';

const Filter = () => {
  return (
    <FilterStyled>
      <h1>Filtruj</h1>
      <FilterSection color='red' title='Cena'></FilterSection>
      {/* <PriceContainerStyled>
        <PriceBoxStyled>
          <span>Min</span>
          <PriceStyled type="number" className='MinPrice' value="2500"/>
        </PriceBoxStyled>
        <SeparatorStyled>-</SeparatorStyled>
        <PriceBoxStyled>
          <span>Max</span>
          <PriceStyled type="number" className='MaxPrice' value="7500"/>
        </PriceBoxStyled> 
      </PriceContainerStyled>
      <ProgressStyled/> */}
    <FilterProducents/>
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

const PriceContainerStyled = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0 35px;
`;

const PriceBoxStyled = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PriceStyled = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  margin-left: 12px;
  text-align: center;
  border: 1px solid #999;
  border-radius: 5px;

  &input[type="number"]::-webkit-outner-spin-button,
  &input[type="number"]::-webkit-inner-spin-button,
    -webkit-apperance: none;
`;

const SeparatorStyled = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const ProgressStyled = styled.div`
  
`;


export default Filter;
