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
  { id: 2, name: "ChanNee", amount: 5007574 },
  { id: 3, name: "Quách", amount: 4000000 },
  { id: 4, name: "Linh Vũ", amount: 3000000 },
  { id: 5, name: "Ng ngheo vuot kho", amount: 2492000 },
  { id: 6, name: "Key", amount: 1383860 },
  { id: 7, name: "HuLu", amount: 1234567 },
  { id: 8, name: "Nhoxlove", amount: 1100000 },
  { id: 9, name: "HPhuong", amount: 777777 },
  { id: 10, name: "tí báo chí", amount: 700000 },
];

// Get total goal from the last milestone (highest amount)
export const totalGoal = Math.max(...milestones.map((m) => m.amount));

// Get total donation amount by summing all donor contributions
// export const donationAmount = donors.reduce(
//   (sum, donor) => sum + donor.amount,
//   0
// );

export const donationAmount = 58257495;
// Calculate percentage of goal reached
export const percentage = (donationAmount / totalGoal) * 100;
