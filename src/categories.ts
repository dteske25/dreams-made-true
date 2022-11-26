export interface IContestantCategory {
  name: string;
  ageStart: number;
  ageEnd?: number;
}

export const contestantCategories: IContestantCategory[] = [
  {
    name: "Little Miss",
    ageStart: 5,
    ageEnd: 9,
  },
  {
    name: "Junior Miss",
    ageStart: 10,
    ageEnd: 14,
  },
  {
    name: "Teen Miss",
    ageStart: 15,
    ageEnd: 19,
  },
  {
    name: "Miss",
    ageStart: 20,
    ageEnd: 24,
  },
  {
    name: "Senior Miss",
    ageStart: 25,
  },
];
