import React, { FC, PropsWithChildren } from 'react';
import styles from './styles/index.module.css';

// use with background color already specified. e.g: prismjs
export const BorderPlane: FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles['border-plane']}>{children}</div>;
};

// use when you need to fill background color
export const BorderPlaneWithBackground: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={`${styles['border-plane']} ${styles.background}`}>
      {children}
    </div>
  );
};

export const BorderPlaneWithMother2Font: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div
      className={`${styles['border-plane']} ${styles.background} ${styles['mother2-font']}`}
    >
      {children}
    </div>
  );
};
