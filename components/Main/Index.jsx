import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import ProductList from './ProductList/Index';
import SortOptions from './SortOptions';
import { useEffect } from 'react';

const Main = ({ products }) => {
  const router = useRouter();
  const productFilter = useSelector(
    (state) => state.productFilter.productFilter
  );

  useEffect(async () => {
    console.log(productFilter);

    const req = await fetch(
      `/api/getProductList?c=${router.query.category}${
        !router.query.childcategory
          ? !router.query.subcategory
            ? `&type=${router.query.category}`
            : `&type=${router.query.subcategory}`
          : `&type=${router.query.childcategory}`
      }&f=${productFilter}`
    );
  }, [productFilter]);

  return (
    <MainStyled>
      <div className='ContentContainer card'>
        <SortOptions />
        <ProductList products={products} />
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  float: right;
  width: 100%;
  height: 100%;

  .ContentContainer {
    width: 92%;
    height: 100%;
    margin-inline: auto;
    border-radius: 41px 41px 0 0;
    padding-inline: 5vmin;
    padding-bottom: 20px;
  }
`;

export default Main;
