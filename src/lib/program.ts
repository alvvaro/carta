import RTVE from '@/types/rtve';

type Program = RTVE['Program'];

const programUtils = {
  getItemImg: (program: Program) => {
    return (
      program.imgPortada2 ||
      program.imgPortada ||
      program.imgCol3 ||
      program.imgCol2 ||
      program.imgCol ||
      program.imgPinta ||
      program.imgBanner2 ||
      program.imgBanner ||
      program.imgPoster2 ||
      program.imgPoster2 ||
      program.imgPoster ||
      program.imgBackground2 ||
      program.imgBackground ||
      program.imagePodcast ||
      program.imageSEO
    );
  },
  getItemPretitle: (program: Program) => {
    return program.promoText || undefined;
  },
  getItemTitle: (program: Program) => {
    return (
      program.name ||
      program.title ||
      program.shortTitle ||
      program.longTitle ||
      'Recurso sin título'
    );
  },
  getItemSubtitle: (program: Program) => {
    return program.emission || undefined;
  },
  getItemDescription: (program: Program) => {
    return program.description || program.promoDesc || program.longDescription;
  },
  getItemType: (program: Program) => {
    return program.contentType === 'programa' ?
        'program'
      : (program.contentType as string);
  },
  getItemID: (program: Program) => {
    return program.id;
  },
  getItemHref: (program: Program) => {
    const type = programUtils.getItemType(program);
    const id = programUtils.getItemID(program);

    return `/${type}/${id}`;
  },
};

export default programUtils;
