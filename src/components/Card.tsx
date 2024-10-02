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
      className="flex rounded-md apply-hover-bg flex-col gap-2 p-3 select-none cursor-pointer"
      href={href}
      onClick={onClick}
    >
      <div className="w-80 aspect-video rounded-md overflow-clip relative">
        {logo ?
          <img
            src={logo}
            className="absolute bottom-0 left-0 h-6 p-4 box-content bg-black bg-opacity-50 rounded-tr-md"
          />
        : null}

        <img src={img} className="w-fit aspect-video object-cover" />

        {liveProgress ?
          <div className="absolute bottom-0 rounded-full h-1 w-full bg-white bg-opacity-25">
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
