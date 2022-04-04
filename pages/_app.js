import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Navbar from '../components/Navbar/Index';
import CategoryList from '../components/CategoryList/Index';

import './_app.css';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: linear-gradient(90.42deg, #E4E6FF -7.13%, #FDFDFF 7.84%, #F5F6FF 29.85%, #F2F3FF 54.12%, #FFFFFF 86.78%, #CBCEFF 114.69%);
    height: 100%;
    color: #353839;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .card {
    background-color: #fff;
    box-shadow: 0px 4px 37px rgba(198, 201, 248, 0.33);
    border-radius: 41px;
  }

  .icon {
    width: 32px;
  }
`;

const theme = {
  colors: {
    gray: '#C5C5C5',
    onyx: '#353839',
    blue: '#8DD7F2',
    purplePrimary: '#8E94F2',
    purpleLighter: '#C6C9F8',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Dobra Maszyna</title>
        </Head>

        <Navbar />
        <CategoryList />

        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 180px;
  z-index: 100;
`;
