import { Cultist } from '../Cultist';
import styles from './styles/index.module.css';

export const Cultist0Pc = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.c1}>
        <Cultist></Cultist>
        <Cultist></Cultist>
        <Cultist></Cultist>
      </div>
      <div className={styles.c2}>
        <Cultist></Cultist>
        <div className={styles['c2-end']}>
          <Cultist></Cultist>
        </div>
      </div>
      <div>
        <Cultist></Cultist>
        <div className={styles['c3-end']}>
          <Cultist></Cultist>
        </div>
      </div>
      <div>
        <Cultist></Cultist>
        <div className={styles['c3-end']}>
          <Cultist></Cultist>
        </div>
      </div>
      <div>
        <Cultist></Cultist>
        <div className={styles['c3-end']}>
          <Cultist></Cultist>
        </div>
      </div>
      <div className={styles.c2}>
        <Cultist></Cultist>
        <div className={styles['c2-end']}>
          <Cultist></Cultist>
        </div>
      </div>
      <div className={styles.c1}>
        <Cultist></Cultist>
        <Cultist></Cultist>
        <Cultist></Cultist>
      </div>
    </div>
  );
};
