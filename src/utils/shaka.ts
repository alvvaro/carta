import shaka from 'shaka-player';

import { CLIENT_ERROR, ClientError } from '@/lib/clientError';

export function createShakaError(error: unknown) {
  switch (true) {
    case error instanceof shaka.util.Error: {
      console.error(error);
      return new ClientError({
        type: CLIENT_ERROR.SHAKA_ERROR,
        message: error.message,
        code: error.code,
      });
    }
    case error instanceof Error: {
      return new ClientError({
        type: CLIENT_ERROR.SHAKA_ERROR,
        error,
      });
    }
    default: {
      return new ClientError({
        type: CLIENT_ERROR.SHAKA_ERROR,
      });
    }
  }
}
