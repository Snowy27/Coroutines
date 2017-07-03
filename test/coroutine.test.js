const coroutine = require('../');

test('Works when invoked with not a promise', () => {
  let increment = (arg) => arg+1,
    double = (arg) => arg*2,
    incrementAndDouble = coroutine(increment, double);
  expect(incrementAndDouble).toBeInstanceOf(Function);
  return incrementAndDouble(2).then((result) => {
    expect(result).toBe(6);
  });
});

test('Works when invoked with a promise', () => {
  let increment = (arg) => arg+1,
    double = (arg) => arg*2,
    incrementAndDouble = coroutine(increment, double);
  expect(incrementAndDouble).toBeInstanceOf(Function);
  return incrementAndDouble(Promise.resolve(2)).then((result) => {
    expect(result).toBe(6);
  });
});

test('Works when wraps a function that returns promise', () => {
  let increment = (arg) => arg+1,
    doubleAsync = (arg) => Promise.resolve(arg*2),
    incrementAndDouble = coroutine(increment, doubleAsync);
  expect(incrementAndDouble).toBeInstanceOf(Function);
  return incrementAndDouble(2).then((result) => {
    expect(result).toBe(6);
  });
});
