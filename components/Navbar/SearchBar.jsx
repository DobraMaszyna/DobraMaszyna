import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { setQuery, chageIsFocused } from '../../redux/searchQuery';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <SearchbarStyled>
      <input
        type='text'
        placeholder='Wyszukaj'
        onChange={(e) => dispatch(setQuery(e.target.value))}
        onFocus={() => chageIsFocused}
      />

      <SearchBtnStyled>
        <img src='https://img.icons8.com/ios-filled/50/ffffff/search--v1.png' />
      </SearchBtnStyled>
    </SearchbarStyled>
  );
};

const SearchbarStyled = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  width: 50vmin;
  transform: translateX(-50%);

  input {
    width: 100%;
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
  background-color: ${(props) => props.theme.colors.purplePrimary};

  img {
    width: 22px;
    margin: auto;
  }

  &:hover {
    background: #a2a7f2;
  }
`;

export default SearchBar;
