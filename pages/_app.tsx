import { ChakraProvider } from '@chakra-ui/react';
import App from 'next/app';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default appWithTranslation(MyApp);
