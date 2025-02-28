import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import RTVE from '@/types';
import { fetchApi } from '@/utils/fetch';

const getApiPath = (code: string | undefined) => {
  if (!code) return null;

  return `https://api.rtve.es/api/token/${code}`;
};

export default function useToken(code: string | undefined) {
  const { data, ...rest } = useSWRImmutable<RTVE['Token'], ClientError>(
    getApiPath(code),
    fetchApi,
    {
      shouldRetryOnError: false,
    },
  );

  return {
    token: data,
    ...rest,
  };
}
