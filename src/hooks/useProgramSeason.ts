import useSWRInfinite from 'swr/infinite';

import { ClientError } from '@/lib/clientError';
import RTVEVideos from '@/types/videos';
import { fetchApi } from '@/utils/fetch';

const getApiPath =
  (programCode: string | undefined, seasonCode: string | undefined) =>
  (
    pageIndex: number,
    prevPageData: { page: { totalPages: number } } | undefined,
  ) => {
    if (!programCode || !seasonCode) return null;
    if (prevPageData && prevPageData.page.totalPages === pageIndex) return null;

    return `https://api.rtve.es/api/programas/${programCode}/temporadas/${seasonCode}/videos.json?page=${pageIndex + 1}`;
  };

export default function useProgramSeason(
  programCode: string | undefined,
  seasonCode: string | undefined,
) {
  const { data, isLoading, size, ...rest } = useSWRInfinite<
    RTVEVideos,
    ClientError
  >(getApiPath(programCode, seasonCode), fetchApi, {
    shouldRetryOnError: false,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateFirstPage: false,
  });

  const isLoadingMore =
    isLoading || (size > 0 && !!data && typeof data.at(-1) === 'undefined');

  const hasMorePages = (() => {
    const lastPage = data?.at(-1);
    if (!lastPage) return false;

    return lastPage.page.number !== lastPage.page.totalPages;
  })();

  const videos = data?.flatMap(({ page }) => page.items);

  return {
    videos,
    data,
    isLoading,
    size,
    ...rest,
    isLoadingMore,
    hasMorePages,
  };
}
