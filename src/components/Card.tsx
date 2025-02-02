import { useMemo } from 'react';

import { Link } from 'wouter';

import toDate from '@/utils/date';

export default function Card({
  img,
  logo,
  href,
  pretitle,
  title,
  subtitle,
  start,
  liveProgress,
  onClick,
}: {
  img?: string;
  logo?: string;
  href: string;
  pretitle?: string;
  title: string;
  subtitle?: string;
  start?: string;
  liveProgress?: number;
  onClick?: () => void;
}) {
  const date = useMemo(() => toDate(start)?.calendar(), [start]);

  return (
    <Link
      className="apply-hover-bg flex cursor-pointer select-none flex-col gap-2 rounded-md p-3"
      href={href}
      onClick={onClick}
    >
      <div className="relative aspect-video w-80 overflow-clip rounded-md">
        {logo ?
          <img
            src={logo}
            className="absolute bottom-0 left-0 box-content h-6 rounded-tr-md bg-black bg-opacity-50 p-4"
          />
        : null}

        <img src={img} className="aspect-video w-fit object-cover" />

        {liveProgress ?
          <div className="absolute bottom-0 h-1 w-full rounded-full bg-white bg-opacity-25">
            <div
              className="h-full bg-white"
              style={{ width: `${liveProgress}%` }}
            />
          </div>
        : null}
      </div>
      <div className="">
        <div className="opacity-40">{pretitle}</div>
        <div className="font-bold">{title}</div>
        {start ?
          <div className="opacity-80">{date}</div>
        : null}
        <div className="opacity-60">{subtitle}</div>
      </div>
    </Link>
  );
}
