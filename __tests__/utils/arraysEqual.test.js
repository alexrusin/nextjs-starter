import arrayEquals from '@/utils/arraysEqual';

it('two empty arrays are equal', () => {
  const equals = arrayEquals([], []);
  // for more expect "matchers" go to https://jestjs.io/docs/expect
  expect(equals).toBe(true);
});

it('two arrays of different length are not equal', () => {
  const equals = arrayEquals([1], [1, 2]);
  expect(equals).toBe(false);
});

it('two different arrays are not equal', () => {
  const equals = arrayEquals([1, 2], [3, 4]);
  expect(equals).toBe(false);
});

it('two same arrays are equal', () => {
  const equals = arrayEquals([1, 2], [1, 2]);
  expect(equals).toBe(true);
});

it('two arrays in different order are not equal', () => {
  const equals = arrayEquals([1, 2], [2, 1]);
  expect(equals).toBe(false);
});
