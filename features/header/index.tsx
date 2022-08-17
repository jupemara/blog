import Link from 'next/link';
import { BorderPlaneWithMother2Font } from 'components/border-plane';
import styles from './styles/index.module.css';

export const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <div className={styles['title-outer']}>
          <span className={styles['space-tunnel']}></span>
          <span className={styles.title}>
            <BorderPlaneWithMother2Font>
              <Link href="/">
                <a>blog.arashike.com</a>
              </Link>
            </BorderPlaneWithMother2Font>
          </span>
          <Link href="/kb">
            <a className={styles.warp}></a>
          </Link>
        </div>
        <div className={styles['header-bottom']}></div>
      </header>
    </>
  );
};
