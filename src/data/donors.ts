export interface Donor {
  id: number;
  name: string;
  amount: number;
}

export interface Milestone {
  id: number;
  activity: string;
  amount: number;
  illustration: string;
}

export const milestones: Milestone[] = [
  {
    id: 1,
    activity: "Foodtruck Fancon",
    amount: 10000000,
    illustration: "/media/foodtruck.svg",
  },
  {
    id: 2,
    activity: "Booth Checkin",
    amount: 30000000,
    illustration: "/media/checkin.svg",
  },
  {
    id: 3,
    activity: "Gift, Photo Booth",
    amount: 40000000,
    illustration: "/media/boothphoto.svg",
  },
  {
    id: 4,
    activity: "LED HCM",
    amount: 55000000,
    illustration: "/media/led.svg",
  },
];

export const donors: Donor[] = [
  { id: 1, name: "ArtR", amount: 10000085 },
  { id: 2, name: "Linh Vũ", amount: 3000000 },
  { id: 3, name: "Nhoxlove", amount: 1000000 },
  { id: 4, name: "kurumi_1504", amount: 536462 },
  { id: 5, name: "Pông", amount: 500000 },

  { id: 6, name: "Gòl", amount: 400000 },

  { id: 7, name: "Bò Núc Nắc", amount: 173262 },
  { id: 8, name: "Dứa", amount: 100000 },
  { id: 9, name: "YoungHa", amount: 150000 },
  { id: 10, name: "tisBer", amount: 50000 },
  { id: 11, name: "Chichoo", amount: 20000 },
  { id: 12, name: "ngaan", amount: 202500 },
];

// Get total goal from the last milestone (highest amount)
export const totalGoal = Math.max(...milestones.map((m) => m.amount));

// Get total donation amount by summing all donor contributions
// export const donationAmount = donors.reduce(
//   (sum, donor) => sum + donor.amount,
//   0
// );

export const donationAmount = 34925298;
// Calculate percentage of goal reached
export const percentage = (donationAmount / totalGoal) * 100;
