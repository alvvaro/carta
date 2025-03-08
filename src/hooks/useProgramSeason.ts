import useSWRInfinite from 'swr/infinite';

import { ClientError } from '@/lib/clientError';
import RTVEVideos from '@/types/videos';
import { fetchApi } from '@/utils/fetch';

const getApiPath =
  (programId: string | undefined, seasonId: number | undefined) =>
  (
    pageIndex: number,
    prevPageData: { page: { totalPages: number } } | undefined,
  ) => {
    if (!programId || !seasonId) return null;
    if (prevPageData && prevPageData.page.totalPages === pageIndex) return null;

    return `https://api.rtve.es/api/programas/${programId}/temporadas/${seasonId}/videos.json?page=${pageIndex + 1}`;
  };

export default function useProgramSeason(
  programId: string | undefined,
  seasonId: number | undefined,
) {
  const { data, isLoading, size, ...rest } = useSWRInfinite<
    RTVEVideos,
    ClientError
  >(getApiPath(programId, seasonId), fetchApi, {
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
