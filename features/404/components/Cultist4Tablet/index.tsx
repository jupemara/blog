import { Cultist } from '../Cultist';
import styles from './styles/index.module.css';
export const Cultist4Tablet = (): JSX.Element => {
  return (
    <div className={styles['container']}>
      <div>
        <Cultist />
        <Cultist />
        <Cultist />
      </div>
      <div className={styles.c2}>
        <Cultist />
      </div>
      <div>
        <Cultist />
        <Cultist />
        <Cultist />
        <Cultist />
      </div>
      <div className={styles.c4}>
        <Cultist />
      </div>
    </div>
  );
};
