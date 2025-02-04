import { RTVEHome } from '@/types/home';

import Card from './Card';

export default function Links({
  links,
}: {
  links: RTVEHome['rows'][0]['links'];
}) {
  return links ?
      links.map((link) => (
        <Card
          key={JSON.stringify(link)}
          onClick={() => console.log(link)}
          img={link.image || link.imgHorizontal || link.imgSquare}
          title={link.title}
          href={`collection/${link.url.split('collection/').pop()?.split('.json')[0]}`}
        />
      ))
    : null;
}
