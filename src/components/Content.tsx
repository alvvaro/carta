import { useParams } from 'wouter';

import ContentVideo from './ContentVideo';

enum ContentType {
  live = 'live',
  video = 'video',
  program = 'program',
  collection = 'collection',
}

export default function Content() {
  const params = useParams();
  const kind = params.kind as ContentType;
  const id = params.id as string;

  return (
    <>
      {kind === ContentType.video ?
        <ContentVideo id={id} />
      : kind === ContentType.live ?
        <ContentVideo id={id} autoPlay />
      : JSON.stringify(params)}
    </>
  );
}
