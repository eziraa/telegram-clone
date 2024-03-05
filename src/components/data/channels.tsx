const channels = [
  {
    id: 1,
    title: "Technology ",
    username: "channel1",
    description: "This is the first channel.",
    members: 500,
    is_private: false,
    created_at: "2022-01-01T12:00:00Z",
    admins: [
      {
        id: 123,
        username: "admin1",
        name: "Admin 1",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 1!",
        timestamp: "2022-01-01T12:01:00Z",
        sender: {
          id: 123,
          username: "admin1",
          name: "Admin 1",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Web development",
    username: "channel2",
    description: "This is the second channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-02T12:00:00Z",
    admins: [
      {
        id: 456,
        username: "admin2",
        name: "Admin 2",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 2!",
        timestamp: "2022-01-02T12:01:00Z",
        sender: {
          id: 456,
          username: "admin2",
          name: "Admin 2",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Let us Launch",
    username: "channel3",
    description: "This is the third channel.",
    members: 750,
    is_private: false,
    created_at: "2022-01-03T12:00:00Z",
    admins: [
      {
        id: 789,
        username: "admin3",
        name: "Admin 3",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 3!",
        timestamp: "2022-01-03T12:01:00Z",
        sender: {
          id: 789,
          username: "admin3",
          name: "Admin 3",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Music Manager",
    username: "channel4",
    description: "This is the fourth channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-04T12:00:00Z",
    admins: [
      {
        id: 1011,
        username: "admin4",
        name: "Admin 4",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 4!",
        timestamp: "2022-01-04T12:01:00Z",
        sender: {
          id: 1011,
          username: "admin4",
          name: "Admin 4",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Old Songs",
    username: "channel5",
    description: "This is the fifth channel.",
    members: 900,
    is_private: false,
    created_at: "2022-01-05T12:00:00Z",
    admins: [
      {
        id: 1213,
        username: "admin5",
        name: "Admin 5",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 5!",
        timestamp: "2022-01-05T12:01:00Z",
        sender: {
          id: 1213,
          username: "admin5",
          name: "Admin 5",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Learn Python",
    username: "channel6",
    description: "This is the sixth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-06T12:00:00Z",
    admins: [
      {
        id: 1415,
        username: "admin6",
        name: "Admin 6",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 6!",
        timestamp: "2022-01-06T12:01:00Z",
        sender: {
          id: 1415,
          username: "admin6",
          name: "Admin 6",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Learn all",
    username: "channel7",
    description: "This is the seventh channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-07T12:00:00Z",
    admins: [
      {
        id: 1617,
        username: "admin7",
        name: "Admin 7",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 7!",
        timestamp: "2022-01-07T12:01:00Z",
        sender: {
          id: 1617,
          username: "admin7",
          name: "Admin 7",
        },
      },
    ],
  },
  {
    id: 8,
    title: "The Power",
    username: "channel8",
    description: "This is the eighth channel.",
    members: 550,
    is_private: false,
    created_at: "2022-01-08T12:00:00Z",
    admins: [
      {
        id: 1819,
        username: "admin8",
        name: "Admin 8",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 8!",
        timestamp: "2022-01-08T12:01:00Z",
        sender: {
          id: 1819,
          username: "admin8",
          name: "Admin 8",
        },
      },
    ],
  },
  {
    id: 9,
    title: "Channel 9",
    username: "channel9",
    description: "This is the ninth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-09T12:00:00Z",
    admins: [
      {
        id: 2021,
        username: "admin9",
        name: "Admin 9",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 9!",
        timestamp: "2022-01-09T12:01:00Z",
        sender: {
          id: 2021,
          username: "admin9",
          name: "Admin 9",
        },
      },
    ],
  },
  {
    id: 10,
    title: "Live for Live",
    username: "channel10",
    description: "This is the tenth channel.",
    members: 950,
    is_private: false,
    created_at: "2022-01-10T12:00:00Z",
    admins: [
      {
        id: 2223,
        username: "admin10",
        name: "Admin 10",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 10!",
        timestamp: "2022-01-10T12:01:00Z",
        sender: {
          id: 2223,
          username: "admin10",
          name: "Admin 10",
        },
      },
    ],
  },
  {
    id: 11,
    title: "Psychological Services",
    username: "channel11",
    description: "This is the eleventh channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-11T12:00:00Z",
    admins: [
      {
        id: 2425,
        username: "admin11",
        name: "Admin 11",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 11!",
        timestamp: "2022-01-11T12:01:00Z",
        sender: {
          id: 2425,
          username: "admin11",
          name: "Admin 11",
        },
      },
    ],
  },
  {
    id: 12,
    title: "Be the one",
    username: "channel12",
    description: "This is the twelfth channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-12T12:00:00Z",
    admins: [
      {
        id: 2627,
        username: "admin12",
        name: "Admin 12",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 12!",
        timestamp: "2022-01-12T12:01:00Z",
        sender: {
          id: 2627,
          username: "admin12",
          name: "Admin 12",
        },
      },
    ],
  },
  {
    id: 13,
    title: "Power of mine",
    username: "channel13",
    description: "This is the thirteenth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-13T12:00:00Z",
    admins: [
      {
        id: 2829,
        username: "admin13",
        name: "Admin 13",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 13!",
        timestamp: "2022-01-13T12:01:00Z",
        sender: {
          id: 2829,
          username: "admin13",
          name: "Admin 13",
        },
      },
    ],
  },
  {
    id: 14,
    title: "Tackle yourself",
    username: "channel14",
    description: "This is the fourteenth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-14T12:00:00Z",
    admins: [
      {
        id: 3031,
        username: "admin14",
        name: "Admin 14",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 14!",
        timestamp: "2022-01-14T12:01:00Z",
        sender: {
          id: 3031,
          username: "admin14",
          name: "Admin 14",
        },
      },
    ],
  },
  {
    id: 15,
    title: "Lifetime",
    username: "channel15",
    description: "This is the fifteenth channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-15T12:00:00Z",
    admins: [
      {
        id: 3233,
        username: "admin15",
        name: "Admin 15",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 15!",
        timestamp: "2022-01-15T12:01:00Z",
        sender: {
          id: 3233,
          username: "admin15",
          name: "Admin 15",
        },
      },
    ],
  },
  {
    id: 1,
    title: "Technology ",
    username: "channel1",
    description: "This is the first channel.",
    members: 500,
    is_private: false,
    created_at: "2022-01-01T12:00:00Z",
    admins: [
      {
        id: 123,
        username: "admin1",
        name: "Admin 1",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 1!",
        timestamp: "2022-01-01T12:01:00Z",
        sender: {
          id: 123,
          username: "admin1",
          name: "Admin 1",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Web development",
    username: "channel2",
    description: "This is the second channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-02T12:00:00Z",
    admins: [
      {
        id: 456,
        username: "admin2",
        name: "Admin 2",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 2!",
        timestamp: "2022-01-02T12:01:00Z",
        sender: {
          id: 456,
          username: "admin2",
          name: "Admin 2",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Let us Launch",
    username: "channel3",
    description: "This is the third channel.",
    members: 750,
    is_private: false,
    created_at: "2022-01-03T12:00:00Z",
    admins: [
      {
        id: 789,
        username: "admin3",
        name: "Admin 3",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 3!",
        timestamp: "2022-01-03T12:01:00Z",
        sender: {
          id: 789,
          username: "admin3",
          name: "Admin 3",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Music Manager",
    username: "channel4",
    description: "This is the fourth channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-04T12:00:00Z",
    admins: [
      {
        id: 1011,
        username: "admin4",
        name: "Admin 4",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 4!",
        timestamp: "2022-01-04T12:01:00Z",
        sender: {
          id: 1011,
          username: "admin4",
          name: "Admin 4",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Old Songs",
    username: "channel5",
    description: "This is the fifth channel.",
    members: 900,
    is_private: false,
    created_at: "2022-01-05T12:00:00Z",
    admins: [
      {
        id: 1213,
        username: "admin5",
        name: "Admin 5",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 5!",
        timestamp: "2022-01-05T12:01:00Z",
        sender: {
          id: 1213,
          username: "admin5",
          name: "Admin 5",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Learn Python",
    username: "channel6",
    description: "This is the sixth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-06T12:00:00Z",
    admins: [
      {
        id: 1415,
        username: "admin6",
        name: "Admin 6",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 6!",
        timestamp: "2022-01-06T12:01:00Z",
        sender: {
          id: 1415,
          username: "admin6",
          name: "Admin 6",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Learn all",
    username: "channel7",
    description: "This is the seventh channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-07T12:00:00Z",
    admins: [
      {
        id: 1617,
        username: "admin7",
        name: "Admin 7",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 7!",
        timestamp: "2022-01-07T12:01:00Z",
        sender: {
          id: 1617,
          username: "admin7",
          name: "Admin 7",
        },
      },
    ],
  },
  {
    id: 8,
    title: "The Power",
    username: "channel8",
    description: "This is the eighth channel.",
    members: 550,
    is_private: false,
    created_at: "2022-01-08T12:00:00Z",
    admins: [
      {
        id: 1819,
        username: "admin8",
        name: "Admin 8",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 8!",
        timestamp: "2022-01-08T12:01:00Z",
        sender: {
          id: 1819,
          username: "admin8",
          name: "Admin 8",
        },
      },
    ],
  },
  {
    id: 9,
    title: "Channel 9",
    username: "channel9",
    description: "This is the ninth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-09T12:00:00Z",
    admins: [
      {
        id: 2021,
        username: "admin9",
        name: "Admin 9",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 9!",
        timestamp: "2022-01-09T12:01:00Z",
        sender: {
          id: 2021,
          username: "admin9",
          name: "Admin 9",
        },
      },
    ],
  },
  {
    id: 10,
    title: "Live for Live",
    username: "channel10",
    description: "This is the tenth channel.",
    members: 950,
    is_private: false,
    created_at: "2022-01-10T12:00:00Z",
    admins: [
      {
        id: 2223,
        username: "admin10",
        name: "Admin 10",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 10!",
        timestamp: "2022-01-10T12:01:00Z",
        sender: {
          id: 2223,
          username: "admin10",
          name: "Admin 10",
        },
      },
    ],
  },
  {
    id: 11,
    title: "Psychological Services",
    username: "channel11",
    description: "This is the eleventh channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-11T12:00:00Z",
    admins: [
      {
        id: 2425,
        username: "admin11",
        name: "Admin 11",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 11!",
        timestamp: "2022-01-11T12:01:00Z",
        sender: {
          id: 2425,
          username: "admin11",
          name: "Admin 11",
        },
      },
    ],
  },
  {
    id: 12,
    title: "Be the one",
    username: "channel12",
    description: "This is the twelfth channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-12T12:00:00Z",
    admins: [
      {
        id: 2627,
        username: "admin12",
        name: "Admin 12",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 12!",
        timestamp: "2022-01-12T12:01:00Z",
        sender: {
          id: 2627,
          username: "admin12",
          name: "Admin 12",
        },
      },
    ],
  },
  {
    id: 13,
    title: "Power of mine",
    username: "channel13",
    description: "This is the thirteenth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-13T12:00:00Z",
    admins: [
      {
        id: 2829,
        username: "admin13",
        name: "Admin 13",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 13!",
        timestamp: "2022-01-13T12:01:00Z",
        sender: {
          id: 2829,
          username: "admin13",
          name: "Admin 13",
        },
      },
    ],
  },
  {
    id: 14,
    title: "Tackle yourself",
    username: "channel14",
    description: "This is the fourteenth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-14T12:00:00Z",
    admins: [
      {
        id: 3031,
        username: "admin14",
        name: "Admin 14",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 14!",
        timestamp: "2022-01-14T12:01:00Z",
        sender: {
          id: 3031,
          username: "admin14",
          name: "Admin 14",
        },
      },
    ],
  },
  {
    id: 15,
    title: "Lifetime",
    username: "channel15",
    description: "This is the fifteenth channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-15T12:00:00Z",
    admins: [
      {
        id: 3233,
        username: "admin15",
        name: "Admin 15",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 15!",
        timestamp: "2022-01-15T12:01:00Z",
        sender: {
          id: 3233,
          username: "admin15",
          name: "Admin 15",
        },
      },
    ],
  },
  {
    id: 1,
    title: "Technology ",
    username: "channel1",
    description: "This is the first channel.",
    members: 500,
    is_private: false,
    created_at: "2022-01-01T12:00:00Z",
    admins: [
      {
        id: 123,
        username: "admin1",
        name: "Admin 1",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 1!",
        timestamp: "2022-01-01T12:01:00Z",
        sender: {
          id: 123,
          username: "admin1",
          name: "Admin 1",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Web development",
    username: "channel2",
    description: "This is the second channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-02T12:00:00Z",
    admins: [
      {
        id: 456,
        username: "admin2",
        name: "Admin 2",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 2!",
        timestamp: "2022-01-02T12:01:00Z",
        sender: {
          id: 456,
          username: "admin2",
          name: "Admin 2",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Let us Launch",
    username: "channel3",
    description: "This is the third channel.",
    members: 750,
    is_private: false,
    created_at: "2022-01-03T12:00:00Z",
    admins: [
      {
        id: 789,
        username: "admin3",
        name: "Admin 3",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 3!",
        timestamp: "2022-01-03T12:01:00Z",
        sender: {
          id: 789,
          username: "admin3",
          name: "Admin 3",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Music Manager",
    username: "channel4",
    description: "This is the fourth channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-04T12:00:00Z",
    admins: [
      {
        id: 1011,
        username: "admin4",
        name: "Admin 4",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 4!",
        timestamp: "2022-01-04T12:01:00Z",
        sender: {
          id: 1011,
          username: "admin4",
          name: "Admin 4",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Old Songs",
    username: "channel5",
    description: "This is the fifth channel.",
    members: 900,
    is_private: false,
    created_at: "2022-01-05T12:00:00Z",
    admins: [
      {
        id: 1213,
        username: "admin5",
        name: "Admin 5",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 5!",
        timestamp: "2022-01-05T12:01:00Z",
        sender: {
          id: 1213,
          username: "admin5",
          name: "Admin 5",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Learn Python",
    username: "channel6",
    description: "This is the sixth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-06T12:00:00Z",
    admins: [
      {
        id: 1415,
        username: "admin6",
        name: "Admin 6",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 6!",
        timestamp: "2022-01-06T12:01:00Z",
        sender: {
          id: 1415,
          username: "admin6",
          name: "Admin 6",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Learn all",
    username: "channel7",
    description: "This is the seventh channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-07T12:00:00Z",
    admins: [
      {
        id: 1617,
        username: "admin7",
        name: "Admin 7",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 7!",
        timestamp: "2022-01-07T12:01:00Z",
        sender: {
          id: 1617,
          username: "admin7",
          name: "Admin 7",
        },
      },
    ],
  },
  {
    id: 8,
    title: "The Power",
    username: "channel8",
    description: "This is the eighth channel.",
    members: 550,
    is_private: false,
    created_at: "2022-01-08T12:00:00Z",
    admins: [
      {
        id: 1819,
        username: "admin8",
        name: "Admin 8",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 8!",
        timestamp: "2022-01-08T12:01:00Z",
        sender: {
          id: 1819,
          username: "admin8",
          name: "Admin 8",
        },
      },
    ],
  },
  {
    id: 9,
    title: "Channel 9",
    username: "channel9",
    description: "This is the ninth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-09T12:00:00Z",
    admins: [
      {
        id: 2021,
        username: "admin9",
        name: "Admin 9",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 9!",
        timestamp: "2022-01-09T12:01:00Z",
        sender: {
          id: 2021,
          username: "admin9",
          name: "Admin 9",
        },
      },
    ],
  },
  {
    id: 10,
    title: "Live for Live",
    username: "channel10",
    description: "This is the tenth channel.",
    members: 950,
    is_private: false,
    created_at: "2022-01-10T12:00:00Z",
    admins: [
      {
        id: 2223,
        username: "admin10",
        name: "Admin 10",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 10!",
        timestamp: "2022-01-10T12:01:00Z",
        sender: {
          id: 2223,
          username: "admin10",
          name: "Admin 10",
        },
      },
    ],
  },
  {
    id: 11,
    title: "Psychological Services",
    username: "channel11",
    description: "This is the eleventh channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-11T12:00:00Z",
    admins: [
      {
        id: 2425,
        username: "admin11",
        name: "Admin 11",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 11!",
        timestamp: "2022-01-11T12:01:00Z",
        sender: {
          id: 2425,
          username: "admin11",
          name: "Admin 11",
        },
      },
    ],
  },
  {
    id: 12,
    title: "Be the one",
    username: "channel12",
    description: "This is the twelfth channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-12T12:00:00Z",
    admins: [
      {
        id: 2627,
        username: "admin12",
        name: "Admin 12",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 12!",
        timestamp: "2022-01-12T12:01:00Z",
        sender: {
          id: 2627,
          username: "admin12",
          name: "Admin 12",
        },
      },
    ],
  },
  {
    id: 13,
    title: "Power of mine",
    username: "channel13",
    description: "This is the thirteenth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-13T12:00:00Z",
    admins: [
      {
        id: 2829,
        username: "admin13",
        name: "Admin 13",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 13!",
        timestamp: "2022-01-13T12:01:00Z",
        sender: {
          id: 2829,
          username: "admin13",
          name: "Admin 13",
        },
      },
    ],
  },
  {
    id: 14,
    title: "Tackle yourself",
    username: "channel14",
    description: "This is the fourteenth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-14T12:00:00Z",
    admins: [
      {
        id: 3031,
        username: "admin14",
        name: "Admin 14",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 14!",
        timestamp: "2022-01-14T12:01:00Z",
        sender: {
          id: 3031,
          username: "admin14",
          name: "Admin 14",
        },
      },
    ],
  },
  {
    id: 15,
    title: "Lifetime",
    username: "channel15",
    description: "This is the fifteenth channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-15T12:00:00Z",
    admins: [
      {
        id: 3233,
        username: "admin15",
        name: "Admin 15",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 15!",
        timestamp: "2022-01-15T12:01:00Z",
        sender: {
          id: 3233,
          username: "admin15",
          name: "Admin 15",
        },
      },
    ],
  },
  {
    id: 1,
    title: "Technology ",
    username: "channel1",
    description: "This is the first channel.",
    members: 500,
    is_private: false,
    created_at: "2022-01-01T12:00:00Z",
    admins: [
      {
        id: 123,
        username: "admin1",
        name: "Admin 1",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 1!",
        timestamp: "2022-01-01T12:01:00Z",
        sender: {
          id: 123,
          username: "admin1",
          name: "Admin 1",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Web development",
    username: "channel2",
    description: "This is the second channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-02T12:00:00Z",
    admins: [
      {
        id: 456,
        username: "admin2",
        name: "Admin 2",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 2!",
        timestamp: "2022-01-02T12:01:00Z",
        sender: {
          id: 456,
          username: "admin2",
          name: "Admin 2",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Let us Launch",
    username: "channel3",
    description: "This is the third channel.",
    members: 750,
    is_private: false,
    created_at: "2022-01-03T12:00:00Z",
    admins: [
      {
        id: 789,
        username: "admin3",
        name: "Admin 3",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 3!",
        timestamp: "2022-01-03T12:01:00Z",
        sender: {
          id: 789,
          username: "admin3",
          name: "Admin 3",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Music Manager",
    username: "channel4",
    description: "This is the fourth channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-04T12:00:00Z",
    admins: [
      {
        id: 1011,
        username: "admin4",
        name: "Admin 4",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 4!",
        timestamp: "2022-01-04T12:01:00Z",
        sender: {
          id: 1011,
          username: "admin4",
          name: "Admin 4",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Old Songs",
    username: "channel5",
    description: "This is the fifth channel.",
    members: 900,
    is_private: false,
    created_at: "2022-01-05T12:00:00Z",
    admins: [
      {
        id: 1213,
        username: "admin5",
        name: "Admin 5",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 5!",
        timestamp: "2022-01-05T12:01:00Z",
        sender: {
          id: 1213,
          username: "admin5",
          name: "Admin 5",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Learn Python",
    username: "channel6",
    description: "This is the sixth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-06T12:00:00Z",
    admins: [
      {
        id: 1415,
        username: "admin6",
        name: "Admin 6",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 6!",
        timestamp: "2022-01-06T12:01:00Z",
        sender: {
          id: 1415,
          username: "admin6",
          name: "Admin 6",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Learn all",
    username: "channel7",
    description: "This is the seventh channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-07T12:00:00Z",
    admins: [
      {
        id: 1617,
        username: "admin7",
        name: "Admin 7",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 7!",
        timestamp: "2022-01-07T12:01:00Z",
        sender: {
          id: 1617,
          username: "admin7",
          name: "Admin 7",
        },
      },
    ],
  },
  {
    id: 8,
    title: "The Power",
    username: "channel8",
    description: "This is the eighth channel.",
    members: 550,
    is_private: false,
    created_at: "2022-01-08T12:00:00Z",
    admins: [
      {
        id: 1819,
        username: "admin8",
        name: "Admin 8",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 8!",
        timestamp: "2022-01-08T12:01:00Z",
        sender: {
          id: 1819,
          username: "admin8",
          name: "Admin 8",
        },
      },
    ],
  },
  {
    id: 9,
    title: "Channel 9",
    username: "channel9",
    description: "This is the ninth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-09T12:00:00Z",
    admins: [
      {
        id: 2021,
        username: "admin9",
        name: "Admin 9",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 9!",
        timestamp: "2022-01-09T12:01:00Z",
        sender: {
          id: 2021,
          username: "admin9",
          name: "Admin 9",
        },
      },
    ],
  },
  {
    id: 10,
    title: "Live for Live",
    username: "channel10",
    description: "This is the tenth channel.",
    members: 950,
    is_private: false,
    created_at: "2022-01-10T12:00:00Z",
    admins: [
      {
        id: 2223,
        username: "admin10",
        name: "Admin 10",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 10!",
        timestamp: "2022-01-10T12:01:00Z",
        sender: {
          id: 2223,
          username: "admin10",
          name: "Admin 10",
        },
      },
    ],
  },
  {
    id: 11,
    title: "Psychological Services",
    username: "channel11",
    description: "This is the eleventh channel.",
    members: 600,
    is_private: false,
    created_at: "2022-01-11T12:00:00Z",
    admins: [
      {
        id: 2425,
        username: "admin11",
        name: "Admin 11",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 11!",
        timestamp: "2022-01-11T12:01:00Z",
        sender: {
          id: 2425,
          username: "admin11",
          name: "Admin 11",
        },
      },
    ],
  },
  {
    id: 12,
    title: "Be the one",
    username: "channel12",
    description: "This is the twelfth channel.",
    members: 700,
    is_private: false,
    created_at: "2022-01-12T12:00:00Z",
    admins: [
      {
        id: 2627,
        username: "admin12",
        name: "Admin 12",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 12!",
        timestamp: "2022-01-12T12:01:00Z",
        sender: {
          id: 2627,
          username: "admin12",
          name: "Admin 12",
        },
      },
    ],
  },
  {
    id: 13,
    title: "Power of mine",
    username: "channel13",
    description: "This is the thirteenth channel.",
    members: 800,
    is_private: false,
    created_at: "2022-01-13T12:00:00Z",
    admins: [
      {
        id: 2829,
        username: "admin13",
        name: "Admin 13",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 13!",
        timestamp: "2022-01-13T12:01:00Z",
        sender: {
          id: 2829,
          username: "admin13",
          name: "Admin 13",
        },
      },
    ],
  },
  {
    id: 14,
    title: "Tackle yourself",
    username: "channel14",
    description: "This is the fourteenth channel.",
    members: 850,
    is_private: false,
    created_at: "2022-01-14T12:00:00Z",
    admins: [
      {
        id: 3031,
        username: "admin14",
        name: "Admin 14",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 14!",
        timestamp: "2022-01-14T12:01:00Z",
        sender: {
          id: 3031,
          username: "admin14",
          name: "Admin 14",
        },
      },
    ],
  },
  {
    id: 15,
    title: "Lifetime",
    username: "channel15",
    description: "This is the fifteenth channel.",
    members: 1000,
    is_private: false,
    created_at: "2022-01-15T12:00:00Z",
    admins: [
      {
        id: 3233,
        username: "admin15",
        name: "Admin 15",
      },
    ],
    messages: [
      {
        id: 1,
        text: "Welcome to Channel 15!",
        timestamp: "2022-01-15T12:01:00Z",
        sender: {
          id: 3233,
          username: "admin15",
          name: "Admin 15",
        },
      },
    ],
  },
];

export default channels;
