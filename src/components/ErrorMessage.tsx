import { ClientError } from '@/lib/clientError';

export default function ErrorMessage({
  error,
  text,
  className,
}: {
  error?: ClientError;
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center bg-white/10 ${className}`}
    >
      <div className="flex max-w-96 flex-col items-center justify-center gap-4 text-center">
        <div>
          {text ||
            (error?.status === 404 ?
              '404: Recurso no encontrado'
            : 'Error al cargar este elemento')}
        </div>
        {error?.message ?
          <div className="opacity-60">{error.message}</div>
        : null}
      </div>
    </div>
  );
}
