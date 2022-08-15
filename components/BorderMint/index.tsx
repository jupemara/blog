import React from 'react';
import styles from './styles/index.module.css';

export const BorderMint = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  return <div className={styles.border}>{children}</div>;
};
