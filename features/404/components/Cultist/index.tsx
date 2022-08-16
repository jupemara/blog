import { random } from 'lib/utils/random-range';
import { useEffect, useState } from 'react';
import styles from './styles/index.module.css';

export const Cultist = (): JSX.Element => {
  const cultists = [
      styles['cultist-500'],
      styles['cultist-600'],
      styles['cultist-700'],
      styles['cultist-800'],
    ],
    [cultist, setCultist] = useState('');
  useEffect(() => {
    setCultist(cultists[random(0, cultists.length)]);
  });
  return <div className={cultist}></div>;
};
