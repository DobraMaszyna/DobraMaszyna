import styled from 'styled-components';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const SearchedProducts = ({ searchQuery, defaultNavState, onMouseHover }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(async () => {
    if (searchQuery.trim().length !== 0) {
      setIsEmpty(false);

      const delayDebounceFn = setTimeout(async () => {
        const data = await fetch(`/api/searchQuery?q=${searchQuery}&num=10`);
        const response = await data.json();

        setSearchProducts(response);
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    } else {
      setIsEmpty(true);
      setSearchProducts([]);
    }
  }, [searchQuery]);

  return (
    <SearchedProductsStyled
      onMouseOver={onMouseHover}
      onMouseOut={onMouseHover}
      defaultNavState={defaultNavState}
      isEmpty={isEmpty}
      className='card'
      style={{ borderRadius: '0 0 15px 15px' }}>
      <p className='searchMessage'>Resultat wyszukiwania:</p>
      {searchProducts.length !== 0 &&
        searchProducts.products.map((prod) => (
          <Link href={`/produkt/${prod._id}`}>
            <a className='searchEl'>
              <img
                src='https://img.icons8.com/dotty/80/000000/search.png'
                width='32px'
              />
              {prod.name}
            </a>
          </Link>
        ))}
    </SearchedProductsStyled>
  );
};

const SearchedProductsStyled = styled.div`
  position: fixed;
  width: 90vmin;
  left: 50%;
  transform: translateX(-50%);
  padding-block: 20px;
  margin-top: ${(props) => (props.defaultNavState ? '60px' : '43px')};
  text-align: center;
  z-index: 120;
  background: white;
  padding-inline: 10vmin;
  padding-top: 35px;

  display: ${(props) => props.isEmpty && 'none'};

  .searchMessage {
    text-align: left;
    color: ${(props) => props.theme.colors.gray};
    border-bottom: 2px solid;
    padding-block: 8px;
    margin-bottom: 20px;
  }

  .searchEl {
    display: flex;
    align-items: center;
    padding-block: 2px;
    cursor: pointer;
    color: black;
    text-decoration: none;

    img {
      margin-right: 2vmin;
    }
  }
`;

export default SearchedProducts;
