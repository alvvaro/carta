import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import RTVEVideos from '@/types/videos';
import { fetchApi } from '@/utils/fetch';

const getApiPath = (code: string | undefined) => {
  if (!code) return null;

  return `https://api.rtve.es/api/videos/${code}.json`;
};

export default function useVideo(code: string | undefined) {
  const { data, ...rest } = useSWRImmutable<RTVEVideos, ClientError>(
    getApiPath(code),
    fetchApi,
    {
      shouldRetryOnError: false,
    },
  );

  return {
    video: data,
    ...rest,
  };
}
