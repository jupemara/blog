import { FC, ReactNode } from 'react';
import styles from './styles/index.module.css';

type Props = {
  title: string;
  children: ReactNode;
};

export const ArticleContent: FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className={styles.header}></div>
      <div className={styles.container}>
        <h1>{title}</h1>
        {children}
      </div>
      <div className={styles.footer}></div>
    </>
  );
};
