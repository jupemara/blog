import { Devotee0 } from '../Devotee0';
import { Devotee4 } from '../Devotee4';
import styles from './styles/index.module.css';

export const HappyHappy = (): JSX.Element => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles['not-found']}>
          <Devotee4></Devotee4>
          <Devotee0></Devotee0>
          <Devotee4></Devotee4>
        </div>
      </div>
    </main>
  );
};
