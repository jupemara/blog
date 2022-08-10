import styles from './styles/index.module.css';

type IslandProps = {
  title: string;
  lastUpdatedAt: string;
  thumbnail: string;
  top: number;
  left: number;
};

// TODO: define props
export const Island = ({
  title,
  lastUpdatedAt,
  thumbnail,
  top,
  left,
}: IslandProps) => {
  const offset = 80;
  return (
    <div className={styles.island}>
      <div className={styles.main}>
        <div className={styles['title-container']}>
          <div className={styles['warp-container']}>
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
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.short}>
              コレはショートテキストでテスト的に書いています.
              時々キーボードデザイナーとして仕事をしたいなと思いつつ、フロントエンドとバックエンドでソフトウェアエンジニアをやっています.
              とはいえ, 日々の生活はそれなりに楽しく,
              明日もポリカーボネートのトッププレートが届くので最高に楽しみです.
            </p>
          </div>
        </div>
        <div className={styles['published-date-container']}>
          <div className={styles['published-date']}>{lastUpdatedAt}</div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};
