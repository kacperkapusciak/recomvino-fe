export interface IRecommendation {
  id: string;
  recommendation: string;
  scoreComponents: [
    {
      low: number;
      high: number;
    }
  ];
}
