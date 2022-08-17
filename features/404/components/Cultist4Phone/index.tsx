import { Cultist } from '../Cultist';
import styles from './styles/index.module.css';

export const Cultist4Phone = (): JSX.Element => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};
