import { ReactNode, useEffect, useRef } from 'react';

export default function Dialog({
  open,
  toggleOpen,
  className = '',
  children,
}: {
  open: boolean;
  toggleOpen: () => void;
  className?: string;
  children: ReactNode;
}) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function closeDialog(event: MouseEvent) {
      if (
        event.target &&
        (event.target as Element).contains(modalRef.current)
      ) {
        toggleOpen();
      }
    }

    document.addEventListener('click', closeDialog);
    return () => document.removeEventListener('click', closeDialog);
  }, [open, toggleOpen]);

  return (
    <dialog
      ref={modalRef}
      onCancel={toggleOpen}
      className={'m-[revert] rounded-md shadow-lg backdrop:backdrop-blur-xs'.append(
        className,
      )}
    >
      {open ?
        <>
          <div className="sticky top-0 flex h-14 border-b border-white/10 bg-black/90 backdrop-blur-md">
            <button className="apply-hover-bg-white px-5" onClick={toggleOpen}>
              ✕
            </button>
            <div id="dialog-header-slot" className="flex flex-row" />
          </div>
          {children}
        </>
      : null}
    </dialog>
  );
}
