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
  const { videos, isLoading, error } = useProgramSeason(programId, seasonId);

  const videoElems = videos?.page.items;

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
        <ErrorMessage className="w-full" error={error} />
      : isLoading ?
        <Skeleton className="w-full" />
      : videoElems ?
        <>
          {videoElems.map((videoEl) => (
            <div key={videoEl.uri} className="bg-black/50 p-1">
              <Card
                title={videoEl.title}
                subtitle={videoEl.shortDescription}
                href={`/video/${videoEl.id}`}
                img={videoEl.thumbnail}
                start={videoEl.publicationDate}
                onClick={() => console.log(videoEl)}
              />
            </div>
          ))}

          {/* <pre className="bg-black/50 p-4 text-wrap">
            {JSON.stringify(videos, undefined, 2)}
          </pre> */}
        </>
      : null}
    </>
  );
}
