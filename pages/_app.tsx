import NextApp, { Container } from 'next/app';
import { PageLayout } from '../components';
import './_app.css';

export default class App extends NextApp {
  props: { Component: any, pageProps: any };
  render() {
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
