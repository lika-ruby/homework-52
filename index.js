const user = {
  hobby: "reading",
  premium: true,
};

const addMood = () => (user.mood = "happy");
const changeHobby = ({ hobby, premium }) => (hobby = "skydiving");
const changePremium = ({ hobby, premium }) => (premium = false);

const makeMessage = function (user, addMood, changeHobby, changePremium) {
  addMood();
  changeHobby(user);
  changePremium(user);
  let message = "";
  const keys = Object.keys(user);
  for (const key of keys) {
    message += `${key} - ${user[key]}, `;
  }
  return message;
};

console.log("--------------------------- Task 1 ---------------------------");
console.log(makeMessage(user, addMood, changeHobby, changePremium));

///////////////////////////////////////////////////////////////////////////////////

const account = {
  balance: 10000,

  deposit({ balance }, sumDeposit) {
    balance += sumDeposit;
  },

  withdraw({ balance }, sumWithdraw) {
    balance -= sumWithdraw;
  },
  showBalance({ balance }) {
    console.log(`У вас на балансі ${balance} грн`);
  },
};

console.log("--------------------------- Task 7 ---------------------------");
let reapete;
do {
  const choice = confirm(
    "Якщо хочете поповнити рахунок - натиснить 'Ok', якщо хочете зняти з рахунку - натиснить 'Cansel'"
  );
  if (choice === true) {
    const sumDeposit = Number(
      prompt("Введіть суму, на яку хочете поповнити баланс")
    );
    account.deposit(account, sumDeposit);
  } else {
    const sumWithdraw = Number(
      prompt("Введіть суму, яку хочете зняти з баланс")
    );
    account.withdraw(account, sumWithdraw);
  }
  reapete = confirm("Чи хочети ви ще поповнити чи зняти з рахунку?");
} while (reapete === true);

account.showBalance(account, account);

///////////////////////////////////////////////////////////////////////////////////
