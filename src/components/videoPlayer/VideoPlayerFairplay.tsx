import { RefCallback, memo, useCallback } from 'react';

import shaka from 'shaka-player';

shaka.polyfill.installAll();

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

      player.configure(
        'drm.advanced.com\\.apple\\.fps.individualizationServer',
        fairplayURL,
      );
      player.configure(
        'drm.advanced.com\\.apple\\.fps.serverCertificateUri',
        fairplayCer,
      );

      (async function init() {
        await player.attach(video as HTMLMediaElement);
        await player.load(url);
      })();

      return () => void player.destroy();
    },
    [url, fairplayURL, fairplayCer],
  );

  return shaka.Player.isBrowserSupported() ?
      <>
        <video
          id="videoPlayerFairplay"
          controls
          autoPlay={autoPlay}
          ref={fairplayRef}
          className="aspect-video w-full"
        />
        Fairplay supported
      </>
    : 'Fairplay not supported';
});

export default VideoPlayerFairplay;
