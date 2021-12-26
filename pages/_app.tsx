import type {AppProps} from 'next/app';
import Head from 'next/head';
import {me} from '@/data/project';
import {Page} from '@/Page';
import './_app.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={`A personal website of ${me.name}`} />
        <title>{me.name} (Personal Website)</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
