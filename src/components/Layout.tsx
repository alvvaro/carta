import { ReactNode } from 'react';

import { Link, useLocation } from 'wouter';

import logoSvg from '@/static/logo.svg';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[900px] border-x-[1px] border-white/10">
      <div className="sticky top-0 z-10 flex h-14 flex-row border-b-[1px] border-white/10 bg-black/90 backdrop-blur-md">
        <LogoLink className="apply-hover-bg-white flex-1 p-4">
          <div
            className="h-full bg-contain bg-left bg-no-repeat"
            style={{
              backgroundImage: `url(${logoSvg})`,
            }}
          />
        </LogoLink>
        <div id="header-slot" className="flex flex-row"></div>
      </div>

      <div className="flex flex-col divide-y-[1px] divide-white/10">
        {children}
      </div>
    </div>
  );
}

function LogoLink({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const [location] = useLocation();
  const isAtHome = location === '/';

  const handleGoUp = () => window.scrollTo(0, 0);

  return isAtHome ?
      <button onClick={handleGoUp} className={className}>
        {children}
      </button>
    : <Link href="/" className={className}>
        {children}
      </Link>;
}
