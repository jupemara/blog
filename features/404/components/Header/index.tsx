import styles from './styles/index.module.css';

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className={styles.container}>
        <span className={styles.left}></span>
        <div className={styles.middle}></div>
        <span className={styles.right}></span>
        <span className={styles.title}></span>
      </div>
      <div className={styles.padding}></div>
    </header>
  );
};
