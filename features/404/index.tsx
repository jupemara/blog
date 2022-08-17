import { Footer } from 'features/404/components/Footer';
import { HappyHappyist } from 'features/404/components/HappyHappyist';
import { Header } from 'features/404/components/Header';
import { Carpet } from 'features/404/components/Carpet';

const NotFound = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <Carpet>
        <HappyHappyist></HappyHappyist>
        <Footer></Footer>
      </Carpet>
    </>
  );
};

export default NotFound;
