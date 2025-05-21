import useSWRImmutable from 'swr/immutable';
import { useSearchParams } from 'wouter';

import { ClientError } from '@/lib/clientError';
import RTVE from '@/types/rtve';
import { SEARCH_PARAM } from '@/utils/constants';
import { fetchApi } from '@/utils/fetch';

// https://api.rtve.es/api/search/results?search=caracola&context=tve&tipology=video&type=completo

const getApiPath = (query: string | null) => {
  if (!query) return null;

  return `https://api.rtve.es/api/search/results?search=${query}&context=tve&tipology=video&type=completo`;
};

export default function useSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get(SEARCH_PARAM);

  const { data, ...rest } = useSWRImmutable<RTVE['SearchResults'], ClientError>(
    getApiPath(query),
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
