import { useSearchParams } from 'wouter';

import Card from '@/components/common/Card';
import DebugButton from '@/components/common/DebugButton';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import Tabs from '@/components/common/Tabs';
import useProgramSeason from '@/hooks/useProgramSeason';
import RTVE from '@/types/rtve';

export default function ContentProgramSeason({
  programId,
  seasons,
}: {
  programId: string;
  seasons: RTVE['Season'][];
}) {
  const sortedSeasons = seasons.toSorted(
    (seasonA, seasonB) => seasonA.orden - seasonB.orden,
  );

  const [searchParams] = useSearchParams();

  const selectedSeason = Number.parseInt(searchParams.get('season') || '0') - 1;
  const selectedSeasonId = sortedSeasons.at(selectedSeason)?.id || -1;

  const { videos, isLoading, error, hasMorePages, setSize } = useProgramSeason(
    programId,
    selectedSeasonId,
  );

  const handleNextPage = () => setSize((s) => s + 1);

  return (
    <>
      <DebugButton d={videos} position="right" />

      {sortedSeasons.length ?
        <Tabs
          items={sortedSeasons.map((season, index) => ({
            id: season.id,
            title: season.longTitle,
            href: `?season=${index + 1}`,
          }))}
          selectedItem={selectedSeasonId}
          className="bg-black/50"
        />
      : null}

      {error ?
        <ErrorMessage
          className="h-80 w-full"
          error={error}
          text="Temporada no disponible"
        />
      : isLoading ?
        <Skeleton className="h-80 w-full" />
      : videos ?
        <>
          {videos.map((video) => (
            <div key={video.uri} className="bg-black/50 p-1">
              <Card
                horizontal
                title={video.title}
                subtitle={video.shortDescription as string} // FIXME
                href={`/video/${video.id}`}
                img={video.thumbnail as string} // FIXME
                start={video.publicationDate}
                duration={video.duration}
                debug={video}
              />
            </div>
          ))}

          {hasMorePages ?
            <div className="bg-black/50 p-1">
              <button
                className="apply-hover-bg w-full p-4"
                onClick={handleNextPage}
              >
                ▽ Más antiguos
              </button>
            </div>
          : null}
        </>
      : null}
    </>
  );
}
