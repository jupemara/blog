import { Footer } from 'features/404/components/Footer';
import { HappyHappy } from 'features/404/components/HappyHappy';
import { Header } from 'features/404/components/Header';
import { Carpet } from 'features/404/components/Carpet';

const NotFound = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <Carpet>
        <HappyHappy></HappyHappy>
        <Footer></Footer>
      </Carpet>
    </>
  );
};

export default NotFound;
