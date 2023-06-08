export default [
  {
    id: 1,
    data: {
      assets: {
        total: 0,
      },
      passives: {
        total: 0,
      },
      netWorth: 0,
      message:
        "Your assets cover your debts. This situation is not ideal. Increase your assets and reduce your debts to improve your net worth.",
    },
  },
  {
    id: 2,
    data: {
      assets: [
        {
          id: 1,
          title: "Cash",
          amount: 0,
          icon: "cash",
        },
        {
          id: 2,
          title: "Savings",
          amount: 0,
          icon: "piggy-bank",
        },
      ],
    },
  },

  {
    id: 3,
    data: {
      liabilities: [
        {
          id: 1,
          title: "Real estate loan",
          amount: 0,
          icon: "home",
        },
        {
          id: 2,
          title: "Car loan",
          amount: 0,
          icon: "car",
        },
        {
          id: 3,
          title: "Student loan",
          amount: 0,
          icon: "graduation-cap",
        },
      ],
    },
  },
];
