import styled from 'styled-components';
import { useQuery } from 'react-query';

import Head from 'next/head';

import Navbar from '../components/Navbar/Index';
import Aside from '../components/Aside/Index';
import Main from '../components/Main/Index';
import getProducts from '../lib/api/getProductList';
import CategoryList from '../components/CategoryList/Index';

export default function Home({ productList }) {
  return (
    <>
      <Head>
        <title>Dobra Maszyna</title>
      </Head>

      <Navbar />
      <CategoryList/>
      
      <AppContainer>
        <Aside />
        <Main products={productList} />
      </AppContainer>
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const productList = await getProducts(
      { maxPrice: 10000, producers: ['BERNINA AG'] },
      20
    );

    return {
      props: { isConnected: true, productList },
    };
  } catch (e) {
    console.log('test');
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  z-index: 100;
`;
