import { RefCallback, memo, useCallback } from 'react';

import { MediaPlayer } from 'dashjs';

const VideoPlayerWidevine = memo(function VideoPlayerWidevine({
  url,
  widevineURL,
  autoPlay = false,
}: {
  url: string;
  widevineURL: string;
  autoPlay?: boolean;
}) {
  const widevineRef: RefCallback<HTMLVideoElement> = useCallback(
    function (video) {
      const player = MediaPlayer().create();
      player.setProtectionData({
        'com.widevine.alpha': { serverURL: widevineURL },
      });
      player.initialize(video as HTMLVideoElement, url, autoPlay);

      return () => player.destroy();
    },
    [url, widevineURL, autoPlay],
  );

  return (
    <video
      id="videoPlayerWidevine"
      controls
      ref={widevineRef}
      className="aspect-video w-full"
    />
  );
});

export default VideoPlayerWidevine;
