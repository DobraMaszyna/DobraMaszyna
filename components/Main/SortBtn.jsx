import styled from 'styled-components';

const Sorting = ({ sortTypes }) => {
  return (
    <SortBtnStyled>
      {sortTypes.map((item) => (
        <option value='byPopularity'>{item}</option>
      ))}
    </SortBtnStyled>
  );
};

const SortBtnStyled = styled.select`
  display: flex;
  align-items: center;
  margin: 50px 15px;
  position: relative;
  font-weight: 600;
  height: 60px;
  padding: 15px 10px;
  border: 3px solid #9a9c9d;
  color: #9a9c9d;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.gray};

  option {
    font-size: 16px;
    color: black;
    padding: 5px;
    background-color: ;
  }

  h1 {
    font-size: 16px;
    margin-left: 15px;
  }

  select items {
    padding: 15px 10px;
    border: 3px solid #9a9c9d;
    color: #9a9c9d;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

export default Sorting;
