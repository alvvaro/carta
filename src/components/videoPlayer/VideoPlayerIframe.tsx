export default function VideoPlayerIframe({ id }: { id: string }) {
  const url = `https://www.rtve.es/drmn/embed/video/${id}`;

  return (
    <iframe
      src={url}
      className="block aspect-video overflow-clip"
      allowFullScreen
      scrolling="no"
    />
  );
}
