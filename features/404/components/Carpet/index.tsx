import React from 'react';
import styles from './styles/index.module.css';

export const Carpet = ({ children }: React.PropsWithChildren): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
