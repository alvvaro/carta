import classNames from 'classnames';
import { Link } from 'wouter';

export default function Tabs<T extends string | number>({
  items,
  selectedItem,
  className,
}: {
  items: { id: T; title: string; href: string }[];
  selectedItem: T;
  className?: string;
}) {
  return (
    <div className={classNames('flex flex-row flex-wrap', className)}>
      {items.map((item) => (
        <Link
          key={item.id}
          className={classNames(
            'apply-hover-bg border-r-[1px] border-white/10 p-4',
            selectedItem === item.id && 'font-bold underline',
          )}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
