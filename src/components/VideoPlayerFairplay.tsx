import { memo } from 'react';

import dashjs from 'dashjs';

const VideoPlayerWidevine = memo(function VideoPlayerWidevine({
  url,
  widevineURL,
  autoPlay = false,
}: {
  url: string;
  widevineURL: string;
  autoPlay?: boolean;
}) {
  return (
    <video
      id="videoPlayer"
      controls
      autoPlay={false}
      ref={(video) => {
        const player = dashjs.MediaPlayer().create();
        player.setProtectionData({
          'com.widevine.alpha': { serverURL: widevineURL },
        });
        player.initialize(video as HTMLVideoElement, url, autoPlay);

        return () => player.destroy();
      }}
      className="w-full aspect-video"
    />
  );
});

export default VideoPlayerWidevine;
