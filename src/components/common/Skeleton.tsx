export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={'flex animate-pulse flex-col items-center justify-center bg-white/25'.append(
        className,
      )}
    />
  );
}
