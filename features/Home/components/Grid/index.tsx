import { PropsWithChildren } from 'react';
import styles from './styles/index.module.css';

export const Grid = (props: PropsWithChildren): JSX.Element => {
  return <div className={styles.grid}>{props.children}</div>;
};
