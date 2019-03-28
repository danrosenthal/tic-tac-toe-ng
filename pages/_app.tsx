import App from 'next/app';
import Head from 'next/head';
import * as React from 'react';

class TicTacToe extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default TicTacToe;
