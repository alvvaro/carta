import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import { Pagination } from '@/types/Pagination';
import RTVE from '@/types/rtve';
import { fetchApi } from '@/utils/fetch';

const getApiPath = (code: string | undefined) => {
  if (!code) return null;

  return `https://api.rtve.es/api/collection/${code}.json`;
};

export default function useCollection(code: string | undefined) {
  const { data, ...rest } = useSWRImmutable<
    Pagination<RTVE['Collection']>,
    ClientError
  >(getApiPath(code), fetchApi, { shouldRetryOnError: false });

  return {
    collection: data,
    ...rest,
  };
}
