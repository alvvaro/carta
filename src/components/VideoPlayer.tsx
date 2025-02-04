import useToken from '@/hooks/useToken';

import ErrorMessage from './ErrorMessage';
import Skeleton from './Skeleton';
import VideoPlayerWidevine from './VideoPlayerWidevine';

export default function VideoPlayer({
  id,
  autoPlay = false,
}: {
  id: string;
  autoPlay?: boolean;
}) {
  const url = `https://ztnr.rtve.es/ztnr/${id}.mpd`;

  const { token, isLoading, error } = useToken(id);

  return (
    error ?
      <ErrorMessage
        error={error}
        text="No se han podido obtener los derechos de streaming de este contenido"
      />
    : isLoading ? <Skeleton />
    : token ?
      <VideoPlayerWidevine
        url={url}
        widevineURL={token.widevineURL}
        autoPlay={autoPlay}
      />
    : null
  );
}
