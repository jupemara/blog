import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Octobot } from 'components/Octobot';
import styles from './styles/index.module.css';

type Props = {
  title: string;
  children: ReactNode;
};

export const Content: FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.object}>
          <Image
            alt={title}
            src="/images/components/object.png"
            width={44}
            height={108}
          ></Image>
        </div>
      </div>
      <div className={styles['content-outer']}>
        <div className={styles.content}>
          <h1>{title}</h1>
          {children}
          <div className={styles.octobot}>
            <Octobot></Octobot>
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </>
  );
};
