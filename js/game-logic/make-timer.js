const makeTimer = (interval) => {
  const timer = {
    remaningTime: interval,
    tick() {
      const newInterval = this.remaningTime - 1;
      this.remaningTime = newInterval >= 0 ? newInterval : 0;
    }
  };
  return timer;
};

export default makeTimer;
