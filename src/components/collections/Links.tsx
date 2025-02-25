import Card from '@/components/common/Card';
import RTVE from '@/types';
import { strBetween } from '@/utils/string';

export default function Links({
  links = [],
}: {
  links: RTVE['PlayIndexApps']['rows'][0]['links'];
}) {
  return links.map((link) => (
    <Card
      key={link.url}
      onClick={() => console.log(link)}
      img={link.image || link.imgHorizontal || link.imgSquare}
      title={link.title}
      href={`collection/${strBetween(link.url, 'collection/', '.json')}`}
    />
  ));
}
