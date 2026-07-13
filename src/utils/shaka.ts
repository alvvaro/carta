import shaka from 'shaka-player';

import { CLIENT_ERROR, ClientError } from '@/lib/clientError';

export function createShakaError(error: unknown) {
  if (error instanceof shaka.util.Error) {
    return new ClientError({
      type: CLIENT_ERROR.SHAKA_ERROR,
      message: error.message,
      code: error.code,
    });
  } else if (error instanceof Error) {
    return new ClientError({
      type: CLIENT_ERROR.SHAKA_ERROR,
      error,
    });
  } else {
    return new ClientError({
      type: CLIENT_ERROR.SHAKA_ERROR,
    });
  }
}
