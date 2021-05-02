import { ChakraProvider } from '@chakra-ui/react';
import App from 'next/app';
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

export default MyApp;
