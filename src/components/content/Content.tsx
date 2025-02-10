import { useParams } from 'wouter';

import ContentVideo from '@/components/content/ContentVideo';

import ContentProgram from './ContentProgram';

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
      : kind === ContentType.program ?
        <ContentProgram id={id} />
      : JSON.stringify(params)}
    </>
  );
}
