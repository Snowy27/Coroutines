const promiseThen = function promiseThen(promise, thenFunction) {
    return promise.then(
      (promiseResult) => thenFunction.call(null, promiseResult)
    );
  },
  coroutine = function coroutine (...functions) {
    return function composedFunction(argument) {
      let wrappedArgument = argument.then ? argument : Promise.resolve(argument);
      return functions.reduce(
        (previousResultPromise, currentFunction) => promiseThen(previousResultPromise, currentFunction),
        wrappedArgument
      );
     };
  };

module.exports = coroutine;
