import RTVE from '@/types/rtve';

type CollectionItem = RTVE['Collection']['collectionItems'][0];

const collectionUtils = {
  getItemImg: (collectionItem: CollectionItem) => {
    return (
      collectionItem.lastMultimedia?.previews.horizontal2 ||
      collectionItem.lastMultimedia?.previews.horizontal ||
      collectionItem.lastMultimedia?.previews.square2 ||
      collectionItem.lastMultimedia?.previews.square ||
      // collectionItem.lastMultimedia?.previews.vertical2 ||
      // collectionItem.lastMultimedia?.previews.vertical ||
      collectionItem.imgPortada2 ||
      collectionItem.imgPortada ||
      collectionItem.imagen ||
      collectionItem.imgCol3 ||
      collectionItem.imgCol2 ||
      collectionItem.imgCol ||
      collectionItem.imgPinta ||
      collectionItem.imgBanner2 ||
      collectionItem.imgBanner ||
      collectionItem.imgPoster2 ||
      collectionItem.imgPoster2 ||
      collectionItem.imgPoster ||
      collectionItem.imgBackground2 ||
      collectionItem.imgBackground ||
      collectionItem.imagePodcast ||
      collectionItem.imageSEO
    );
  },
  getItemPretitle: (collectionItem: CollectionItem) => {
    return collectionItem.lastMultimedia?.title ?
        collectionItem.name ||
          collectionItem.titulo ||
          collectionItem.antetitulo
      : collectionItem.antetitulo;
  },
  getItemTitle: (collectionItem: CollectionItem) => {
    return (
      collectionItem.lastMultimedia?.title ||
      collectionItem.name ||
      collectionItem.titulo ||
      collectionItem.id ||
      'Recurso sin título'
    );
  },
  getItemSubtitle: (collectionItem: CollectionItem) => {
    return collectionItem.promoText || collectionItem.metaTitle || undefined;
  },
  getItemType: (collectionItem: CollectionItem) => {
    const type =
      collectionItem.lastMultimedia ?
        collectionItem.lastMultimedia.contentType
      : collectionItem.contentType;

    return type === 'directo' ? 'live' : type;
  },
  getItemID: (collectionItem: CollectionItem) => {
    return (
      collectionItem.lastMultimedia?.id ||
      collectionItem.idAsset ||
      collectionItem.id
    );
  },
  getItemHref: (collectionItem: CollectionItem) => {
    const type = collectionUtils.getItemType(collectionItem);
    const id = collectionUtils.getItemID(collectionItem);

    return `/${type}/${id}`;
  },
};

export default collectionUtils;
