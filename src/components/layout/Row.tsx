import { ReactNode, useEffect, useRef, useState } from 'react';

export default function Row({
  title,
  children,
  onClick,
}: {
  title: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const rowRef = useRef<HTMLDivElement | null>(null);
  const tickingRef = useRef(false);

  const handleTitleClick = () => {
    if (canScrollLeft) {
      rowRef.current?.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }

    onClick?.();
  };

  const moveLeft = () => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: rowRef.current.offsetWidth * -0.85,
      behavior: 'smooth',
    });
  };

  const moveRight = () => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: rowRef.current.offsetWidth * 0.85,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!rowRef.current) return;

    const observer = new ResizeObserver((entries) =>
      entries.forEach((entry) => {
        const div = entry.target as HTMLDivElement;
        setIsOverflowing(div.offsetWidth < div.scrollWidth);
      }),
    );

    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!rowRef.current) return;
    const div = rowRef.current;

    const listenerCallback = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          tickingRef.current = false;

          const div = rowRef.current;
          if (!div) return;

          setCanScrollLeft(div.scrollLeft !== 0);
          setCanScrollRight(
            div.scrollLeft !== div.scrollWidth - div.offsetWidth,
          );
        });

        tickingRef.current = true;
      }
    };

    div.addEventListener('scroll', listenerCallback);
    return () => div.removeEventListener('scroll', listenerCallback);
  }, []);

  return (
    <div className="">
      <div className="flex flex-row p-3 pb-0">
        {canScrollLeft || onClick ?
          <button
            onClick={handleTitleClick}
            className="apply-hover-bg flex-1 p-3 text-start text-xl select-none"
          >
            {title}
          </button>
        : <div className="flex-1 p-3 text-start text-xl select-none">
            {title}
          </div>
        }

        {isOverflowing ?
          <>
            <button
              className="apply-hover-bg w-12 text-xl disabled:opacity-25"
              onClick={moveLeft}
              disabled={!canScrollLeft}
            >
              ←
            </button>
            <button
              className="apply-hover-bg w-12 text-xl disabled:opacity-25"
              onClick={moveRight}
              disabled={!canScrollRight}
            >
              →
            </button>
          </>
        : null}
      </div>

      <div className="flex flex-row overflow-x-auto p-3 pt-0" ref={rowRef}>
        {children}
      </div>
    </div>
  );
}
