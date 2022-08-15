import 'modern-css-reset/dist/reset.min.css';
import 'highlight.js/styles/tokyo-night-dark.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { config } from 'lib/config';

function ga(): JSX.Element {
  if (!!config.gaMeasurementId) {
    return (
      <>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.gaMeasurementId}`}
        ></Script>
        <Script id="ga">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${config.gaMeasurementId}');`}
        </Script>
      </>
    );
  }
  return <></>;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {ga()}
      <Component {...pageProps} />
    </>
  );
}

export default App;
