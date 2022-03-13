import styled from 'styled-components';

import Head from 'next/head';
import clientPromise from '../lib/mongodb';

import Navbar from '../components/Navbar/Index';
import Aside from '../components/Aside/Index';
import Main from '../components/Main/Index';

export default function Home({ isConnected }) {
  return (
    <>
      <Head>
        <title>Dobra Maszyna</title>
      </Head>

      <Navbar />
      <AppContainer>
        <Aside />
        <Main />
      </AppContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
`;
