import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[900px] w-full mx-auto border-x-[1px]  border-white border-opacity-10">
      {/* <h1 className="text-4xl font-bold p-6">rtve play</h1> */}
      {children}
    </div>
  );
}
