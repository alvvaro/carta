import { Link } from 'wouter';

import dateUtils from '@/utils/date';

export default function Card({
  img,
  logo,
  href,
  pretitle,
  title,
  subtitle,
  start,
  liveProgress,
  duration,
  onClick,
  horizontal = false,
}: {
  img?: string;
  logo?: string;
  href: string;
  pretitle?: string;
  title: string;
  subtitle?: string;
  start?: string;
  liveProgress?: number;
  duration?: number;
  onClick?: () => void;
  horizontal?: boolean;
}) {
  const startStr = dateUtils.toCalendar(start);
  const durationStr = dateUtils.toDuration(duration);

  return (
    <Link
      className={'apply-hover-bg flex cursor-pointer p-3 select-none hover:[&_.card-title]:underline'.append(
        horizontal ? 'flex-row gap-4' : 'flex-col gap-2',
      )}
      href={href}
      onClick={onClick}
    >
      <div className="relative aspect-video w-80 shrink-0 overflow-clip rounded-md">
        {logo ?
          <img
            src={logo}
            loading="lazy"
            className="absolute bottom-0 left-0 box-content h-6 rounded-tr-md bg-black/50 p-4"
          />
        : null}

        <img
          src={img}
          loading="lazy"
          className="aspect-video w-fit object-cover"
        />

        {liveProgress ?
          <div className="absolute bottom-0 h-1 w-full rounded-full bg-white/25">
            <div
              className="h-full bg-white"
              style={{ width: `${liveProgress}%` }}
            />
          </div>
        : null}
      </div>
      <div className="">
        <div className="opacity-40">{pretitle}</div>
        <div className="card-title font-bold">{title}</div>

        {durationStr || startStr ?
          <div className="opacity-80">
            {[durationStr, startStr].compact().interleave(' · ')}
          </div>
        : null}

        <div className="opacity-60">{subtitle}</div>
      </div>
    </Link>
  );
}
