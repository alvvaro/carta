import classNames from 'classnames';

export default function DebugButton({
  d,
  position = 'left',
}: {
  d: unknown;
  position?: 'left' | 'right';
}) {
  return import.meta.env.DEV ?
      <button
        className={classNames(
          'absolute top-1 rounded-md bg-white/30 px-1 text-black hover:bg-white/50 active:bg-white/70',
          position === 'left' ? 'left-1' : 'right-1',
        )}
        onClick={(event) => {
          event.preventDefault();
          console.log(d);
        }}
      >
        🐞
      </button>
    : null;
}
