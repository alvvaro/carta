export enum CLIENT_ERROR {
  UNHANDLED = -1,
  FETCH_FAILED = 101,
  BAD_RESPONSE = 102,
}

export class ClientError {
  type: CLIENT_ERROR;
  status?: number;
  code?: number;
  message?: string;
  trace?: string;
  error?: Error | unknown;

  constructor({
    type,
    status,
    code,
    message,
    trace,
    error,
  }: {
    type: ClientError['type'];
    status?: ClientError['status'];
    code?: ClientError['code'];
    message?: ClientError['message'];
    trace?: ClientError['trace'];
    error?: ClientError['error'];
  }) {
    this.type = type;
    this.status = status;
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
      status: this.status,
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
