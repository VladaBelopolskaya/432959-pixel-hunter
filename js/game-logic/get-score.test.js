import {assert} from 'chai';
import getScore from './get-score';

const testGame1 = {
  life: 0,
  answerArray: [
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: false,
      fast: false,
      slow: false,
    }
  ]
};

const testGame2 = {
  life: 0,
  answerArray: [
    {
      answered: true,
      fast: false,
      slow: true,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: true,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: true,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: true,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: true,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    }
  ]
};

const testGame3 = {
  life: 1,
  answerArray: [
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    }
  ]
};

const testGame4 = {
  life: 1,
  answerArray: [
    {
      answered: true,
      fast: false,
      slow: true,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: true,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: true,
      slow: false,
    }
  ]
};

const testGame5 = {
  life: 3,
  answerArray: [
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: false,
    }
  ]
};

describe(`counting of points`, () => {
  it(`should be -1`, () => {
    assert.equal(getScore(testGame1), -1);
  });
  it(`should be 1000`, () => {
    assert.equal(getScore(testGame2), 1000);
  });
  it(`should be 1550`, () => {
    assert.equal(getScore(testGame3), 1550);
  });
  it(`should be 1100`, () => {
    assert.equal(getScore(testGame4), 1100);
  });
  it(`should be 1150`, () => {
    assert.equal(getScore(testGame5), 1150);
  });
});
