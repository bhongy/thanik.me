import Document, { Head, Main, NextScript } from 'next/document';

const uri = {
  normalizeCss:
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
};

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href={uri.normalizeCss} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
