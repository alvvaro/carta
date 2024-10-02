import { useMemo, useState } from 'react';

import useVideo from '@/hooks/useVideo';
import toDate from '@/utils/date';

import VideoPlayer from './VideoPlayer';

export default function ContentVideo({
  id,
  autoPlay = false,
}: {
  id: string;
  autoPlay?: boolean;
}) {
  const [playing, setPlaying] = useState(autoPlay);

  const handleStartPlay = () => setPlaying(true);

  const { video, isLoading, error } = useVideo(id);

  const videoEl = video?.page.items[0];
  const date = useMemo(
    () => toDate(videoEl?.dateOfEmission),
    [videoEl?.dateOfEmission],
  );

  return (
    <div className="flex flex-col divide-y-[1px] divide-white divide-opacity-10">
      {error ?
        'errorVideo'
      : isLoading ?
        'isLoadingVideo'
      : videoEl ?
        <>
          <div className="relative w-full aspect-video">
            {playing ?
              <VideoPlayer id={id} autoPlay />
            : <>
                <img src={videoEl.thumbnail} />
                <button
                  onClick={handleStartPlay}
                  className="absolute top-0 w-full h-full bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60 hover:underline"
                >
                  PLAY
                </button>
              </>
            }
          </div>

          <div
            className="text-xl font-bold p-4 apply-hover-bg"
            onClick={() => console.log(video)}
          >
            {videoEl.title}
          </div>

          {videoEl.description ?
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: videoEl.description }}
            />
          : null}

          {videoEl.casting ?
            <div className="p-4 ">{videoEl.casting}</div>
          : null}

          {date ?
            <div className="p-4 ">{date.format('D MMMM YYYY - LT')}</div>
          : null}
        </>
      : null}
    </div>
  );
}
