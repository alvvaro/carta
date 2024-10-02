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
  const responseContentType = response.headers.get('Content-Type');
  const isResponseJson =
    responseContentType?.includes('application/json') || false;
  const isArrayBuffer =
    responseContentType?.includes('application/octet-stream') || false;

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
    const serverError = body as { message: string };
    throw new ClientError({
      type: CLIENT_ERROR.BAD_RESPONSE,
      status: response.status,
      message: serverError.message,
    });
  }

  throw new ClientError({
    type: CLIENT_ERROR.BAD_RESPONSE,
    status: response.status,
    message: body as string,
  });
};

export const fetchApiForceTextResponse = async (
  ...args: Parameters<typeof safeFetch>
): Promise<string> => {
  const response = await safeFetch(...args);

  if (response.ok) {
    return await response.text();
  }

  const body = await getBody(response);

  if (typeof body === 'object') {
    const serverError = body as VFD['ErrorResponse'];
    throw new ClientError({
      type: CLIENT_ERROR.BAD_RESPONSE,
      status: response.status,
      code: serverError.code,
      message: serverError.message,
      trace: serverError.trace,
    });
  }

  throw new ClientError({
    type: CLIENT_ERROR.BAD_RESPONSE,
    status: response.status,
    message: body as string,
  });
};
