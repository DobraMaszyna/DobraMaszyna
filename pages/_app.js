import './_app.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #F4F5F7;
    width: 100vw;
    height: 100vh;
    color: #353839;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    bgGray: '#F4F5F7',
    onyx: '#353839',
    blue: '#8DD7F2',
    purple: '#8E94F2',
    red: '#F28D94',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
