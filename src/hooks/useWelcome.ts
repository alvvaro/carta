import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import RTVE from '@/types/rtve';
import { fetchApi } from '@/utils/fetch';

const getApiPath = () => {
  return 'http://www.rtve.es/m/configs/rtve_play/estructura.json';
};

export default function useWelcome() {
  const { data, ...rest } = useSWRImmutable<
    RTVE['MConfigsRtvePlayEstructura'],
    ClientError
  >(getApiPath(), fetchApi, { shouldRetryOnError: false });

  return {
    welcome: data,
    ...rest,
  };
}
