import 'modern-css-reset/dist/reset.min.css';
import 'highlight.js/styles/tokyo-night-dark.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ga } from 'lib/ga';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {ga()}
      <Component {...pageProps} />
    </>
  );
}

export default App;
