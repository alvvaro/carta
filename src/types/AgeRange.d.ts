enum AgeRangeEnum {
  'IF_REDAD0' = 'Recomendado para todos los públicos',
  'IF_REDAD1' = 'Especialmente recomendado para la infancia',
  'IF_REDAD2' = 'Recomendado para mayores de 7 años',
  'IF_REDAD3' = 'Recomendado para mayores de 12 años',
  'IF_REDAD4' = 'Recomendado para mayores de 13 años',
  'IF_REDAD5' = 'Recomendado para mayores de 16 años',
  'IF_REDAD6' = 'Recomendado para mayores de 18 años',
}

export default interface AgeRange {
  AgeRange: `${AgeRangeEnum}`;
  AgeRangeEnum: AgeRangeEnum;
  AgeRangeUid: keyof typeof AgeRangeEnum;
}
