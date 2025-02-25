import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import RTVE from '@/types';
import { fetchApi } from '@/utils/fetch';

const getApiPath = () => {
  return 'https://www.rtve.es/play/index_apps.json';
};

export default function useHome() {
  const { data, ...rest } = useSWRImmutable<RTVE['PlayIndexApps'], ClientError>(
    getApiPath(),
    fetchApi,
    { shouldRetryOnError: false },
  );

  return {
    home: data,
    ...rest,
  };
}
