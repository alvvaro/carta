import { ReactNode } from 'react';

import { createPortal } from 'react-dom';

export default function Portal({
  slotId,
  children,
}: {
  slotId: string;
  children: ReactNode;
}) {
  if (!children) return null;
  if (!slotId) return children;

  const node = document.getElementById(slotId);

  if (!node) return children;

  return createPortal(children, node, slotId);
}
