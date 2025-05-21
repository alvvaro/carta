import { ChangeEvent, RefCallback, useState } from 'react';

import { useLocation, useSearchParams } from 'wouter';

import useThrottleAndDebounce from '@/hooks/useThrottleAndDebounce';
import { SEARCH_PARAM } from '@/utils/constants';

const SEARCH_PAGE = 'search';

export default function SearchBar() {
  const [location, setLocation] = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(SEARCH_PARAM);

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

  const refCallback: RefCallback<HTMLInputElement> = (input) => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        (event.key === 'k' || event.key === 'K')
      ) {
        event.preventDefault();
        input?.focus();
        input?.select();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  };

  const keyboardHint = (() => {
    let modifierKeyPrefix = 'Ctrl ';
    if (
      navigator.platform.indexOf('Mac') === 0 ||
      navigator.platform === 'iPhone' ||
      navigator.platform === 'iPad'
    ) {
      modifierKeyPrefix = '⌘';
    }

    return `${modifierKeyPrefix}K`;
  })();

  return (
    <div className="bg-black/30 p-6">
      <div className="flex w-full flex-row items-center gap-2 rounded-sm border border-white/30 has-[:focus]:border-white/60 has-[:focus]:outline-2 has-[:focus]:outline-blue-500">
        <div className="pl-4 select-none">🔍</div>
        <input
          className="flex-1 p-2 text-xl outline-0"
          placeholder="Buscar"
          autoFocus
          type="search"
          value={inputValue}
          onChange={handleChange}
          ref={refCallback}
        />
        <div className="pr-4 opacity-80 select-none">{keyboardHint}</div>
      </div>
    </div>
  );
}
