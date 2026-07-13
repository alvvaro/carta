export type PubState =
  | {
      code: 'ENPUB';
      description: 'En publicación';
    }
  | {
      code: 'DESPU';
      description: 'Despublicado';
    };
