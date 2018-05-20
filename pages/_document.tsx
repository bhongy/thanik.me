import Document, { Head, Main, NextScript } from 'next/document';
import { me } from '../lib/project';

const uri = {
  normalizeCss:
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
};

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>{me.name} (Personal Website)</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href={uri.normalizeCss} />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
