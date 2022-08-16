import { Cultist0Pc } from '../Cultist0Pc';
import { Cultist0Phone } from '../Cultist0Phone';
import { Cultist0Tablet } from '../Cultist0Tablet';
import { Cultist4Pc } from '../Cultist4Pc';
import { Cultist4Phone } from '../Cultist4Phone';
import { Cultist4Tablet } from '../Cultist4Tablet';
import styles from './styles/index.module.css';

export const HappyHappyist = (): JSX.Element => {
  return (
    <main>
      <div className={styles.pc}>
        <Cultist4Pc />
        <Cultist0Pc />
        <Cultist4Pc />
      </div>
      <div className={styles.tablet}>
        <Cultist4Tablet />
        <Cultist0Tablet />
        <Cultist4Tablet />
      </div>
      <div className={styles.phone}>
        <Cultist4Phone />
        <Cultist0Phone />
        <Cultist4Phone />
      </div>
    </main>
  );
};
