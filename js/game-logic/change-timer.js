const changeTimer = (remaningTime) => {
  remaningTime = remaningTime - 1 >= 0 ? remaningTime - 1 : 0;
  return remaningTime;
};

export default changeTimer;
