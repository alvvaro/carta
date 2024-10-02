import { ReactNode } from 'react';

export default function Row({
  title,
  children,
  onClick,
}: {
  title: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="">
      <div className="text-xl p-6 pb-0 apply-hover-bg" onClick={onClick}>
        {title}
      </div>
      <div className="flex flex-row overflow-x-auto p-3">{children}</div>
    </div>
  );
}
