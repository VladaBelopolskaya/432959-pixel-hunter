import {assert} from 'chai';
import changeTimer from './change-timer';

describe(`timer`, () => {
  it(`should be 29`, () => {
    assert.equal(changeTimer(30), 29);
  });
});
