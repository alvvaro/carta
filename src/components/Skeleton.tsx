export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-full animate-pulse flex-col items-center justify-center bg-white/25 ${className}`}
    />
  );
}
