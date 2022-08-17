import { Header } from 'features/header';
import { Description } from 'features/Keyboard/components/Description';
import { config } from 'lib/config';
import Head from 'next/head';

const Keyboard = () => {
  return (
    <>
      <Head>
        <title>[仮称]kb.arashike.com</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${config.host}/kb`} />
        <meta property="og:description" content="ワイのキーボード置き場" />
        <meta property="og:site_name" content="kb.arashike.com" />
      </Head>
      <Header></Header>
      <Description></Description>
    </>
  );
};

export default Keyboard;
