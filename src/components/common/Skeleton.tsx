import { strConcat } from '@/utils/string';

export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={strConcat(
        'flex animate-pulse flex-col items-center justify-center bg-white/25',
        className,
      )}
    />
  );
}
