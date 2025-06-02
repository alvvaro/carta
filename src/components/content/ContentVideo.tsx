import { useMemo, useState } from 'react';

import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import Portal from '@/components/layout/Portal';
import VideoPlayer from '@/components/videoPlayer/VideoPlayer';
import useVideo from '@/hooks/useVideo';
import dateUtils from '@/utils/date';

export default function ContentVideo({
  id,
  autoPlay = false,
}: {
  id: string;
  autoPlay?: boolean;
}) {
  const [playing, setPlaying] = useState(autoPlay);

  const handleStartPlay = () => setPlaying(true);

  const { video, isLoading, error } = useVideo(id);

  const videoEl = video?.page.items[0];
  const date = useMemo(
    () => dateUtils.toDate(videoEl?.dateOfEmission),
    [videoEl?.dateOfEmission],
  );
  const expiration = useMemo(
    () => dateUtils.toDate(videoEl?.expirationDate || undefined),
    [videoEl?.expirationDate],
  );
  const duration = useMemo(
    () => dateUtils.toDuration(videoEl?.duration),
    [videoEl?.duration],
  );

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => console.log(video)}
          className="apply-hover-bg-white px-4"
        >
          log video
        </button>
      </Portal>

      {error ?
        <ErrorMessage className="aspect-video w-full" error={error} />
      : isLoading ?
        <Skeleton className="aspect-video w-full" />
      : videoEl ?
        <>
          {playing ?
            <VideoPlayer id={id} autoPlay />
          : <div className="relative">
              <img
                src={videoEl.thumbnail}
                className="aspect-video w-full object-cover"
              />
              <button
                onClick={handleStartPlay}
                className="absolute top-0 h-full w-full bg-black/40 hover:bg-black/60 hover:underline"
              >
                PLAY
              </button>
            </div>
          }

          <div className="p-4 text-xl font-bold">
            {videoEl.title}{' '}
            {videoEl.productionDate ? `(${videoEl.productionDate})` : null}
          </div>

          {duration ?
            <div className="p-4">{duration}</div>
          : null}

          {videoEl.description ?
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: videoEl.description }}
            />
          : null}

          {(
            videoEl.director ||
            videoEl.casting ||
            videoEl.producedBy ||
            videoEl.technicalTeam
          ) ?
            <div className="p-4">
              {videoEl.director ?
                <div>Dirigido por: {videoEl.director}</div>
              : null}
              {videoEl.casting ?
                <div>Reparto: {videoEl.casting}</div>
              : null}
              {videoEl.producedBy ?
                <div>Producido por: {videoEl.producedBy}</div>
              : null}
              {videoEl.technicalTeam ?
                <div>Equipo técnico: {videoEl.technicalTeam}</div>
              : null}
            </div>
          : null}

          {date || expiration ?
            <div className="p-4">
              {date ?
                <div>Publicado el: {date.format('D MMMM YYYY LT')}</div>
              : null}
              {expiration ?
                <div>
                  Disponible hasta: {expiration.format('D MMMM YYYY LT')}
                </div>
              : null}
            </div>
          : null}
        </>
      : null}
    </>
  );
}
