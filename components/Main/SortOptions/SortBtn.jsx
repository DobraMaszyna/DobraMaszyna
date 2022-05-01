import styled from 'styled-components';

const Sorting = ({ sortTypes }) => {
  return (
    <SortBtnStyled>
      {sortTypes.map((item, index) => (
        <option value='byPopularity' key={index}>
          {item}
        </option>
      ))}
    </SortBtnStyled>
  );
};

const SortBtnStyled = styled.select`
  display: flex;
  align-items: center;
  margin: 50px 15px;
  font-weight: 600;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  color: #9a9c9d;

  option {
    font-size: 16px;
    color: black;
    padding: 5px;
    background-color: transparent;
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
