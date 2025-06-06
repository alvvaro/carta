import { mutate } from 'swr';

import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import HomeModule from '@/components/home/HomeModule';
import Portal from '@/components/layout/Portal';
import Row from '@/components/layout/Row';
import useHome from '@/hooks/useHome';

import DebugButton from '../common/DebugButton';

export default function Home() {
  const { home, isLoading, error } = useHome();

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => mutate(() => true)}
          className="apply-hover-bg-white px-4 disabled:opacity-50"
        >
          Actualizar
        </button>
      </Portal>

      <DebugButton d={home} />

      {error ?
        <ErrorMessage
          className="aspect-video w-full"
          error={error}
          text="No se ha podido conectar con RTVE Play"
        />
      : isLoading ?
        Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="m-3 h-80 not-last:mb-0" />
        ))
      : home?.rows
          .filter((row) => row.moduleType !== 'KeepWatching')
          .map((row, i) => (
            <Row
              key={row.orden}
              title={row.title || (i === 0 ? 'Portada' : 'Destacado')}
              // postTitle={row.moduleType}
              debug={row}
            >
              <HomeModule row={row} />
            </Row>
          ))
      }
    </>
  );
}
