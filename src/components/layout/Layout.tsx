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
        <div id="header-slot" className="flex flex-row" />
      </div>

      <div className="flex min-h-dvh flex-col divide-y-[1px] divide-white/10">
        {children}
      </div>

      <div className="border-t-[1px] border-white/10 bg-white/15 p-4">
        <div className="flex flex-row">
          <div className="flex-1 opacity-50">
            Carta — Un frontal alternativo para RTVE Play de código abierto
          </div>
        </div>
        <div className="opacity-50">
          <Link href="/about" className="hover:underline">
            Acerca
          </Link>
          {' | '}
          <a
            href="https://github.com/alvvaro/carta"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
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
