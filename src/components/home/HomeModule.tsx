import Collection from '@/components/collections/Collection';
import Links from '@/components/collections/Links';
import Lives from '@/components/collections/Lives';
import Topic from '@/components/collections/Topic';
import ErrorMessage from '@/components/common/ErrorMessage';
import { RTVEHome } from '@/types/home';
import { strBetween } from '@/utils/string';

export default function HomeModule({ row }: { row: RTVEHome['rows'][0] }) {
  if (row.tipo === 'seguirviendo') return null;
  if (!row.urlContent) {
    return (
      <ErrorMessage text="No existe el contenido" className="w-full p-3" />
    );
  }

  switch (row.moduleType) {
    case 'Collection': {
      const code = strBetween(row.urlContent, '/', '.json');

      return <Collection code={code} />;
    }
    case 'livesCollection': {
      const code = strBetween(row.urlContent, 'directos/', '/directos.json');

      return <Lives code={code} />;
    }
    case 'catalogs': {
      switch (row.tipo) {
        case 'videos': {
          const code = strBetween(row.urlContent, 'tematicas/', '/videos.json');
          const type = strBetween(row.urlContent, 'type=', '');

          return <Topic code={code} type={type} />;
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
