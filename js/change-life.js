const changeLife = (gameResult) => {
  gameResult.life -= 1;
  return gameResult.life;
};

export default changeLife;
