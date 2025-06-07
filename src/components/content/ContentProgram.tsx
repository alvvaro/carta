import classNames from 'classnames';
import { Link, useSearchParams } from 'wouter';

import DebugButton from '@/components/common/DebugButton';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import useProgram from '@/hooks/useProgram';

import ContentProgramSeason from './ContentProgramSeason';
import ContentProgramVideos from './ContentProgramVideos';

export default function ContentProgram({ id }: { id: string }) {
  const { programs, isLoading, error } = useProgram(id);

  const program = programs?.page.items[0];
  const seasons = (program?.seasons || []).toSorted(
    (seasonA, seasonB) => seasonA.orden - seasonB.orden,
  );

  const [searchParams] = useSearchParams();

  const selectedSeason = Number.parseInt(searchParams.get('season') || '0') - 1;
  const selectedSeasonId = seasons.at(selectedSeason)?.id || -1;

  const getSeasonHref = (index: number) => {
    const url = new URL(window.location.toString());
    url.searchParams.set('season', (index + 1).toString());
    return url.toString();
  };

  return (
    <>
      <DebugButton d={programs} />

      {error ?
        <ErrorMessage className="aspect-video w-full" error={error} />
      : isLoading ?
        <Skeleton className="aspect-video w-full" />
      : program ?
        <>
          <img
            src={
              program.imgPortada ||
              program.imgPortada2 ||
              program.imgBanner2 ||
              program.imgBanner ||
              undefined
            }
            className="block aspect-video w-full object-cover"
          />

          <div className="p-4 text-xl font-bold">{program.title}</div>

          {program.emission ?
            <div className="p-4">
              <div>{program.emission}</div>
            </div>
          : null}

          {program.longDescription ?
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: program.longDescription }}
            />
          : program.description ?
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: program.description }}
            />
          : null}

          {program.seasons?.length ?
            <>
              <div className="bg-black/50 p-4 text-xl">
                {program.seasons.length} temporadas
              </div>
              <div className="flex flex-row flex-wrap bg-black/50">
                {seasons.map((season, index) => (
                  <Link
                    key={season.id}
                    className={classNames(
                      'apply-hover-bg border-r-[1px] border-white/10 p-4',
                      selectedSeasonId === season.id ?
                        'font-bold underline'
                      : undefined,
                    )}
                    href={getSeasonHref(index)}
                  >
                    {season.longTitle}
                  </Link>
                ))}
              </div>
            </>
          : null}

          {program.seasons?.length ?
            <ContentProgramSeason
              programId={program.id}
              seasonId={selectedSeasonId}
            />
          : <ContentProgramVideos programId={program.id} />}

          {program.showMan || program.casting ?
            <div className="p-4">
              {program.showMan ?
                <div>Presentado por: {program.showMan}</div>
              : null}
              {program.casting ?
                <div>Reparto: {program.casting}</div>
              : null}
            </div>
          : null}

          {program.technicalTeam || program.director ?
            <div className="p-4">
              {program.showMan ?
                <div>Dirigido por: {program.director}</div>
              : null}
              {program.technicalTeam ?
                <div>Equipo: {program.technicalTeam}</div>
              : null}
            </div>
          : null}
        </>
      : null}
    </>
  );
}
