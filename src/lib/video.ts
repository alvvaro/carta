import RTVE from '@/types/rtve';

type Video = RTVE['Video'];

const videoUtils = {
  getItemImg: (video: Video) => {
    return video.thumbnail || video.imageSEO;
  },
  getItemPretitle: (video: Video) => {
    return video.programInfo?.title;
  },
  getItemTitle: (video: Video) => {
    return (
      video.title || video.shortTitle || video.longTitle || 'Recurso sin título'
    );
  },
  getItemSubtitle: (video: Video) => {
    return video.promoTitle || undefined;
  },
  getItemDescription: (video: Video) => {
    return video.shortDescription || video.promoDesc;
  },
  getItemType: (video: Video) => {
    return video.contentType;
  },
  getItemID: (video: Video) => {
    return video.id;
  },
  getItemHref: (video: Video) => {
    const type = videoUtils.getItemType(video);
    const id = videoUtils.getItemID(video);

    return `/${type}/${id}`;
  },
};

export default videoUtils;
