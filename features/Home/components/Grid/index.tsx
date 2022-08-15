import { PropsWithChildren } from 'react';
import { Octobot } from 'components/Octobot';
import styles from './styles/index.module.css';

export const Grid = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.grid}>{props.children}</div>
      <div className={styles.footer}>
        <div className={styles.octobot}>
          <Octobot></Octobot>
        </div>
      </div>
    </div>
  );
};
