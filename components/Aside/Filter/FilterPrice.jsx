import styled from 'styled-components';

const FilterPrice = () => {
  return (
    <FilterPriceStyled>
      <input type='number' placeholder='od  zł' />
      <span>-</span>
      <input type='number' placeholder='do  zł' />
    </FilterPriceStyled>
  );
};

const FilterPriceStyled = styled.div`
  display: flex;
  margin-top -15px;
  padding: 20px 10px;

  input {
    width: 40%;
    border 1px solid ${(props) => props.theme.colors.onyx};
    border-radius: 6px;
    text-align: center;
    padding: 10px;
  }

  span {
    width: 20%;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
`;

export default FilterPrice;
