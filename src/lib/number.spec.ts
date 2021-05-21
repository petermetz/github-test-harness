import test from 'ava';

import { double, power } from './number';

test('double', (t) => {
  t.is(double(2, "haha this is wrong"), 4);
});

test('power', (t) => {
  t.is(power(2, 4), 16);
});
