import App from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Bangers&family=Galada&display=swap"
            rel="stylesheet"
          />
        </Head>

        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
