import {assert} from 'chai';
import makeTimer from './make-timer';

const testTimer = makeTimer(5);
const testTimerOne = makeTimer(5);
testTimerOne.tick();
const testTimerTwo = makeTimer(2);
testTimerTwo.tick();
testTimerTwo.tick();
const testTimerThree = makeTimer(1);
testTimerThree.tick();
testTimerThree.tick();

describe(`timer`, () => {
  it(`should be 5`, () => {
    assert.equal(testTimer.remaningTime, 5);
  });
  it(`should be 4`, () => {
    assert.equal(testTimerOne.remaningTime, 4);
  });
  it(`should be 0`, () => {
    assert.equal(testTimerTwo.remaningTime, 0);
  });
  it(`should be 0`, () => {
    assert.equal(testTimerThree.remaningTime, 0);
  });
});
