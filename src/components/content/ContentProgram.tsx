import { Link, useSearchParams } from 'wouter';

import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import Portal from '@/components/layout/Portal';
import useProgram from '@/hooks/useProgram';
import { strConcat } from '@/utils/string';

import ContentProgramSeason from './ContentProgramSeason';
import ContentProgramVideos from './ContentProgramVideos';

export default function ContentProgram({ id }: { id: string }) {
  const { program, isLoading, error } = useProgram(id);

  const programEl = program?.page.items[0];
  const seasons = (programEl?.seasons || []).toSorted(
    (seasonA, seasonB) => seasonA.orden - seasonB.orden,
  );

  const [searchParams] = useSearchParams();

  const selectedSeason = parseInt(searchParams.get('season') || '0') - 1;
  const selectedSeasonId = seasons.at(selectedSeason)?.id;

  const getSeasonHref = (index: number) => {
    const url = new URL(window.location.toString());
    url.searchParams.set('season', (index + 1).toString());
    return url.toString();
  };

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => console.log(program)}
          className="apply-hover-bg-white px-4"
        >
          log program
        </button>
      </Portal>

      {error ?
        <ErrorMessage className="aspect-video w-full" error={error} />
      : isLoading ?
        <Skeleton className="aspect-video w-full" />
      : programEl ?
        <>
          <img
            src={programEl.imgBanner2 || programEl.imgBanner}
            className="block aspect-video w-full object-cover"
          />

          <div className="p-4 text-xl font-bold">{programEl.title}</div>

          {programEl.emission ?
            <div className="p-4">
              <div>{programEl.emission}</div>
            </div>
          : null}

          {programEl.longDescription ?
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: programEl.longDescription }}
            />
          : null}

          {programEl.seasons?.length ?
            <>
              <div className="bg-black/50 p-4 text-xl">
                {programEl.seasons.length} temporadas
              </div>
              <div className="flex flex-row flex-wrap bg-black/50">
                {seasons.map((season, index) => (
                  <Link
                    key={season.id}
                    className={strConcat(
                      'apply-hover-bg border-r-[1px] border-white/10 p-4',
                      selectedSeasonId === season.id ?
                        'font-bold underline'
                      : '',
                    )}
                    href={getSeasonHref(index)}
                  >
                    {season.longTitle}
                  </Link>
                ))}
              </div>
            </>
          : null}

          {programEl.seasons?.length ?
            <ContentProgramSeason
              programId={programEl.id}
              seasonId={selectedSeasonId}
            />
          : <ContentProgramVideos programId={programEl.id} />}

          {programEl.showMan || programEl.casting ?
            <div className="p-4">
              {programEl.showMan ?
                <div>Presentado por: {programEl.showMan}</div>
              : null}
              {programEl.casting ?
                <div>Reparto: {programEl.casting}</div>
              : null}
            </div>
          : null}
        </>
      : null}
    </>
  );
}
