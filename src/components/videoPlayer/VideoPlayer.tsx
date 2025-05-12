import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import VideoPlayerWidevine from '@/components/videoPlayer/VideoPlayerWidevine';
import useToken from '@/hooks/useToken';

import VideoPlayerFairplay from './VideoPlayerFairplay';

const isSafari = () => {
  const video = document.createElement('video');
  return (
    'webkitSetMediaKeys' in video &&
    typeof video.webkitSetMediaKeys === 'function'
  );
  // return 'GestureEvent' in window;
};

export default function VideoPlayer({
  id,
  autoPlay = false,
}: {
  id: string;
  autoPlay?: boolean;
}) {
  const url = `https://ztnr.rtve.es/ztnr/${id}`;

  const { token, isLoading, error } = useToken(id);

  return (
    error ?
      <ErrorMessage
        error={error}
        text="No se han podido obtener los derechos de streaming de este contenido"
        className="aspect-video w-full"
      />
    : isLoading ? <Skeleton className="aspect-video w-full" />
    : token ?
      isSafari() ?
        <VideoPlayerFairplay
          url={url}
          fairplayURL={token.fairplayURL}
          fairplayCer={token.fairplayCer}
          autoPlay={autoPlay}
        />
      : <VideoPlayerWidevine
          url={url}
          widevineURL={token.widevineURL}
          autoPlay={autoPlay}
        />
    : null
  );
}
