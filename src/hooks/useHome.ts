import useSWRImmutable from 'swr/immutable';

import { ClientError } from '@/lib/clientError';
import { RTVEHome } from '@/types/home';
import { fetchApi } from '@/utils/fetch';

const getApiPath = () => {
  return 'https://www.rtve.es/play/index_apps.json';
};

export default function useHome() {
  const { data, ...rest } = useSWRImmutable<RTVEHome, ClientError>(
    getApiPath(),
    fetchApi,
    { shouldRetryOnError: false },
  );

  return {
    home: data,
    ...rest,
  };
}
