import Link from 'next/link';
import { BorderPlaneWithMother2Font } from 'components/border-plane';
import styles from './styles/index.module.css';

export const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <div className={styles['title-outer']}>
          <a
            href="https://kbd.arashike.com"
            className={styles['space-tunnel']}
          ></a>
          <span className={styles.title}>
            <BorderPlaneWithMother2Font>
              <Link href="/">
                <a>blog.arashike.com</a>
              </Link>
            </BorderPlaneWithMother2Font>
          </span>
          <a href="https://kbd.arashike.com" className={styles.warp}></a>
        </div>
        <div className={styles['header-bottom']}></div>
      </header>
    </>
  );
};
