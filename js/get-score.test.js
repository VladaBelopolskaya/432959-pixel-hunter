import {assert} from 'chai';
import getScore from './get-score';

let gameResult1 = {
  life: 3,
  answerArray: [
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

let gameResult2 = {
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
    }
  ]
};

let gameResult3 = {
  life: 2,
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
    }
  ]
};

let gameResult4 = {
  life: 2,
  answerArray: [
    {
      answered: true,
      fast: false,
      slow: false,
    },
    {
      answered: true,
      fast: false,
      slow: true,
    }
  ]
};

describe(`counting of points`, () => {
  it(`sould be -1`, () => {
    assert.equal(getScore(gameResult1), -1);
  });
  it(`sould be 350`, () => {
    assert.equal(getScore(gameResult2), 350);
  });
  it(`sould be 300`, () => {
    assert.equal(getScore(gameResult3), 300);
  });
  it(`sould be 250`, () => {
    assert.equal(getScore(gameResult4), 250);
  });
});
