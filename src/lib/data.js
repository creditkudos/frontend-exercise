const randomAmount = () => parseFloat((Math.random() * 100).toFixed(2));

const randomDate = () => {
  const start = new Date(2020, 1, 1);
  const end = new Date(2020, 7, 1);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
};

export const randomData = [
  {
    code: "loans_and_repayments",
    name: "Loans & Repayments",
    transactions: [
      {
        date: randomDate(),
        description: "BIG LOAN",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "SHARKY LOANS",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "LOAN OF ARC",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "THE LOAN RANGER",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "POST MALOAN",
        amount: randomAmount(),
      },
    ],
  },
  {
    code: "council_tax_and_rates",
    name: "Council Tax & Rates",
    transactions: [
      {
        date: randomDate(),
        description: "COUNCIL TAX PAYMENT",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "COUNCIL TAX PAYMENT",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "COUNCIL TAX PAYMENT",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "COUNCIL TAX PAYMENT",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "COUNCIL TAX PAYMENT",
        amount: randomAmount(),
      },
    ],
  },
  {
    code: "groceries_and_housekeeping",
    name: "Groceries & Housekeeping",
    transactions: [
      { date: randomDate(), description: "TESCO", amount: randomAmount() },
      { date: randomDate(), description: "SAINSBURYS", amount: randomAmount() },
      { date: randomDate(), description: "ASDA", amount: randomAmount() },
      { date: randomDate(), description: "WAITROSE", amount: randomAmount() },
      { date: randomDate(), description: "TESCO", amount: randomAmount() },
    ],
  },
  {
    code: "transport_and_fuel",
    name: "Transport & Fuel",
    transactions: [
      { date: randomDate(), description: "TEXACO", amount: randomAmount() },
      { date: randomDate(), description: "TEXACO", amount: randomAmount() },
      { date: randomDate(), description: "TEXACO", amount: randomAmount() },
      { date: randomDate(), description: "TEXACO", amount: randomAmount() },
      { date: randomDate(), description: "TEXACO", amount: randomAmount() },
    ],
  },
  {
    code: "utilities",
    name: "Utilities",
    transactions: [
      { date: randomDate(), description: "WATER", amount: randomAmount() },
      { date: randomDate(), description: "ELECTRIC", amount: randomAmount() },
      { date: randomDate(), description: "GAS", amount: randomAmount() },
      { date: randomDate(), description: "WATER", amount: randomAmount() },
      { date: randomDate(), description: "GAS", amount: randomAmount() },
    ],
  },
  {
    code: "phone_internet_and_tv",
    name: "Phone, Internet & TV",
    transactions: [
      {
        date: randomDate(),
        description: "VIRGIN MEDIA",
        amount: randomAmount(),
      },
      { date: randomDate(), description: "SPOTIFY", amount: randomAmount() },
      { date: randomDate(), description: "VODAFONE", amount: randomAmount() },
      { date: randomDate(), description: "VODAFONE", amount: randomAmount() },
      { date: randomDate(), description: "SKY", amount: randomAmount() },
    ],
  },
  {
    code: "fees_and_charges",
    name: "Fees & Charges",
    transactions: [
      {
        date: randomDate(),
        description: "OVERDRAFT USAGE",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "OVERDRAFT USAGE",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "OVERDRAFT USAGE",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "OVERDRAFT USAGE",
        amount: randomAmount(),
      },
      {
        date: randomDate(),
        description: "OVERDRAFT USAGE",
        amount: randomAmount(),
      },
    ],
  },
  {
    code: "gambling",
    name: "Gambling",
    transactions: [
      { date: randomDate(), description: "BET 365", amount: randomAmount() },
      { date: randomDate(), description: "SKYBET", amount: randomAmount() },
      { date: randomDate(), description: "LADBROKES", amount: randomAmount() },
      {
        date: randomDate(),
        description: "WILLIAM HILL",
        amount: randomAmount(),
      },
      { date: randomDate(), description: "PADDYPOWER", amount: randomAmount() },
    ],
  },
];

