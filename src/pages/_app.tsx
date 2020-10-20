import { ChakraProvider } from '@chakra-ui/core';
import App from 'next/app';
import React from 'react';

import { appWithTranslation } from '../i18n';

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
