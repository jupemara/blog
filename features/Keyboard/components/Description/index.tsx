import { BorderMint } from 'components/BorderMint';
import Image from 'next/image';
import styles from './styles/index.module.css';

export const Description = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <BorderMint>
          <p className={styles.desc}>
            このリンクを みつけられてしまうとは...
            <br />
            ここは kb.arashike.com の<br />
            かいせつよていち です
            <br />
            つかいごこちがよかった キーボードの
            <br />
            ガスケットマウントケースを つくっていますO
            <br />
          </p>
        </BorderMint>
      </div>
      <main>
        <div className={styles.kb}>
          <div className={styles.tdb}>TDB: fix content</div>
          <div className={styles.photos}>
            {[
              {
                txt: 'plank endgame named "eyes": top view',
                src: '/kb/eyes-top.png',
              },
              {
                txt: 'plank endgame named "eyes": side view',
                src: '/kb/eyes-side.png',
              },
              {
                txt: 'plank endgame named "eyes": connector',
                src: '/kb/eyes-connector.png',
              },
              {
                txt: 'crkbd endgame named "corchim": 3D printed',
                src: '/kb/corchim-3d-printed-sample.png',
              },
            ].map(({ txt, src }, i) => {
              return (
                <div key={i}>
                  <BorderMint>
                    <span className={styles['photo-desc']}>{txt}</span>
                    <Image
                      alt={txt}
                      src={src}
                      width={480}
                      height={320}
                      layout="responsive"
                    ></Image>
                  </BorderMint>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
