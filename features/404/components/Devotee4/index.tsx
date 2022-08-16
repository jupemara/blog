import { Devotee } from 'features/404/components/Devotee';
import { DevoteeSpace } from 'features/404/components/DevoteeSpace';
import styles from './styles/index.module.css';

export const Devotee4 = (): JSX.Element => {
  return (
    <div className={styles['container']}>
      <div className={styles['c1']}>
        <Devotee></Devotee>
      </div>
      <div className={styles['c2']}>
        <Devotee></Devotee>
        <Devotee></Devotee>
      </div>
      <div className={styles['c3']}>
        <Devotee></Devotee>
        <DevoteeSpace></DevoteeSpace>
        <Devotee></Devotee>
      </div>
      <div className={styles['c4']}>
        <Devotee></Devotee>
        <DevoteeSpace></DevoteeSpace>
        <DevoteeSpace></DevoteeSpace>
        <Devotee></Devotee>
      </div>
      <div>
        <Devotee></Devotee>
        <Devotee></Devotee>
        <Devotee></Devotee>
        <Devotee></Devotee>
        <Devotee></Devotee>
        <Devotee></Devotee>
        <Devotee></Devotee>
      </div>
      <div className={styles['c6']}>
        <Devotee></Devotee>
      </div>
      <div className={styles['c7']}>
        <Devotee></Devotee>
      </div>
    </div>
  );
};
