import { FC, ReactNode } from 'react';
import styles from './styles/index.module.css';

export const BorderPlane: FC = (props) => {
  return (
    <span className={styles['border-plane']}>
      <span className={styles['border-inner']} {...props}></span>
    </span>
  );
};

type Props = {
  children: ReactNode;
};

export const BorderPlaneWithMother2Font: FC<Props> = ({ children }) => {
  return (
    <div className={styles['border-plane']}>
      <div className={`${styles['border-inner']} ${styles['mother2-font']}`}>
        {children}
      </div>
    </div>
  );
};
