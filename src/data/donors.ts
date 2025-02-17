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
    illustration: "/src/assets/media/foodtruck.svg",
  },
  {
    id: 2,
    activity: "Booth Checkin",
    amount: 30000000,
    illustration: "/src/assets/media/checkin.svg",
  },
  {
    id: 3,
    activity: "Gift, Photo Booth",
    amount: 40000000,
    illustration: "/src/assets/media/boothphoto.svg",
  },
  {
    id: 4,
    activity: "LED HCM",
    amount: 55000000,
    illustration: "/src/assets/media/led.svg",
  },
];

export const donors: Donor[] = [
  { id: 1, name: "ArtR", amount: 10000085 },
  { id: 2, name: "tutamduongtinh_", amount: 3000000 },
  { id: 3, name: "Nhoxlove", amount: 1000000 },
  { id: 4, name: "Gòl", amount: 400000 },
  { id: 5, name: "Bò Núc Nắc", amount: 136800 },
  { id: 6, name: "Dứa", amount: 100000 },
  { id: 7, name: "YoungHa", amount: 100000 },
  { id: 8, name: "Hải My", amount: 100000 },
  { id: 9, name: "Hiền Kun", amount: 100000 },
  { id: 10, name: "tisBer", amount: 50000 },
  { id: 11, name: "Chichoo", amount: 20000 },
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
