import { RefCallback, memo, useCallback } from 'react';

import shaka from 'shaka-player';

const VideoPlayerFairplay = memo(function VideoPlayerFairplay({
  url,
  fairplayURL,
  fairplayCer,
  autoPlay = false,
}: {
  url: string;
  fairplayURL: string;
  fairplayCer: string;
  autoPlay?: boolean;
}) {
  const fairplayRef: RefCallback<HTMLVideoElement> = useCallback(
    function (video) {
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
        await player.attach(video as HTMLMediaElement);
        await player.load(`${url}.m3u8`);
      })();

      return () => void player.destroy();
    },
    [url, fairplayURL, fairplayCer],
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
