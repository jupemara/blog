import Image from 'next/image';
import styles from './styles/index.module.css';

type IslandProps = {
  title: string;
  lastUpdatedAt: string;
  thumbnail: string;
};

// TODO: define props
export const Island = ({ title, lastUpdatedAt, thumbnail }: IslandProps) => {
  return (
    <div className={styles.island}>
      <div className={styles.header}></div>
      <div className={styles.main}>
        <h2>
          <Image
            alt={title}
            src="/images/components/warp.png"
            width={64}
            height={96}
          ></Image>
          {title}
        </h2>
        <div className={styles['published-date']}>{lastUpdatedAt}</div>
        <Image
          alt={title}
          src="/test-002/trrs-test.jpg"
          width={128}
          height={128}
        ></Image>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};
