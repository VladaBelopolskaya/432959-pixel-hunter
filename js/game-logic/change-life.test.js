import {assert} from 'chai';
import changeLife from './change-life';

const testGame = {
  life: 3
};

describe(`the change of life`, () => {
  it(`should be 2`, () => {
    assert.equal(changeLife(testGame), 2);
  });
});
