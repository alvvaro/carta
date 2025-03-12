import Collection from '@/components/collections/Collection';
import Links from '@/components/collections/Links';
import Lives from '@/components/collections/Lives';
import Topic from '@/components/collections/Topic';
import ErrorMessage from '@/components/common/ErrorMessage';
import RTVE from '@/types/rtve';

export default function HomeModule({
  row,
}: {
  row: RTVE['PlayIndexApps']['rows'][0];
}) {
  if (row.tipo === 'seguirviendo') return null;
  if (!row.urlContent) {
    return (
      <ErrorMessage text="No existe el contenido" className="w-full p-3" />
    );
  }

  switch (row.moduleType) {
    case 'Collection': {
      const code = row.urlContent.between('/', '.json');

      return <Collection code={code} />;
    }
    case 'livesCollection': {
      const code = row.urlContent.between('directos/', '/directos.json');

      return <Lives code={code} />;
    }
    case 'catalogs': {
      switch (row.tipo) {
        case 'videos': {
          const code = row.urlContent.between('tematicas/', '/videos.json');
          const type =
            new URL(row.urlContent).searchParams.get('type') || undefined;

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
