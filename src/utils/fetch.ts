import { CLIENT_ERROR, ClientError } from '@/lib/clientError';

const safeFetch: typeof fetch = async (...args) => {
  try {
    return await fetch(...args);
  } catch (error) {
    throw new ClientError({
      type: CLIENT_ERROR.FETCH_FAILED,
      error: error,
    });
  }
};

const getBody = async (response: Response) => {
  const responseContentType = response.headers.get('Content-Type') || '';
  const isResponseJson = responseContentType.includes('application/json');
  const isArrayBuffer =
    responseContentType.includes('application/') ||
    responseContentType.includes('video/') ||
    responseContentType.includes('audio/') ||
    responseContentType.includes('image/');

  try {
    switch (true) {
      case isResponseJson: {
        return await response.json();
      }
      case isArrayBuffer: {
        return await response.arrayBuffer();
      }
      default: {
        return await response.text();
      }
    }
  } catch (error) {
    throw new ClientError({
      type: CLIENT_ERROR.BAD_RESPONSE,
      error: error,
    });
  }
};

export const fetchApi = async <T>(
  ...args: Parameters<typeof safeFetch>
): Promise<T> => {
  const response = await safeFetch(...args);
  const body: T = await getBody(response);

  if (response.ok) {
    return body;
  }

  if (typeof body === 'object') {
    const serverError = body as { code: number; message: string };
    throw new ClientError({
      type: CLIENT_ERROR.KO_RESPONSE,
      code: serverError.code || response.status,
      message: serverError.message,
    });
  }

  throw new ClientError({
    type: CLIENT_ERROR.KO_RESPONSE,
    code: response.status,
  });
};
