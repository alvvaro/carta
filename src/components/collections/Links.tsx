import Card from '@/components/common/Card';
import RTVE from '@/types/rtve';

export default function Links({
  links = [],
}: {
  links: RTVE['PlayIndexApps']['rows'][0]['links'];
}) {
  return links.map((link) => (
    <Card
      key={link.url}
      debug={link}
      img={link.image || link.imgHorizontal || link.imgSquare}
      title={link.title}
      href={`collection/${link.url.between('collection/', '.json')}`}
    />
  ));
}
