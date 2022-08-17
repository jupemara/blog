import { PropsWithChildren } from 'react';
import { Octobot } from 'components/Octobot';
import styles from './styles/index.module.css';
import { Padding10px } from 'components/Padding10px';

export const Grid = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className={styles.container}>
      <Padding10px></Padding10px>
      <div className={styles.posts}>
        <div className={styles.header}></div>
        <div className={styles.grid}>{props.children}</div>
        <div className={styles.footer}>
          <div className={styles.octobot}>
            <Octobot></Octobot>
          </div>
        </div>
      </div>
    </div>
  );
};
