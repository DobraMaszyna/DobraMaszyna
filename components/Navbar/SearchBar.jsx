import styled from 'styled-components';

const SearchBar = () => {
  return <SearchBarStyled type='text' placeholder='Wyszukaj' />;
};

const SearchBarStyled = styled.input`
  width: 600px;
  margin: auto;
  padding: 10px;
  border: none;
  border-radius: 6px;
  height: 41px;

  &::placeholder {
    font-size: 1rem;
    font-weight: regular;
  }
`;

export default SearchBar;
