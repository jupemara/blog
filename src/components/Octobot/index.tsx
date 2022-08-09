import Image from 'next/image';

export const Octobot = (): JSX.Element => {
  return (
    <Image
      alt="octobot: マル・デ・タコ"
      src="/images/components/octobot.gif"
      width={32}
      height={48}
    ></Image>
  );
};
