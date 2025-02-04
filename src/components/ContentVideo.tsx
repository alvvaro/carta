import { useMemo, useState } from 'react';

import useVideo from '@/hooks/useVideo';
import toDate from '@/utils/date';

import Portal from './Portal';
import VideoPlayer from './VideoPlayer';

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
    () => toDate(videoEl?.dateOfEmission),
    [videoEl?.dateOfEmission],
  );
  const expiration = useMemo(
    () => toDate(videoEl?.expirationDate || undefined),
    [videoEl?.expirationDate],
  );

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => console.log(video)}
          className="apply-hover-underline"
        >
          log video
        </button>
      </Portal>

      {error ?
        'errorVideo'
      : isLoading ?
        'isLoadingVideo'
      : videoEl ?
        <>
          <div className="relative aspect-video w-full">
            {playing ?
              <VideoPlayer id={id} autoPlay />
            : <>
                <img src={videoEl.thumbnail} />
                <button
                  onClick={handleStartPlay}
                  className="absolute top-0 h-full w-full bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60 hover:underline"
                >
                  PLAY
                </button>
              </>
            }
          </div>

          <div className="p-4 text-xl font-bold">
            {videoEl.title}{' '}
            {videoEl.productionDate ? `(${videoEl.productionDate})` : null}
          </div>

          {videoEl.description ?
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: videoEl.description }}
            />
          : null}

          {videoEl.director || videoEl.casting ?
            <div className="p-4">
              {videoEl.director ?
                <div>Dirigido por: {videoEl.director}</div>
              : null}
              {videoEl.casting ?
                <div>Casting: {videoEl.casting}</div>
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
