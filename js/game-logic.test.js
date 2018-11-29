import { assert } from 'chai';
import { getScore } from './game-logic';

let gameResult = [
  {
    answered: true
  },
  {
    answered: false
  }
];

describe(`counting of points`, () => {
  it(`sould be -1`, () => {
    assert.equal(getScore(gameResult), -1);
  });
});
