import Card from '@/components/common/Card';
import SearchBar from '@/components/search/SearchBar';
import useSearch from '@/hooks/useSearch';

import Row from '../layout/Row';

export default function Search() {
  const { results } = useSearch();

  return (
    <>
      <SearchBar />

      {results?.programs?.page.items.length ?
        <Row title="Programas">
          {results.programs.page.items.map((item) => (
            <Card
              key={item.id}
              img={item.imgPortada || item.imgBanner}
              href={`${item.contentType}/${item.id}`}
              pretitle={item.productionDate || undefined}
              title={item.title}
              subtitle={item.promoText || undefined}
            />
          ))}
        </Row>
      : null}

      {results?.videos?.page.items.length ?
        <Row title="Videos">
          {results.videos.page.items.map((item) => (
            <Card
              key={item.id}
              img={item.thumbnail as string}
              href={`${item.contentType}/${item.id}`}
              pretitle={item.dateOfEmission}
              title={item.title}
              subtitle={item.programInfo.title}
              duration={item.duration}
            />
          ))}
        </Row>
      : null}

      {results?.contents?.page.items.length ?
        <Row title="Contenidos">
          {results.contents.page.items.map((item) => (
            <Card
              key={item.id}
              img={item.thumbnail as string}
              href={`${item.contentType}/${item.id}`}
              pretitle={item.programInfo.title}
              title={item.title}
              duration={item.duration}
            />
          ))}
        </Row>
      : null}
    </>
  );
}
