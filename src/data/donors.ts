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
  { id: 5, name: "Key", amount: 1183860 },
  { id: 6, name: "Nhoxlove", amount: 1000000 },
  { id: 7, name: "HPhuong", amount: 777777 },
  { id: 8, name: "kurumi_1504", amount: 536462 },
  { id: 9, name: "MTrân", amount: 510000 },
  { id: 10, name: "Pông", amount: 500000 },
  { id: 11, name: "Sherry", amount: 500000 },
  { id: 12, name: "Gòl", amount: 400000 },
  { id: 13, name: "Glaukopis", amount: 321195 },
  { id: 14, name: "Natraaa", amount: 300000 },
  { id: 15, name: "Yiu", amount: 300000 },
  { id: 16, name: "Thi", amount: 290125 },
  { id: 17, name: "tisBer", amount: 250000 },
  { id: 18, name: "LinhTran", amount: 222222 },
  { id: 19, name: "ngaan", amount: 202500 },
  { id: 20, name: "Dahn", amount: 200000 },
  { id: 21, name: "Tidal", amount: 200000 },
  { id: 22, name: "Bò Núc Nắc", amount: 173262 },
  { id: 23, name: "YoungHa", amount: 150000 },
  { id: 24, name: "Naa", amount: 150000 },
  { id: 25, name: "novbong", amount: 150000 },
  { id: 26, name: "Tôm", amount: 150000 },
  { id: 27, name: "Shiba", amount: 150000 },
  { id: 28, name: "Dứa", amount: 100000 },
  { id: 29, name: "Hải My", amount: 100000 },
  { id: 30, name: "Hiền Kun", amount: 100000 },
  { id: 31, name: "Hải My", amount: 100000 },
  { id: 32, name: "itshienkun", amount: 100000 },
  { id: 33, name: "Tus", amount: 100000 },
  { id: 34, name: "nờ tờ", amount: 100000 },
  { id: 35, name: "Sườn Chìa", amount: 60000 },
  { id: 36, name: "Gạo", amount: 55555 },
  { id: 37, name: "Thư Huỳnh", amount: 50000 },
  { id: 38, name: "Gắn chúa 🐍", amount: 50000 },
  { id: 39, name: "Chichoo", amount: 20000 },
  { id: 40, name: "Ngaan", amount: 20000 }
];

// Get total goal from the last milestone (highest amount)
export const totalGoal = Math.max(...milestones.map((m) => m.amount));

// Get total donation amount by summing all donor contributions
// export const donationAmount = donors.reduce(
//   (sum, donor) => sum + donor.amount,
//   0
// );

export const donationAmount = 47524850;
// Calculate percentage of goal reached
export const percentage = (donationAmount / totalGoal) * 100;
