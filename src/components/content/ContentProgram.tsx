import { useSearchParams } from 'wouter';

import DebugButton from '@/components/common/DebugButton';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import Tabs from '@/components/common/Tabs';
import useProgram from '@/hooks/useProgram';

import ContentProgramSeason from './ContentProgramSeason';
import ContentProgramVideos from './ContentProgramVideos';

const VIDEOS = 'videos';
const SEASONS = 'seasons';

const filters = [
  { id: SEASONS, title: 'Temporadas', href: `?filter=${SEASONS}` },
  { id: VIDEOS, title: 'Videos', href: `?filter=${VIDEOS}` },
];

export default function ContentProgram({ id }: { id: string }) {
  const { programs, isLoading, error } = useProgram(id);

  const program = programs?.page.items[0];
  const hasSeasons = program?.seasons?.length || false;

  const [searchParams] = useSearchParams();
  const selectedFilter =
    searchParams.get('filter') || (hasSeasons ? SEASONS : VIDEOS);

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

          {hasSeasons ?
            <Tabs
              items={filters}
              selectedItem={selectedFilter}
              className="bg-black/50"
            />
          : null}

          {selectedFilter === SEASONS ?
            <ContentProgramSeason
              seasons={program?.seasons || []}
              programId={program.id}
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
