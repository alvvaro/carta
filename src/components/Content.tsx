import { Link, useParams } from 'wouter';

import ContentVideo from './ContentVideo';
import Logo from './Logo';

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
    <div>
      <div className="sticky top-0 bg-black bg-opacity-90 backdrop-blur-md z-10 flex flex-row gap-4 p-4">
        <Link className="flex-1 apply-hover-opacity" href="/">
          <Logo />
        </Link>
      </div>

      {kind === ContentType.video ?
        <ContentVideo id={id} />
      : kind === ContentType.live ?
        <ContentVideo id={id} autoPlay />
      : JSON.stringify(params)}
    </div>
  );
}
