declare enum _AgeRangeEnum {
  'IF_REDAD0' = 'Recomendado para todos los públicos',
  'IF_REDAD1' = 'Especialmente recomendado para la infancia',
  'IF_REDAD2' = 'Recomendado para mayores de 7 años',
  'IF_REDAD3' = 'Recomendado para mayores de 12 años',
  'IF_REDAD4' = 'Recomendado para mayores de 13 años',
  'IF_REDAD5' = 'Recomendado para mayores de 16 años',
  'IF_REDAD6' = 'Recomendado para mayores de 18 años',
}

export default interface AgeRange {
  AgeRange: `${_AgeRangeEnum}`;
  AgeRangeEnum: _AgeRangeEnum;
  AgeRangeUid: keyof typeof _AgeRangeEnum;
}

// type AgeRange =
//   | 'Recomendado para mayores de 12 años'
//   | 'Recomendado para mayores de 16 años'
//   | 'Recomendado para mayores de 18 años'
//   | 'Recomendado para mayores de 13 años'

// type AgeRangeUid =
//   | 'IF_REDAD5'
//   | 'IF_REDAD6'
//   | 'IF_REDAD4'
//   | 'IF_REDAD3'
