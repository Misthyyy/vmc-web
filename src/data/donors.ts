export interface Donor {
  id: number;
  name: string;
  amount: number;
}

export interface Milestone {
  id: number;
  activity: string;
  amount: number;
}

export const milestones: Milestone[] = [
  { id: 1, activity: "Foodtruck Fancon", amount: 10000000 },
  { id: 2, activity: "Booth Concert", amount: 40000000 },
  { id: 3, activity: "Gift Photo Booth", amount: 50000000 },
  { id: 4, activity: "LED", amount: 65000000 },
];

export const donors: Donor[] = [
  { id: 1, name: "Alice", amount: 1000000 },
  { id: 2, name: "Bob", amount: 950000 },
  { id: 3, name: "Charlie", amount: 900000 },
  { id: 4, name: "David", amount: 850000 },
  { id: 5, name: "Emma", amount: 800000 },
  { id: 6, name: "Frank", amount: 7500000 },
  { id: 7, name: "Grace", amount: 700000 },
  { id: 8, name: "Hank", amount: 6500000 },
  { id: 9, name: "Ivy", amount: 600000 },
  { id: 10, name: "Jack", amount: 5500000 },
  { id: 11, name: "Karen", amount: 5000000 },
  { id: 12, name: "ABC", amount: 5000000 },
];

// Get total goal from the last milestone (highest amount)
export const totalGoal = Math.max(...milestones.map((m) => m.amount));

// Get total donation amount by summing all donor contributions
export const donationAmount = donors.reduce(
  (sum, donor) => sum + donor.amount,
  0
);

// Calculate percentage of goal reached
export const percentage = (donationAmount / totalGoal) * 100;
