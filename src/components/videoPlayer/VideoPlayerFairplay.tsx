import { RefCallback, memo, useCallback, useRef } from 'react';

import shaka from 'shaka-player';

const VideoPlayerFairplay = memo(function VideoPlayerFairplay({
  url,
  fairplayURL,
  fairplayCer,
  autoPlay = false,
  handleError,
}: {
  url: string;
  fairplayURL: string;
  fairplayCer: string;
  autoPlay?: boolean;
  handleError?: (error: unknown) => void;
}) {
  const playerRef = useRef<shaka.Player | null>(null);

  const fairplayRef: RefCallback<HTMLVideoElement> = useCallback(
    function (video) {
      if (playerRef.current) return;

      const player = new shaka.Player();

      const config: shaka.extern.PlayerConfiguration = {
        drm: {
          servers: {
            'com.apple.fps.1_0': fairplayURL,
          },
          advanced: {
            // @ts-expect-error -- config object does not need to be fully formed
            'com.apple.fps.1_0': {
              serverCertificateUri: fairplayCer,
            },
          },
        },
      };

      player.configure(config);

      (async function init() {
        try {
          await player.attach(video as HTMLMediaElement);
          await player.load(`${url}.m3u8`);
          playerRef.current = player;
        } catch (error) {
          handleError?.(error);
        }
      })();

      return () => void player.destroy();
    },
    [url, fairplayURL, fairplayCer, handleError],
  );

  return (
    <video
      id="videoPlayerFairplay"
      controls
      autoPlay={autoPlay}
      ref={fairplayRef}
      className="aspect-video w-full"
    />
  );
});

export default VideoPlayerFairplay;
