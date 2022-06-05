import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SearchBar = ({ changeSearchQuery, onInputFocus }) => {
  const router = useRouter();

  const [pressedBtn, setPressedBtn] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (pressedBtn === 'Enter') {
      router.push(`/search/${searchQuery}`);
      setSearchQuery('');
    }
  }, [pressedBtn]);

  const inputValueHandler = (value) => {
    changeSearchQuery(value);
    setSearchQuery(value);
  };

  return (
    <SearchbarStyled onFocus={onInputFocus} onBlur={onInputFocus}>
      <input
        type='text'
        placeholder='Wyszukaj'
        value={searchQuery}
        onKeyPress={(e) => setPressedBtn(e.key)}
        onChange={(e) => inputValueHandler(e.target.value)}
      />

      <SearchBtnStyled>
        <img src='https://img.icons8.com/dotty/80/000000/search.png' />
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
  background: transparent;

  img {
    width: 22px;
    margin: auto;
  }

  &:hover {
    background: ${(props) => props.theme.colors.purpleLighter};
  }
`;

export default SearchBar;
