import Document, { Head, Main, NextScript } from 'next/document';
import { me, color } from '../lib/project';

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
          <style jsx global>{`
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'),
                url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)
                  format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC,
                U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
                U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }

            body {
              font-family: Roboto, system-ui, sans-serif;
              font-size: 18px;
              line-height: 1.5;
              -webkit-font-smoothing: antialiased;
            }

            a {
              color: ${color.primary};
              text-decoration: none;
            }

            a:hover, a:focus {
              opacity: 0.7;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
