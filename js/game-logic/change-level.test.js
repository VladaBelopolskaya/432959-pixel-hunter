import {assert} from 'chai';
import changeLevel from './change-level';

const testGame = {
  level: 1
};

describe(`the change of level`, () => {
  it(`should be 2`, () => {
    assert.equal(changeLevel(testGame), 2);
  });
});
