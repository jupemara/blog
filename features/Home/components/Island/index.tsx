import { random } from '../../../../lib/utils/random-range';
// TODO: use path alias
import styles from './styles/index.module.css';

type IslandProps = {
  title: string;
  lastUpdatedAt: string;
  top: number;
  left: number;
};

type IslandPropsV2 = {
  title: string;
  lastUpdatedAt: string;
};

// TODO: define props
export const Island = ({ title, lastUpdatedAt }: IslandPropsV2) => {
  const offset = 80,
    // TODO: re-consider random range
    top = random(-30, 100),
    left = random(-50, 100);
  return (
    <div className={styles.island}>
      <div className={styles.main}>
        <div className={styles['warp-container']}>
          <a href="https://example.com">
            <div
              className={`${styles.warp} ${styles['warp-ball']}`}
              style={{
                top: `${top}px`,
                left: `${left}px`,
              }}
            ></div>
            <div
              className={`${styles.warp} ${styles['warp-shadow']}`}
              style={{
                top: `${top + offset}px`,
                left: `${left}px`,
              }}
            ></div>
          </a>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.short}>
            NNTレはショートテキストでテスト的に書いています.
            時々キーボードデザイナーとして仕事をしたいなと思いつつ、フロントエンドとバックエンドでソフトウェアエンジニアをやっています.
            とはいえ, 日々の生活はそれなりに楽しく,
            明日もポリカーボネートのトッププレートが届くので最高に楽しみです.
          </p>
        </div>
        <div className={styles['published-date']}>{lastUpdatedAt}</div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};
