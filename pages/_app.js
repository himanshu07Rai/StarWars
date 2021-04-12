import { createGlobalStyle, ThemeProvider } from "styled-components";

import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
*{
  margin:0
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #151515;
  font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
