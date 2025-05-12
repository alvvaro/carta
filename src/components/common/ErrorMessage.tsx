import classNames from 'classnames';

import { ClientError } from '@/lib/clientError';

export default function ErrorMessage({
  text,
  error,
  className = '',
}: {
  text?: string;
  error?: ClientError;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        'flex flex-col items-center justify-center bg-white/10 py-6',
        className,
      )}
    >
      <div className="flex max-w-96 flex-col items-center justify-center gap-4 text-center">
        <div>
          {text ||
            (error?.code === 404 ?
              '404: Recurso no encontrado'
            : 'Error al cargar este recurso')}
        </div>
        {error?.message ?
          <div className="opacity-60">{error.message}</div>
        : null}
      </div>
    </div>
  );
}
