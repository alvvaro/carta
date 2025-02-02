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
      <div className="apply-hover-bg p-6 pb-0 text-xl" onClick={onClick}>
        {title}
      </div>
      <div className="flex flex-row overflow-x-auto p-3">{children}</div>
    </div>
  );
}
