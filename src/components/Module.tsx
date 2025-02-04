import { RTVEHome } from '@/types/home';

import Collection from './Collection';
import Links from './Links';
import Lives from './Lives';
import Topic from './Topic';

export default function Module({ row }: { row: RTVEHome['rows'][0] }) {
  switch (row.moduleType) {
    case 'Collection': {
      const code = row.urlContent?.split('/').pop()?.split('.json')[0];

      return <Collection code={code} />;
    }
    case 'livesCollection': {
      const code = row.urlContent
        ?.split('directos/')
        .pop()
        ?.split('/directos.json')[0];

      return <Lives code={code} />;
    }
    case 'catalogs': {
      switch (row.tipo) {
        case 'videos': {
          const code = row.urlContent
            ?.split('tematicas/')
            .pop()
            ?.split('/videos.json')[0];

          return (
            <Topic code={code} type={row.urlContent?.split('type=').pop()} />
          );
        }
        case 'links': {
          return <Links links={row.links} />;
        }
        default: {
          return <div>{row.urlContent}</div>;
        }
      }
    }
    default: {
      return <div>{row.urlContent}</div>;
    }
  }
}
