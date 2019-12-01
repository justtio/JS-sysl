//default export

const users = [
  {
    name: "levi",
    premium: true
  },
  {
    name: "shuan",
    premium: false
  },
  {
    name: "echo",
    premium: false
  },
  {
    name: "jose",
    premium: true
  }
];

const getPremUsers = users => users.filter(usr => usr.premium);

export { getPremUsers, users as default };
