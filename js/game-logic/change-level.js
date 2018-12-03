const changeLevel = (gameResult) => {
  gameResult.level += 1;
  return gameResult.level;
};

export default changeLevel;
