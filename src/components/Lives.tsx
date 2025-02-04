import useLives from '@/hooks/useLives';

import Card from './Card';
import ErrorMessage from './ErrorMessage';
import Skeleton from './Skeleton';

export default function Lives({ code }: { code: string | undefined }) {
  const { lives, isLoading, error } = useLives(code);

  return (
    error ?
      <ErrorMessage className="m-3 h-64 w-full rounded-md" error={error} />
    : isLoading ? <Skeleton className="m-3 h-64 w-full rounded-md" />
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
