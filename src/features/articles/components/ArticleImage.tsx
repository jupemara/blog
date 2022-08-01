import Image from 'next/image';
import React from 'react';
import { FC } from 'react';

export const ArticleImage: FC = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) => {
  let w = 128,
    h = 128;
  // expect img.src attribute like this "/path-to-image.jpg?w=300&h=400"
  if (!props.src) {
    return <div></div>;
  }
  if (props.src.split('?').length < 2) {
    return <Image alt={props.alt} src={props.src} width={w} height={h}></Image>;
  }
  const qs = props.src.split('?')[1].split('&');
  for (const kv of qs) {
    const [k, v] = kv.split('=');
    if (k === 'w') {
      w = parseInt(v, 10);
    }
    if (k === 'h') {
      h = parseInt(v, 10);
    }
    if (w !== 128 && h !== 128) {
      break;
    }
  }
  return <Image alt={props.alt} src={props.src} width={w} height={h}></Image>;
};
