import styled from 'styled-components';

import Head from 'next/head';

import Navbar from '../components/Navbar/Index';
import Aside from '../components/Aside/Index';
import Main from '../components/Main/Index';
import getProducts from '../lib/api/getProductList';

export default function Home({ productList }) {
  return (
    <>
      <Head>
        <title>Dobra Maszyna</title>
      </Head>

      <Navbar />
      <AppContainer>
        <Aside />
        <Main products={productList} />
      </AppContainer>
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const productList = await getProducts();

    return {
      props: { isConnected: true, productList },
    };
  } catch (e) {
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
`;
