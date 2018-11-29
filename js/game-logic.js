export const getScore = (gameResult) => {
  console.log(`123`);
  gameResult.forEach((element) => {
    let isWin = true;
    if (!element.answered) {
      isWin = false;
    }
    if (!isWin) {
      return -1;
    } else {
      return 0;
    }
  });
};
