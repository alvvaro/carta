import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import RTVETopic from '@/types/topic';
import { fetchApi } from '@/utils/fetch';

const getApiPath = (code: string | undefined, type?: string) => {
  if (!code) return null;

  const url = new URL(`https://api.rtve.es/api/tematicas/${code}/videos.json`);

  if (type) {
    url.searchParams.append('type', type);
  }

  return url.toString();
};

export default function useTopic(code: string | undefined, type?: string) {
  const { data, ...rest } = useSWRImmutable<RTVETopic, ClientError>(
    getApiPath(code, type),
    fetchApi,
    { shouldRetryOnError: false },
  );

  return {
    topic: data,
    ...rest,
  };
}
