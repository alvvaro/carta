import classNames from 'classnames';

export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={classNames(
        'flex animate-pulse flex-col items-center justify-center bg-white/25',
        className,
      )}
    />
  );
}
