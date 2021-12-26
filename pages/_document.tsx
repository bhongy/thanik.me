import DefaultDocument, {Html, Head, Main, NextScript} from 'next/document';

const uri = {
  roboto:
    'https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
  normalizeCss:
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
};

export default class Document extends DefaultDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="preload" href={uri.roboto} as="font" />
          <link rel="stylesheet" href={uri.normalizeCss} />
          {/* prevent favicon request */}
          <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
