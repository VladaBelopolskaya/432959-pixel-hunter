const getScore = (gameResult) => {
  const resultPoint = {
    CORRECT: 100,
    FAST: 50,
    SLOW: -50,
    LIFE: 50,
  };

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
      let fastScore = (element.fast === true) ? resultPoint.FAST : 0;
      let slowScore = (element.slow === true) ? resultPoint.SLOW : 0;
      totalPoints += resultPoint.CORRECT + fastScore + slowScore;
    });
    totalPoints += resultPoint.LIFE * gameResult.life;
    return totalPoints;
  }
};

export default getScore;
