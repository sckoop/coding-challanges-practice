import {countingValleys} from "./countingValleys";

test('Example 1', () => {
  expect(countingValleys(8, 'UDDDUDUU')).toBe(1)
});

test('Example 2', () => {
  expect(countingValleys(12, 'DDUUDDUDUUUD')).toBe(2)
});