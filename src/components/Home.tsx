import { mutate } from 'swr';

import Row from '@/components/Row';
import useHome from '@/hooks/useHome';

import ErrorMessage from './ErrorMessage';
import Module from './Module';
import Portal from './Portal';
import Skeleton from './Skeleton';

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

      {error ?
        <ErrorMessage
          className="h-96 w-full"
          error={error}
          text="No se ha podido conectar con RTVE Play"
        />
      : isLoading ?
        <Skeleton className="h-96" />
      : home ?
        home.rows.map((row, i) => (
          <Row
            key={JSON.stringify(row)}
            title={row.title || (i === 0 && 'Portada') || 'Destacado'}
            onClick={() => console.log(row)}
          >
            <Module row={row} />
          </Row>
        ))
      : null}
    </>
  );
}
