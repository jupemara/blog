import { BorderPlaneWithMother2Font } from 'components/border-plane';
import Link from 'next/link';
import styles from './styles/index.module.css';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className={styles.container}>
        <span className={styles.left}></span>
        <span className={styles.title}>
          <BorderPlaneWithMother2Font>
            <Link href="/">
              <a>ブルー ブルー。</a>
            </Link>
          </BorderPlaneWithMother2Font>
        </span>
        <div className={styles.middle}></div>
        <span className={styles.right}></span>
      </div>
      <div className={styles.padding}></div>
    </header>
  );
};
