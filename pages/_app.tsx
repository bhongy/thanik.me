import NextApp, { Container } from 'next/app';
import Head from 'next/head';
import { me } from '../lib/project';
import { PageLayout } from '../components';
import './_app.css';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>{me.name} (Personal Website)</title>
        </Head>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Container>
    );
  }
}
