import { useMemo } from 'react';

import Card from '@/components/common/Card';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import useCollection from '@/hooks/useCollection';
import collectionUtils from '@/lib/collection';

import DebugButton from '../common/DebugButton';

export default function ContentCollection({ code }: { code: string }) {
  const { collection, isLoading, error } = useCollection(code);

  const colItem = collection?.page.items[0];

  const collectionItems = useMemo(() => {
    if (!colItem) return [];

    return [colItem.itemDestacado, ...colItem.collectionItems].compact();
  }, [colItem]);

  return (
    error ?
      <ErrorMessage error={error} className="m-3 h-64 w-full rounded-md" />
    : isLoading ?
      Array.from({ length: 10 }).map((_, i) => (
        <Skeleton
          key={i}
          className="m-3 mb-24 aspect-video w-80 shrink-0 rounded-md"
        />
      ))
    : colItem ?
      <>
        <DebugButton d={collection} />

        <div className="p-4 text-xl font-bold">{colItem.title}</div>

        {colItem.description ?
          <div className="p-4">{colItem.description}</div>
        : null}

        {collectionItems.map((collectionItem) => (
          <div key={JSON.stringify(collectionItem)} className="bg-black/50 p-1">
            <Card
              horizontal
              debug={collectionItem}
              logo={collectionItem.logo_desktop}
              img={collectionUtils.getItemImg(collectionItem)}
              pretitle={collectionUtils.getItemPretitle(collectionItem)}
              title={collectionUtils.getItemTitle(collectionItem)}
              subtitle={collectionUtils.getItemDescription(collectionItem)}
              liveProgress={collectionItem.porcentaje}
              start={collectionItem.inicio}
              duration={
                collectionItem.live ? undefined : collectionItem.duracion
              }
              href={collectionUtils.getItemHref(collectionItem)}
            />
          </div>
        ))}
      </>
    : null
  );
}
