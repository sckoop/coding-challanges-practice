import { fizzbuzz } from "./fizzbuzz";

test('Example 1', () => {
  expect(
    fizzbuzz(
      15
    )
  ).toEqual(
    [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
    ]
  );
})
