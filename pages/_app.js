import './_app.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
  }
`;

const theme = {
  colors: {
    bgGray: '#F4F5F7',
    onyx: '#353839',
    blue: '#8DD7F2',
    purple: '#8E94F2',
    red: '#F28D94',
    btnGray: '#353839',
    orange: '#FFAE69',
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
