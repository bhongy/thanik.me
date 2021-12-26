import DefaultDocument, {Html, Head, Main, NextScript} from 'next/document';

const uri = {
  fontCss: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400',
  normalizeCss:
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
};

export default class Document extends DefaultDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="stylesheet" href={uri.fontCss} />
          <link rel="stylesheet" href={uri.normalizeCss} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
