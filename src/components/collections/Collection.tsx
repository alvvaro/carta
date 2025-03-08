import { useMemo } from 'react';

import Card from '@/components/common/Card';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import useCollection from '@/hooks/useCollection';
import collectionUtils from '@/lib/collection';

export default function Collection({ code }: { code: string | undefined }) {
  const { collection, isLoading, error } = useCollection(code);

  const collectionItems = useMemo(() => {
    if (!collection) return [];

    return [
      ...collection.page.items.map((item) => item.itemDestacado),
      ...collection.page.items.flatMap((item) => item.collectionItems),
    ].compact();
  }, [collection]);

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
    : collectionItems.map((collectionItem) => (
        <Card
          key={JSON.stringify(collectionItem)}
          onClick={() => console.log(collectionItem)}
          logo={collectionItem.logo_desktop}
          img={collectionUtils.getItemImg(collectionItem)}
          pretitle={collectionUtils.getItemPretitle(collectionItem)}
          title={collectionUtils.getItemTitle(collectionItem)}
          subtitle={collectionUtils.getItemSubtitle(collectionItem)}
          liveProgress={collectionItem.porcentaje}
          start={collectionItem.inicio}
          duration={collectionItem.duracion}
          href={collectionUtils.getItemHref(collectionItem)}
        />
      ))
  );
}
