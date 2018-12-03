import {assert} from 'chai';
import changeLevel from './change-level';

let gameResult = {
  level: 1
};

describe(`the change of level`, () => {
  it(`sould be 2`, () => {
    assert.equal(changeLevel(gameResult), 2);
  });
});
