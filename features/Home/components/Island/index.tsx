import Image from 'next/image';

type IslandProps = {
  title: string;
  lastUpdatedAt: string;
  thumbnail: string;
};

// TODO: define props
export const Island = ({ title, lastUpdatedAt, thumbnail }: IslandProps) => {
  return (
    <div>
      <Image
        alt={title}
        src="/images/components/warp.png"
        width={64}
        height={96}
      ></Image>
      <span>{title}</span>
      <div>こうしんび: {lastUpdatedAt}</div>
      <Image
        alt={title}
        src="/images/components/octobot.gif"
        width={32}
        height={48}
      ></Image>
    </div>
  );
};
