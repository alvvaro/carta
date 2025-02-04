import { mutate } from 'swr';

import Card from '@/components/Card';
import Row from '@/components/Row';
import useCollection from '@/hooks/useCollection';
import useHome from '@/hooks/useHome';
import useLives from '@/hooks/useLives';
import useTopic from '@/hooks/useTopic';

import Portal from './Portal';

// https://ztnr.rtve.es/ztnr/7047909.mpd
// https://api.rtve.es/api/token/7047909
// dash.js

function Collection({ code }: { code: string | undefined }) {
  const { collection, isLoading, error } = useCollection(code);

  return (
    error ? 'error'
    : isLoading ? 'isLoading'
    : collection ?
      collection.page.items[0].collectionItems.map((collectionItem) => (
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
          subtitle={collectionItem.promoText || collectionItem.metaTitle}
          liveProgress={collectionItem.porcentaje || undefined}
          start={collectionItem.inicio}
          href={`${collectionItem.contentType === 'directo' ? 'live' : collectionItem.contentType}/${collectionItem.lastMultimedia?.id || collectionItem.idAsset || collectionItem.id}`}
        />
      ))
    : null
  );
}

function Lives({ code }: { code: string | undefined }) {
  const { lives, isLoading, error } = useLives(code);

  return (
    error ? 'error'
    : isLoading ? 'isLoading'
    : lives ?
      lives.page.items.map((liveItem) => (
        <Card
          key={JSON.stringify(liveItem)}
          onClick={() => console.log(liveItem)}
          logo={liveItem.logo_desktop}
          img={liveItem.imagen}
          pretitle={liveItem.antetitulo}
          title={liveItem.titulo || '--- SIN TITULO ---'}
          subtitle={liveItem.metaTitle}
          liveProgress={liveItem.porcentaje || undefined}
          href={`live/${liveItem.idAsset}`}
        />
      ))
    : null
  );
}

function Topic({ code, type }: { code: string | undefined; type?: string }) {
  const { topic, isLoading, error } = useTopic(code, type);

  return (
    error ? 'error'
    : isLoading ? 'isLoading'
    : topic ?
      topic.page.items.map((topicItem) => (
        <Card
          key={JSON.stringify(topicItem)}
          onClick={() => console.log(topicItem)}
          img={
            topicItem.previews.horizontal2 ||
            topicItem.previews.horizontal ||
            topicItem.previews.square2 ||
            topicItem.previews.square ||
            topicItem.previews.vertical2 ||
            topicItem.previews.vertical ||
            topicItem.imageSEO
          }
          pretitle={
            topicItem.programInfo.title ||
            (topicItem.anteTitle as unknown as string)
          }
          title={
            topicItem.shortTitle || topicItem.longTitle || '--- SIN TITULO ---'
          }
          href={`${topicItem.contentType}/${topicItem.id}`}
        />
      ))
    : null
  );
}

function Links({ links }: { links: any[] | undefined }) {
  return links ?
      links.map((link) => (
        <Card
          key={JSON.stringify(link)}
          onClick={() => console.log(link)}
          img={link.image || link.imgHorizontal || link.imgSquare}
          title={link.title}
          href={`collection/${link.url.split('collection/').pop().split('.json')[0]}`}
        />
      ))
    : null;
}

export default function Home() {
  const { home, isLoading, error } = useHome();

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => console.log(home)}
          className="apply-hover-underline"
        >
          log home
        </button>
        <button
          onClick={() => mutate(() => true)}
          className="apply-hover-underline disabled:opacity-50"
        >
          Actualizar
        </button>
      </Portal>

      {error ?
        'error'
      : isLoading ?
        'isLoading'
      : home ?
        home.rows.map((row, i) => (
          <Row
            key={JSON.stringify(row)}
            title={row.title || (i === 0 && 'Portada') || 'Destacado'}
            onClick={() => console.log(row)}
          >
            {row.moduleType === 'Collection' ?
              <Collection
                code={row.urlContent?.split('/').pop()?.split('.json')[0]}
              />
            : row.moduleType === 'livesCollection' ?
              <Lives
                code={
                  row.urlContent
                    ?.split('directos/')
                    .pop()
                    ?.split('/directos.json')[0]
                }
              />
            : row.moduleType === 'catalogs' && row.tipo === 'videos' ?
              <Topic
                code={
                  row.urlContent
                    ?.split('tematicas/')
                    .pop()
                    ?.split('/videos.json')[0]
                }
                type={row.urlContent?.split('type=').pop()}
              />
            : row.moduleType === 'catalogs' && row.tipo === 'links' ?
              <Links links={row.links} />
            : <div>{row.urlContent}</div>}
          </Row>
        ))
      : null}
    </>
  );
}
