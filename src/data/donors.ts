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
  { id: 3, name: "Linh Vũ", amount: 3000000 },
  { id: 4, name: "Key", amount: 1183860 },
  { id: 5, name: "Nhoxlove", amount: 1000000 },
  { id: 6, name: "HPhuong", amount: 777777 },
  { id: 7, name: "kurumi_1504", amount: 536462 },
  { id: 8, name: "Pông", amount: 500000 },
  { id: 9, name: "Sherry", amount: 500000 },
  { id: 10, name: "Gòl", amount: 400000 },
  { id: 11, name: "Glaukopis", amount: 321195 },
  { id: 12, name: "Natraaa", amount: 300000 },
  { id: 13, name: "Thi", amount: 290125 },
  { id: 14, name: "tisBer", amount: 250000 },
  { id: 15, name: "ngaan", amount: 202500 },
  { id: 16, name: "Dahn", amount: 200000 },
  { id: 17, name: "Tidal", amount: 200000 },
  { id: 18, name: "Bò Núc Nắc", amount: 173262 },
  { id: 19, name: "YoungHa", amount: 150000 },
  { id: 20, name: "Naa", amount: 150000 },
  { id: 21, name: "novbong", amount: 150000 },
  { id: 22, name: "Tôm", amount: 150000 },
  { id: 23, name: "Dứa", amount: 100000 },
  { id: 24, name: "Hải My", amount: 100000 },
  { id: 25, name: "Hiền Kun", amount: 100000 },
  { id: 26, name: "Hải My", amount: 100000 },
  { id: 27, name: "itshienkun", amount: 100000 },
  { id: 28, name: "Tus", amount: 100000 },
  { id: 29, name: "nờ tờ", amount: 100000 },
  { id: 30, name: "Gạo", amount: 55555 },
  { id: 31, name: "Sườn Chìa", amount: 50000 },
  { id: 32, name: "Thư Huỳnh", amount: 50000 },
  { id: 33, name: "Gắn chúa 🐍", amount: 50000 },
  { id: 34, name: "Chichoo", amount: 20000 },
  { id: 35, name: "Ngaan", amount: 20000 }
];

// Get total goal from the last milestone (highest amount)
export const totalGoal = Math.max(...milestones.map((m) => m.amount));

// Get total donation amount by summing all donor contributions
// export const donationAmount = donors.reduce(
//   (sum, donor) => sum + donor.amount,
//   0
// );

export const donationAmount = 42482628;
// Calculate percentage of goal reached
export const percentage = (donationAmount / totalGoal) * 100;
