import Card from '@/components/common/Card';
import SearchBar from '@/components/search/SearchBar';
import useSearch from '@/hooks/useSearch';

export default function Search() {
  const { results, isLoading, isValidating } = useSearch();

  return (
    <>
      <SearchBar />

      <div className="p-3">Results:</div>
      <div className="p-3">{isLoading ? 'isLoading' : 'not loading'}</div>
      <div className="p-3">
        {isValidating ? 'isValidating' : 'not validating'}
      </div>

      {results ?
        <div className="">
          {results.programs?.page?.items?.map((item) => (
            <Card
              horizontal
              key={item.id}
              img={item.imgPortada || item.imgBanner}
              href="#"
              title={item.title}
            />
          ))}
          {results.contents?.page?.items?.map((item) => (
            <Card
              horizontal
              key={item.id}
              img={item.thumbnail as string}
              href="#"
              title={item.title}
            />
          ))}
          {results.videos?.page?.items?.map((item) => (
            <Card
              horizontal
              key={item.id}
              img={item.thumbnail as string}
              href="#"
              pretitle={item.programInfo.title}
              title={item.title}
              subtitle={item.dateOfEmission}
            />
          ))}
        </div>
      : null}
    </>
  );
}
