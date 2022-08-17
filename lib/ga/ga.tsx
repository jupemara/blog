import Script from 'next/script';
import { config } from 'lib/config';

export function ga(): JSX.Element {
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
