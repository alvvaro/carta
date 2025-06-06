import useSWRImmutable from 'swr/immutable';
import { useSearchParams } from 'wouter';

import { ClientError } from '@/lib/clientError';
import RTVE from '@/types/rtve';
import { SEARCH_PARAM } from '@/utils/constants';
import { fetchApi } from '@/utils/fetch';

// https://api.rtve.es/api/search/results?search=caracola&context=tve&tipology=video&type=completo

const getApiPath = (searchParams: URLSearchParams) => {
  const query = searchParams.get(SEARCH_PARAM);
  if (!query) return null;

  const searchURL = new URL('https://api.rtve.es/api/search/results');

  for (const [key, value] of searchParams.entries().toArray()) {
    if (key === SEARCH_PARAM) {
      searchURL.searchParams.append('search', value);
    } else {
      searchURL.searchParams.append(key, value);
    }
  }

  return searchURL.toString();
};

export default function useSearch() {
  const [searchParams] = useSearchParams();

  const { data, ...rest } = useSWRImmutable<RTVE['SearchResults'], ClientError>(
    getApiPath(searchParams),
    fetchApi,
    {
      shouldRetryOnError: false,
      keepPreviousData: true,
    },
  );

  return {
    results: data,
    ...rest,
  };
}
