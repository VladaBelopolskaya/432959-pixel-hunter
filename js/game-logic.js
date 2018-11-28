let gameResult2 = [
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  },
  {
    answered: false
  }
];

export const getScore = (gameResult) => {
  console.log(`123`);
  gameResult.forEach((element) => {
    let isWin = true;
    if (element.answered === false) {
      isWin = false;
    }
    if (!isWin) {
      return -1;
    } else {
      return 0;
    }
  });
};

console.log(gameResult2);

getScore(gameResult2);

