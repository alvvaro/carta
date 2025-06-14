import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useLocation, useSearchParams } from 'wouter';

import useThrottleAndDebounce from '@/hooks/useThrottleAndDebounce';
import { SEARCH_PARAM } from '@/utils/constants';

const SEARCH_PAGE = 'search';

export default function SearchBar() {
  const [location, setLocation] = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(SEARCH_PARAM);

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(query || '');

  const updateSearch = useThrottleAndDebounce((newQuery: string) => {
    if (location === SEARCH_PAGE) {
      setSearchParams({ [SEARCH_PARAM]: newQuery });
    } else {
      const sParams = new URLSearchParams({ [SEARCH_PARAM]: newQuery });
      setLocation(`${SEARCH_PAGE}?${sParams.toString()}`);
    }
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    updateSearch(event.target.value);
  }

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (
        (event.metaKey || event.ctrlKey) &&
        (event.key === 'k' || event.key === 'K') &&
        inputRef.current
      ) {
        event.preventDefault();
        inputRef.current.focus();
        inputRef.current.select();
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (document.activeElement !== inputRef.current) {
      setInputValue(query || '');
    }
  }, [query]);

  const keyboardHint = (() => {
    let modifierKeyPrefix = 'Ctrl ';
    if (
      navigator.platform.startsWith('Mac') ||
      navigator.platform === 'iPhone' ||
      navigator.platform === 'iPad'
    ) {
      modifierKeyPrefix = '⌘';
    }

    return `${modifierKeyPrefix}K`;
  })();

  return (
    <div className="grid grid-cols-[42px_1fr_42px] bg-black/30 p-6">
      <div className="pointer-events-none col-start-1 col-end-2 row-start-1 row-end-2 flex items-center justify-center select-none">
        🔍
      </div>
      <input
        className="col-start-1 col-end-4 row-start-1 row-end-2 flex-1 rounded-sm border border-white/30 p-2 pl-[36px] text-xl"
        placeholder="Buscar"
        type="search"
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
      />
      <div className="pointer-events-none col-start-3 col-end-4 row-start-1 row-end-2 m-2 flex items-center justify-center opacity-80 select-none">
        {keyboardHint}
      </div>
    </div>
  );
}