export default [
  {
    code: "loans_and_repayments",
    name: "Loans & Repayments",
    transactions: [
      {
        date: "2020-06-09T03:53:56.429Z",
        description: "BIG LOAN",
        amount: 93.94,
      },
      {
        date: "2020-03-10T17:42:53.776Z",
        description: "SHARKY LOANS",
        amount: 29.95,
      },
      {
        date: "2020-04-18T10:22:53.442Z",
        description: "LOAN OF ARC",
        amount: 23.36,
      },
      {
        date: "2020-05-03T14:10:18.179Z",
        description: "THE LOAN RANGER",
        amount: 9.64,
      },
      {
        date: "2020-06-21T10:33:59.896Z",
        description: "POST MALOAN",
        amount: 53.04,
      },
    ],
  },
  {
    code: "council_tax_and_rates",
    name: "Council Tax & Rates",
    transactions: [
      {
        date: "2020-02-10T14:54:40.286Z",
        description: "COUNCIL TAX PAYMENT",
        amount: 11.9,
      },
      {
        date: "2020-06-20T05:23:07.385Z",
        description: "COUNCIL TAX PAYMENT",
        amount: 44.32,
      },
      {
        date: "2020-07-15T09:17:48.240Z",
        description: "COUNCIL TAX PAYMENT",
        amount: 61.85,
      },
      {
        date: "2020-03-11T23:48:47.230Z",
        description: "COUNCIL TAX PAYMENT",
        amount: 88.86,
      },
      {
        date: "2020-07-04T22:22:40.069Z",
        description: "COUNCIL TAX PAYMENT",
        amount: 60.4,
      },
    ],
  },
  {
    code: "groceries_and_housekeeping",
    name: "Groceries & Housekeeping",
    transactions: [
      {
        date: "2020-06-21T02:45:04.142Z",
        description: "TESCO",
        amount: 89.27,
      },
      {
        date: "2020-03-12T06:58:40.267Z",
        description: "SAINSBURYS",
        amount: 20.25,
      },
      {
        date: "2020-03-11T00:04:57.534Z",
        description: "ASDA",
        amount: 36.75,
      },
      {
        date: "2020-03-16T21:14:36.608Z",
        description: "WAITROSE",
        amount: 83.6,
      },
      {
        date: "2020-03-31T08:33:34.363Z",
        description: "TESCO",
        amount: 60.46,
      },
    ],
  },
  {
    code: "transport_and_fuel",
    name: "Transport & Fuel",
    transactions: [
      {
        date: "2020-05-30T14:24:34.181Z",
        description: "TEXACO",
        amount: 52.02,
      },
      {
        date: "2020-06-11T16:39:14.445Z",
        description: "TEXACO",
        amount: 82.44,
      },
      {
        date: "2020-07-29T11:10:50.513Z",
        description: "TEXACO",
        amount: 41.54,
      },
      {
        date: "2020-07-20T15:39:05.541Z",
        description: "TEXACO",
        amount: 24.74,
      },
      {
        date: "2020-03-26T09:14:25.369Z",
        description: "TEXACO",
        amount: 35.56,
      },
    ],
  },
  {
    code: "utilities",
    name: "Utilities",
    transactions: [
      {
        date: "2020-07-22T19:18:10.344Z",
        description: "WATER",
        amount: 45.17,
      },
      {
        date: "2020-02-08T14:30:51.938Z",
        description: "ELECTRIC",
        amount: 59.3,
      },
      {
        date: "2020-03-10T23:15:27.871Z",
        description: "GAS",
        amount: 81.44,
      },
      {
        date: "2020-06-29T15:39:08.831Z",
        description: "WATER",
        amount: 64.44,
      },
      {
        date: "2020-02-22T07:47:00.721Z",
        description: "GAS",
        amount: 78.53,
      },
    ],
  },
  {
    code: "phone_internet_and_tv",
    name: "Phone, Internet & TV",
    transactions: [
      {
        date: "2020-03-29T06:49:28.722Z",
        description: "VIRGIN MEDIA",
        amount: 86.49,
      },
      {
        date: "2020-07-20T20:40:47.770Z",
        description: "SPOTIFY",
        amount: 95.26,
      },
      {
        date: "2020-05-04T12:15:08.061Z",
        description: "VODAFONE",
        amount: 62.02,
      },
      {
        date: "2020-05-20T00:44:27.861Z",
        description: "VODAFONE",
        amount: 95.26,
      },
      {
        date: "2020-07-01T05:12:33.980Z",
        description: "SKY",
        amount: 85.74,
      },
    ],
  },
  {
    code: "fees_and_charges",
    name: "Fees & Charges",
    transactions: [
      {
        date: "2020-04-02T07:37:11.601Z",
        description: "OVERDRAFT USAGE",
        amount: 60.04,
      },
      {
        date: "2020-06-05T00:20:19.066Z",
        description: "OVERDRAFT USAGE",
        amount: 6.86,
      },
      {
        date: "2020-07-03T05:45:20.614Z",
        description: "OVERDRAFT USAGE",
        amount: 18.06,
      },
      {
        date: "2020-05-18T03:36:27.726Z",
        description: "OVERDRAFT USAGE",
        amount: 6.44,
      },
      {
        date: "2020-03-15T20:37:43.645Z",
        description: "OVERDRAFT USAGE",
        amount: 37.87,
      },
    ],
  },
  {
    code: "gambling",
    name: "Gambling",
    transactions: [
      {
        date: "2020-06-08T05:58:32.176Z",
        description: "BET 365",
        amount: 95.74,
      },
      {
        date: "2020-02-18T06:15:29.886Z",
        description: "SKYBET",
        amount: 62.43,
      },
      {
        date: "2020-02-14T18:35:28.492Z",
        description: "LADBROKES",
        amount: 12.87,
      },
      {
        date: "2020-07-10T02:56:56.237Z",
        description: "WILLIAM HILL",
        amount: 0.49,
      },
      {
        date: "2020-06-11T13:36:58.565Z",
        description: "PADDYPOWER",
        amount: 85.55,
      },
    ],
  },
];
