import 'modern-css-reset/dist/reset.min.css';
import 'highlight.js/styles/tokyo-night-dark.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JHJW8RB2CH"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JHJW8RB2CH');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
