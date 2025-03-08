export default interface RecommendAgesForChild {
  ageRangeInfUid: AgeRangeInfUid;
  ageRangeInf: AgeRangeInf;
}

type AgeRangeInf = 'Preescolar' | 'Infantil' | 'Junior';

type AgeRangeInfUid = 'INF_03EDAD' | 'INF_47EDAD' | 'INF_81EDAD';
