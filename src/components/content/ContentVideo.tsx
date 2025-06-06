import { useState } from 'react';

import shaka from 'shaka-player';

import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import Portal from '@/components/layout/Portal';
import VideoPlayer from '@/components/videoPlayer/VideoPlayer';
import VideoPlayerIframe from '@/components/videoPlayer/VideoPlayerIframe';
import useVideo from '@/hooks/useVideo';
import dateUtils from '@/utils/date';

import DebugButton from '../common/DebugButton';

const shakaSupported = shaka.Player.isBrowserSupported();

export default function ContentVideo({
  id,
  autoPlay = false,
}: {
  id: string;
  autoPlay?: boolean;
}) {
  const [playing, setPlaying] = useState(autoPlay);
  const [iframeFallback, setIframeFallback] = useState(!shakaSupported);

  const handleStartPlay = () => setPlaying(true);

  const { video, isLoading, error } = useVideo(id);

  const videoEl = video?.page.items[0];
  const date = dateUtils.toDate(videoEl?.dateOfEmission);
  const expiration = dateUtils.toDate(videoEl?.expirationDate || undefined);
  const duration = dateUtils.toDuration(videoEl?.duration);

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => setIframeFallback((s) => !s)}
          className="apply-hover-bg-white px-4"
        >
          {iframeFallback ? 'Repr. nativo' : 'Repr. embebido'}
        </button>
        {videoEl?.htmlUrl ?
          <a
            href={videoEl.htmlUrl}
            target="_blank"
            className="apply-hover-bg-white flex items-center justify-center px-4"
          >
            Ver en RTVE Play
          </a>
        : null}
      </Portal>

      <DebugButton d={video} />

      {error ?
        <ErrorMessage className="aspect-video w-full" error={error} />
      : isLoading ?
        <Skeleton className="aspect-video w-full" />
      : videoEl ?
        <>
          {iframeFallback ?
            <VideoPlayerIframe id={id} />
          : playing ?
            <VideoPlayer id={id} autoPlay />
          : <div className="relative">
              <img
                src={videoEl.thumbnail as string} // FIXME
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
            {videoEl.title}
            {videoEl.productionDate ? ` (${videoEl.productionDate})` : null}
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
