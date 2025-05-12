import { RefCallback, memo, useCallback, useRef } from 'react';

import shaka from 'shaka-player';

const VideoPlayerWidevine = memo(function VideoPlayerWidevine({
  url,
  widevineURL,
  autoPlay = false,
  handleError,
}: {
  url: string;
  widevineURL: string;
  autoPlay?: boolean;
  handleError?: (error: unknown) => void;
}) {
  const playerRef = useRef<shaka.Player | null>(null);

  const widevineRef: RefCallback<HTMLVideoElement> = useCallback(
    function (video) {
      if (playerRef.current) return;

      const player = new shaka.Player();

      const config: shaka.extern.PlayerConfiguration = {
        // @ts-expect-error -- config object does not need to be fully formed
        drm: {
          servers: {
            'com.widevine.alpha': widevineURL,
          },
        },
      };

      player.configure(config);

      (async function init() {
        try {
          await player.attach(video as HTMLMediaElement);
          await player.load(`${url}.mpd`);
          playerRef.current = player;
        } catch (error) {
          handleError?.(error);
        }
      })();

      return () => void player.destroy();
    },
    [url, widevineURL, handleError],
  );

  return (
    <video
      id="videoPlayerWidevine"
      controls
      autoPlay={autoPlay}
      ref={widevineRef}
      className="aspect-video w-full"
    />
  );
});

export default VideoPlayerWidevine;
