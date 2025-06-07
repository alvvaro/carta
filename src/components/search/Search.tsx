import Card from '@/components/common/Card';
import DebugButton from '@/components/common/DebugButton';
import Row from '@/components/layout/Row';
import useSearch from '@/hooks/useSearch';
import programUtils from '@/lib/program';
import videoUtils from '@/lib/video';

export default function Search() {
  const { results } = useSearch();

  return (
    <>
      <DebugButton d={results} />

      {results?.programs?.page.items.length ?
        <Row title="Programas">
          {results.programs.page.items.map((item) => (
            <Card
              key={item.id}
              img={programUtils.getItemImg(item)}
              href={programUtils.getItemHref(item)}
              pretitle={programUtils.getItemPretitle(item)}
              title={programUtils.getItemTitle(item)}
              subtitle={programUtils.getItemSubtitle(item)}
              debug={item}
            />
          ))}
        </Row>
      : null}

      {results?.videos?.page.items.length ?
        <Row title="Videos">
          {results.videos.page.items.map((item) => (
            <Card
              key={item.id}
              img={videoUtils.getItemImg(item)}
              href={videoUtils.getItemHref(item)}
              pretitle={videoUtils.getItemPretitle(item)}
              title={videoUtils.getItemTitle(item)}
              subtitle={videoUtils.getItemSubtitle(item)}
              duration={item.duration}
              debug={item}
            />
          ))}
        </Row>
      : null}

      {results?.contents?.page.items.length ?
        <Row title="Contenidos">
          {results.contents.page.items.map((item) => (
            <Card
              key={item.id}
              img={videoUtils.getItemImg(item)}
              href={videoUtils.getItemHref(item)}
              pretitle={videoUtils.getItemPretitle(item)}
              title={videoUtils.getItemTitle(item)}
              subtitle={videoUtils.getItemSubtitle(item)}
              duration={item.duration}
              debug={item}
            />
          ))}
        </Row>
      : null}
    </>
  );
}
