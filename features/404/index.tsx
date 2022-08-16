import { Footer } from 'features/404/components/Footer';
import { HappyHappyist } from 'features/404/components/HappyHappyist';
import { Header } from 'features/404/components/Header';
import { Carpet } from 'features/404/components/Carpet';
import Head from 'next/head';

const NotFound = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header></Header>
      <Carpet>
        <HappyHappyist></HappyHappyist>
        <Footer></Footer>
      </Carpet>
    </>
  );
};

export default NotFound;
