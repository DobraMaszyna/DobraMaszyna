import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const SearchedProducts = ({ defaultNavState }) => {
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);

  const [isEmpty, setIsEmpty] = useState(true);
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(async () => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length !== 0) {
        setIsEmpty(false);

        const data = await fetch(`/api/searchQuery?q=${searchQuery}&num=10`);

        const response = await data.json();

        setSearchProducts(response);
      } else {
        setIsEmpty(true);
        setSearchProducts([]);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <SearchedProductsStyled
      defaultNavState={defaultNavState}
      isEmpty={isEmpty}
      className='card'>
      {searchProducts.length !== 0 &&
        searchProducts.products.map((prod) => (
          <p>
            <img
              src='https://img.icons8.com/dotty/80/000000/search.png'
              width='32px'
            />
            {prod.name}
          </p>
        ))}
    </SearchedProductsStyled>
  );
};

const SearchedProductsStyled = styled.div`
  position: absolute;
  width: 90vmin;
  left: 50%;
  transform: translateX(-50%);
  padding-block: 20px;
  margin-top: ${(props) => (props.defaultNavState ? '60px' : '43px')};
  text-align: center;
  z-index: 90;
  background: white;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  padding-inline: 10vmin;
  padding-top: 35px;

  display: ${(props) => props.isEmpty && 'none'};

  p {
    display: flex;
    align-items: center;
    padding-block: 2px;
    cursor: pointer;

    img {
      margin-right: 2vmin;
    }
  }
`;

export default SearchedProducts;
