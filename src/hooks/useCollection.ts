import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import { RTVECollection } from '@/types/collection';
import { fetchApi } from '@/utils/fetch';

const getApiPath = (code: string | undefined) => {
  if (!code) return null;

  return `https://api.rtve.es/api/collection/${code}.json`;
};

export default function useCollection(code: string | undefined) {
  const { data, ...rest } = useSWRImmutable<RTVECollection, ClientError>(
    getApiPath(code),
    fetchApi,
    { shouldRetryOnError: false },
  );

  return {
    collection: data,
    ...rest,
  };
}
