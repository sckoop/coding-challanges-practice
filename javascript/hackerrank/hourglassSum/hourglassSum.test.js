import {hourglassSum} from "./hourglassSum";

test('Example 1', () => {
  expect(
    hourglassSum([ [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ] ])
  ).toBe(19)
});

test('Example 2', () => {
  expect(
    hourglassSum([ [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 9, 2, -4, -4, 0 ],
      [ 0, 0, 0, -2, 0, 0 ],
      [ 0, 0, -1, -2, -4, 0 ] ]
    )
  ).toBe(13);
})

test('Example 3', () => {
  expect(
    hourglassSum([ [ -9, -9, -9, 1, 1, 1 ],
      [ 0, -9, 0, 4, 3, 2 ],
      [ -9, -9, -9, 1, 2, 3 ],
      [ 0, 0, 8, 6, 6, 0 ],
      [ 0, 0, 0, -2, 0, 0 ],
      [ 0, 0, 1, 2, 4, 0 ] ]
    )
  ).toBe(28);
})
test('Example 4', () => {
  expect(
    hourglassSum([
      [ -1, -1, 0, -9, -2, -2 ],
      [ -2, -1, -6, -8, -2, -5 ],
      [ -1, -1, -1, -2, -3, -4 ],
      [ -1, -9, -2, -4, -5, -5 ],
      [ -7, -3, -3, -2, -9, -9 ],
      [ -1, -3, -1, -2, -4, -6 ]
      ])
  ).toBe(-6);
})