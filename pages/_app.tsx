import NextApp, { Container } from 'next/app';
import { PageLayout } from '../components';
import './_app.css';

export default class App extends NextApp {
  render() {
    // @ts-ignore until @types/next is updated to support types for "next/app"
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Container>
    )
  }
}
