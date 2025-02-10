import Card from '@/components/common/Card';
import ErrorMessage from '@/components/common/ErrorMessage';
import Skeleton from '@/components/common/Skeleton';
import useTopic from '@/hooks/useTopic';

export default function Topic({
  code,
  type,
}: {
  code: string | undefined;
  type?: string;
}) {
  const { topic, isLoading, error } = useTopic(code, type);

  return (
    error ?
      <ErrorMessage className="m-3 h-64 w-full rounded-md" error={error} />
    : isLoading ? <Skeleton className="m-3 h-64 w-full rounded-md" />
    : topic ?
      topic.page.items.map((topicItem) => (
        <Card
          key={JSON.stringify(topicItem)}
          onClick={() => console.log(topicItem)}
          img={
            topicItem.previews.horizontal2 ||
            topicItem.previews.horizontal ||
            topicItem.previews.square2 ||
            topicItem.previews.square ||
            topicItem.previews.vertical2 ||
            topicItem.previews.vertical ||
            topicItem.imageSEO
          }
          pretitle={
            topicItem.programInfo.title ||
            (topicItem.anteTitle as unknown as string)
          }
          title={
            topicItem.shortTitle || topicItem.longTitle || '--- SIN TITULO ---'
          }
          href={`${topicItem.contentType}/${topicItem.id}`}
        />
      ))
    : null
  );
}
