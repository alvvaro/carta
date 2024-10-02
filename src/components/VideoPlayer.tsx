import useToken from '@/hooks/useToken';

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
    error ? 'error'
    : isLoading ? 'isLoading'
    : token ?
      <VideoPlayerWidevine
        url={url}
        widevineURL={token.widevineURL}
        autoPlay={autoPlay}
      />
    : null
  );
}
