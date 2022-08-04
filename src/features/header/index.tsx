import Link from 'next/link';
import { FC } from 'react';
import { BorderPlaneWithMother2Font } from '../../components/border-plane';
import styles from './styles/index.module.css';

export const Header: FC = (props) => {
  return (
    <>
      <div className={styles['title-outer']}>
        <span className={styles['space-tunnel']}></span>
        <span className={styles.title}>
          <BorderPlaneWithMother2Font>
            <Link href="/">
              <a>blog.arashike.com</a>
            </Link>
          </BorderPlaneWithMother2Font>
        </span>
      </div>
      <div className={styles.header}></div>
    </>
  );
};
