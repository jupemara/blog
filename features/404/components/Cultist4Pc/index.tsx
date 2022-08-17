import { Cultist } from '../Cultist';
import styles from './styles/index.module.css';

export const Cultist4Pc = (): JSX.Element => {
  return (
    <div className={styles['container']}>
      <div className={styles.c1}>
        <Cultist></Cultist>
      </div>
      <div className={styles.c2}>
        <Cultist></Cultist>
        <Cultist></Cultist>
      </div>
      <div className={styles.c3}>
        <Cultist></Cultist>
        <div className={styles['c3-end']}>
          <Cultist></Cultist>
        </div>
      </div>
      <div className={styles.c4}>
        <Cultist></Cultist>
        <div className={styles['c4-end']}>
          <Cultist></Cultist>
        </div>
      </div>
      <div>
        <Cultist></Cultist>
        <Cultist></Cultist>
        <Cultist></Cultist>
        <Cultist></Cultist>
        <Cultist></Cultist>
        <Cultist></Cultist>
        <Cultist></Cultist>
      </div>
      <div className={styles.c6}>
        <Cultist></Cultist>
      </div>
      <div className={styles.c7}>
        <Cultist></Cultist>
      </div>
    </div>
  );
};
