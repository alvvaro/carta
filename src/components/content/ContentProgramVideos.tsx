import Card from '@/components/common/Card';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import useProgramVideos from '@/hooks/useProgramVideos';

import DebugButton from '../common/DebugButton';

export default function ContentProgramVideos({
  programId,
}: {
  programId: string;
}) {
  const { videos, isLoading, error, hasMorePages, setSize } =
    useProgramVideos(programId);

  const handleNextPage = () => setSize((s) => s + 1);

  return (
    <>
      <DebugButton d={videos} />

      {error ?
        <ErrorMessage
          className="h-80 w-full"
          error={error}
          text="Vídeos no disponibles"
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

          {/* <pre className="bg-black/50 p-4 text-wrap">
            {JSON.stringify(videos, undefined, 2)}
          </pre> */}
        </>
      : null}
    </>
  );
}
