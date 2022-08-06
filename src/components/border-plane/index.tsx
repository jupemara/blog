import { FC, ReactNode } from 'react';
import styles from './styles/index.module.css';

type Props = {
  children: ReactNode;
};

export const BorderPlane: FC<Props> = ({ children }) => {
  return <div className={styles['border-plane']}>{children}</div>;
};

export const BorderPlaneWithMother2Font: FC<Props> = ({ children }) => {
  return (
    <div className={`${styles['border-plane']} ${styles['mother2-font']}`}>
      {children}
    </div>
  );
};
