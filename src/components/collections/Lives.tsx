import Card from '@/components/common/Card';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import useLives from '@/hooks/useLives';

export default function Lives({ code }: { code: string | undefined }) {
  const { lives, isLoading, error } = useLives(code);

  return (
    error ?
      <ErrorMessage className="m-3 h-64 w-full rounded-md" error={error} />
    : isLoading ?
      Array.from({ length: 10 }).map((_, i) => (
        <Skeleton
          key={i}
          className="m-3 mb-24 aspect-video w-80 shrink-0 rounded-md"
        />
      ))
    : lives?.page.items.map((liveItem) => (
        <Card
          key={JSON.stringify(liveItem)}
          onClick={() => console.log(liveItem)}
          logo={liveItem.logo_desktop}
          img={liveItem.imagen}
          pretitle={liveItem.antetitulo}
          title={
            liveItem.titulo ||
            liveItem.now?.titulo ||
            liveItem.canal ||
            liveItem.id
          }
          subtitle={liveItem.metaTitle}
          liveProgress={liveItem.porcentaje || undefined}
          href={`live/${liveItem.idAsset}`}
        />
      ))
  );
}
