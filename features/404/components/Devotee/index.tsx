import { random } from 'lib/utils/random-range';
import { useEffect, useState } from 'react';
import styles from './styles/index.module.css';

export const Devotee = (): JSX.Element => {
  const [devotee, setDevotee] = useState('');
  useEffect(() => {
    setDevotee(
      [styles['devotee-600'], styles['devotee-700'], styles['devotee-800']][
        random(0, 2)
      ],
    );
  });
  return <div className={devotee}></div>;
};
