import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchbarStyled>
      <input type='text' placeholder='Wyszukaj' />

      <SearchBtnStyled>
        <img src='https://img.icons8.com/dotty/80/C5C5C5/search.png' />
      </SearchBtnStyled>
    </SearchbarStyled>
  );
};

const SearchbarStyled = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  input {
    width: 600px;
    padding: 10px;
    border: 1px solid #c5c5c5;
    border-radius: 66px 0 0 66px;
    height: 35px;
    outline: none;
  }

  &::placeholder {
    font-size: 1rem;
    font-weight: regular;
  }
`;

const SearchBtnStyled = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #c5c5c5;
  border-left: none;
  border-radius: 0 66px 66px 0;
  width: 45px;
  height: 35px;
  background-color: transparent;

  img {
    width: 26px;
    margin: auto;
  }
`;

export default SearchBar;
