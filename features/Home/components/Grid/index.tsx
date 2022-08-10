import { PropsWithChildren } from 'react';

export const Grid = (props: PropsWithChildren): JSX.Element => {
  return <div>{props.children}</div>;
};
