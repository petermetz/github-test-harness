import test from 'ava';

import { double, power } from './number';

test('double', (t) => {
  t.is(double(2, false), 4);
});

test('double - 3', (t) => {
  t.is(double(3, false), 6);
});

test('double - 4', (t) => {
  t.is(double(4, false), 8);
});

test('power', (t) => {
  t.is(power(2, 4), 16);
});
