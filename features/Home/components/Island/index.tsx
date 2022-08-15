import dayjs from 'dayjs';
import Link from 'next/link';
import { random } from 'lib/utils/random-range';
import styles from './styles/index.module.css';

type IslandProps = {
  slug: string;
  title: string;
  lastUpdatedAt: string;
  txt: string;
};

export const Island = ({ slug, title, lastUpdatedAt, txt }: IslandProps) => {
  const offset = 80,
    top = random(-30, 110),
    left = random(-50, 120);
  return (
    <div className={styles.island}>
      <div className={styles.main}>
        <div className={styles['warp-container']}>
          <Link href={`/${slug}`}>
            <a>
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
          </Link>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.short}>{toShort(txt)}</p>
        </div>
        <div className={styles['published-date']}>{toDate(lastUpdatedAt)}</div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

function toShort(raw: string): string {
  const length = 140,
    v = raw.length <= length ? raw : raw.slice(0, length);
  return v + '...';
}

function toDate(raw: string): string {
  return dayjs(raw).format('YYYY-MM-DD');
}
