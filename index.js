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

  deposit({ balance }) {
    const sumDeposit = Number(
      prompt("Введіть суму, на яку хочете поповнити баланс")
    );
    balance += sumDeposit;
    return balance;
  },

  withdraw({ balance }) {
    const sumWithdraw = Number(
      prompt("Введіть суму, яку хочете зняти з баланс")
    );
    balance -= sumWithdraw;
    return balance;
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
    account.balance = account.deposit(account);
  } else {
    account.balance = account.withdraw(account);
  }
  reapete = confirm("Чи хочети ви ще поповнити чи зняти з рахунку?");
} while (reapete === true);

account.showBalance(account);

///////////////////////////////////////////////////////////////////////////////////
