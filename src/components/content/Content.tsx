import { useParams } from 'wouter';

import ErrorMessage from '@/components/common/ErrorMessage';
import ContentVideo from '@/components/content/ContentVideo';

import ContentCollection from './ContentCollection';
import ContentProgram from './ContentProgram';

type ContentType = 'live' | 'video' | 'program' | 'collection' | 'audio';

export default function Content() {
  const params = useParams();
  const kind = params.kind as ContentType;
  const id = params.id as string;

  return (
    kind === 'video' ? <ContentVideo id={id} />
    : kind === 'live' ? <ContentVideo id={id} autoPlay />
    : kind === 'program' ? <ContentProgram id={id} />
    : kind === 'audio' ?
      <ErrorMessage
        text="Recursos de audio aún no implementados"
        className="h-64"
      />
    : <ContentCollection code={id} />
  );
}
