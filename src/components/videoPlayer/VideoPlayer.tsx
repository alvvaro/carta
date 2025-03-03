import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import VideoPlayerWidevine from '@/components/videoPlayer/VideoPlayerWidevine';
import useToken from '@/hooks/useToken';

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
        className="aspect-video w-full"
      />
    : isLoading ? <Skeleton className="aspect-video w-full" />
    : token ?
      <VideoPlayerWidevine
        url={url}
        widevineURL={token.widevineURL}
        autoPlay={autoPlay}
      />
    : null
  );
}
