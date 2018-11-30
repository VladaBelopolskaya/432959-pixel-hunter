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
    let result = 0;
    gameResult.answerArray.forEach((element) => {
      let fastScore = (element.fast === true) ? 50 : 0;
      let slowScore = (element.slow === true) ? -50 : 0;
      result += 100 + fastScore + slowScore;
    });
    result += 50 * gameResult.life;
    return result;
  }
};

export default getScore;
