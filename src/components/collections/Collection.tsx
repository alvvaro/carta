import { useMemo } from 'react';

import Card from '@/components/common/Card';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import useCollection from '@/hooks/useCollection';

export default function Collection({ code }: { code: string | undefined }) {
  const { collection, isLoading, error } = useCollection(code);

  const collectionItems = useMemo(() => {
    if (!collection) return [];

    return [
      ...collection.page.items.map((item) => item.itemDestacado),
      ...collection.page.items.flatMap((item) => item.collectionItems),
    ].filter((x) => !!x);
  }, [collection]);

  return (
    error ?
      <ErrorMessage error={error} className="m-3 h-64 w-full rounded-md" />
    : isLoading ? <Skeleton className="m-3 h-64 w-full rounded-md" />
    : collectionItems.map((collectionItem) => (
        <Card
          key={JSON.stringify(collectionItem)}
          onClick={() => console.log(collectionItem)}
          logo={collectionItem.logo_desktop}
          img={
            collectionItem.lastMultimedia?.previews.horizontal2 ||
            collectionItem.lastMultimedia?.previews.horizontal ||
            collectionItem.lastMultimedia?.previews.square2 ||
            collectionItem.lastMultimedia?.previews.square ||
            collectionItem.lastMultimedia?.previews.vertical2 ||
            collectionItem.lastMultimedia?.previews.vertical ||
            collectionItem.imgPortada2 ||
            collectionItem.imgPortada ||
            collectionItem.imagen ||
            collectionItem.imgCol3 ||
            collectionItem.imgCol2 ||
            collectionItem.imgCol ||
            collectionItem.imgPinta ||
            collectionItem.imgBanner2 ||
            collectionItem.imgBanner ||
            collectionItem.imgPoster2 ||
            collectionItem.imgPoster2 ||
            collectionItem.imgPoster ||
            collectionItem.imgBackground2 ||
            collectionItem.imgBackground ||
            collectionItem.imagePodcast ||
            collectionItem.imageSEO
          }
          pretitle={
            collectionItem.lastMultimedia?.title ?
              collectionItem.name ||
              collectionItem.titulo ||
              collectionItem.antetitulo
            : collectionItem.antetitulo
          }
          title={
            collectionItem.lastMultimedia?.title ||
            collectionItem.name ||
            collectionItem.titulo ||
            '--- SIN TITULO ---'
          }
          subtitle={
            collectionItem.promoText || collectionItem.metaTitle || undefined
          }
          liveProgress={collectionItem.porcentaje}
          start={collectionItem.inicio}
          href={`${collectionItem.contentType === 'directo' ? 'live' : collectionItem.contentType}/${collectionItem.lastMultimedia?.id || collectionItem.idAsset || collectionItem.id}`}
        />
      ))
  );
}
