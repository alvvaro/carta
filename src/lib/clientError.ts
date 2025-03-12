export enum CLIENT_ERROR {
  UNHANDLED,
  FETCH_FAILED,
  BAD_RESPONSE,
  KO_RESPONSE,
}

export class ClientError {
  type: CLIENT_ERROR;
  code?: number;
  message?: string;
  trace?: string;
  error?: Error | unknown;

  constructor({
    type,
    code,
    message,
    trace,
    error,
  }: {
    type: ClientError['type'];
    code?: ClientError['code'];
    message?: ClientError['message'];
    trace?: ClientError['trace'];
    error?: ClientError['error'];
  }) {
    this.type = type;
    this.code = code;
    this.message = message;
    this.trace = trace;
    this.error = error;

    if (error instanceof Error && !message) {
      this.message = error.message;
    }

    console.error(this.toObject());
  }

  toObject() {
    return {
      type: CLIENT_ERROR[this.type],
      code: this.code,
      message: this.message,
      trace: this.trace,
      error: this.error,
    };
  }

  toString() {
    return `CLIENT ERROR: ${JSON.stringify(this.toObject())}`;
  }
}
