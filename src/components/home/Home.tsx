import { mutate } from 'swr';

import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import HomeModule from '@/components/home/HomeModule';
import Portal from '@/components/layout/Portal';
import Row from '@/components/layout/Row';
import SearchBar from '@/components/search/SearchBar';
import useHome from '@/hooks/useHome';

export default function Home() {
  const { home, isLoading, error } = useHome();

  return (
    <>
      <Portal slotId="header-slot">
        <button
          onClick={() => console.log(home)}
          className="apply-hover-bg-white px-4"
        >
          log home
        </button>
        <button
          onClick={() => mutate(() => true)}
          className="apply-hover-bg-white px-4 disabled:opacity-50"
        >
          Actualizar
        </button>
      </Portal>

      <SearchBar />

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
              onClick={() => console.log(row)}
            >
              <HomeModule row={row} />
            </Row>
          ))
      }
    </>
  );
}
