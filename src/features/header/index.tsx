import { FC } from 'react';
import { BorderPlaneWithMother2Font } from '../../components/border-plane';
import styles from './styles/index.module.css';

export const Header: FC = (props) => {
  return (
    <>
      <div className={styles['title-outer']}>
        <div className={styles.title}>
          <BorderPlaneWithMother2Font>
            blog.arashike.com
          </BorderPlaneWithMother2Font>
        </div>
        <div className={styles.header}></div>
      </div>
    </>
  );
};
