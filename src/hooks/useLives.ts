import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import { fetchApi } from '@/utils/fetch';

const getApiPath = (code: string | undefined) => {
  if (!code) return null;

  return `https://api.rtve.es/api/lives/agr-directos/${code}/directos.json`;
};

export default function useLives(code: string | undefined) {
  const { data, ...rest } = useSWRImmutable<RTVELives, ClientError>(
    getApiPath(code),
    fetchApi,
    {
      shouldRetryOnError: false,
      refreshInterval: 15 * 1000,
    },
  );

  return {
    lives: data,
    ...rest,
  };
}
