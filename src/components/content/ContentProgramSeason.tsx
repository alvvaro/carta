import Card from '@/components/common/Card';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import Portal from '@/components/layout/Portal';
import useProgramSeason from '@/hooks/useProgramSeason';

export default function ContentProgramSeason({
  programId,
  seasonId,
}: {
  programId: string;
  seasonId: string;
}) {
  const { videos, isLoading, error, hasMorePages, setSize } = useProgramSeason(
    programId,
    seasonId,
  );

  const handleNextPage = () => setSize((s) => s + 1);

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => console.log(videos)}
          className="apply-hover-bg-white px-4"
        >
          log season
        </button>
      </Portal>

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
                title={video.title}
                subtitle={video.shortDescription}
                href={`/video/${video.id}`}
                img={video.thumbnail}
                start={video.publicationDate}
                duration={video.duration}
                onClick={() => console.log(video)}
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

          {/* <pre className="bg-black/50 p-4 text-wrap">
            {JSON.stringify(videos, undefined, 2)}
          </pre> */}
        </>
      : null}
    </>
  );
}
