import '../styles/globals.css';
import 'the-new-css-reset/css/reset.css';
import 'highlight.js/styles/tokyo-night-dark.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
