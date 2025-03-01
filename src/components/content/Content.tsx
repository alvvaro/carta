import { useParams } from 'wouter';

import ContentVideo from '@/components/content/ContentVideo';

import ContentProgram from './ContentProgram';

type ContentType = 'live' | 'video' | 'program' | 'collection';

export default function Content() {
  const params = useParams();
  const kind = params.kind as ContentType;
  const id = params.id as string;

  return (
    kind === 'video' ? <ContentVideo id={id} />
    : kind === 'live' ? <ContentVideo id={id} autoPlay />
    : kind === 'program' ? <ContentProgram id={id} />
    : JSON.stringify(params)
  );
}
