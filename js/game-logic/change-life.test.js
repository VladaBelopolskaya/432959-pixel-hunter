import {assert} from 'chai';
import changeLife from './change-life';

let gameResult = {
  life: 3
};

describe(`the change of life`, () => {
  it(`sould be 2`, () => {
    assert.equal(changeLife(gameResult), 2);
  });
});
