const getScore = (gameResult) => {
  const indexOfFalse = gameResult.answerArray.findIndex((element) => {
    if (element.answered === false) {
      return true;
    }
    return false;
  });
  if (indexOfFalse > -1) {
    return -1;
  } else {
    let totalPoints = 0;
    gameResult.answerArray.forEach((element) => {
      let fastScore = (element.fast === true) ? 50 : 0;
      let slowScore = (element.slow === true) ? -50 : 0;
      totalPoints += 100 + fastScore + slowScore;
    });
    totalPoints += 50 * gameResult.life;
    return totalPoints;
  }
};

export default getScore;
