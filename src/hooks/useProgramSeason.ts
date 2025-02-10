import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import RTVEVideos from '@/types/videos';
import { fetchApi } from '@/utils/fetch';

const getApiPath = (
  programCode: string | undefined,
  seasonCode: string | undefined,
) => {
  if (!programCode || !seasonCode) return null;

  return `https://api.rtve.es/api/programas/${programCode}/temporadas/${seasonCode}/videos.json`;
};

export default function useProgramSeason(
  programCode: string | undefined,
  seasonCode: string | undefined,
) {
  const { data, ...rest } = useSWRImmutable<RTVEVideos, ClientError>(
    getApiPath(programCode, seasonCode),
    fetchApi,
    {
      shouldRetryOnError: false,
    },
  );

  return {
    videos: data,
    ...rest,
  };
}
