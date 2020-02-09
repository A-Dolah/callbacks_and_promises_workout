// ? EXAMPLE ONE - GETDISPOSABLEINCOME AS PROMISE!

// Callbacks get hard to refactor after a while. All functions that leads into deep function needs a callback.
// Promises sends back an object that you can send a callback to. Much nicer than normal callbacks.
// The callback in promises is usually called resolve. So instead of calling callback(3300) we call the resolve callback with 33000, like so resolve(3300)

function getSalaryPromises() {
  return new Promise(resolve => {
    setTimeout(() => {
      // console.log("inside getSalary");
      resolve(33000);
    }, 1000);
  });
}

// getSalary returns a promise, you with me? Yes.
// .then is a method on the promise object that puts a callback in the promise chain. Here we will get out a log of the salary.
// ? getSalaryPromises().then(salary => console.log(salary));

function subtractTaxPromises(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary * 0.75);
    }, 1000);
  });
}

function subtractRentPromises(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary - 5000);
    }, 1000);
  });
}

function getDisposablePromises() {
  return getSalaryPromises()
    .then(salary1 => subtractTaxPromises(salary1))
    .then(salary2 => subtractRentPromises(salary2));
}

// getDisposablePromises().then(disposable => console.log(disposable));
// console.log("THIS SHOULD LOG BEFORE THE GETSALARY");

// ? EXAMPLE TWO - PROMISES MAGICALLY REFACTORED!

function getSalaryPromisesRefactored() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(33000);
    }, 1000);
  });
}

function subtractTaxPromisesRefactored(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary * 0.75);
    }, 1000);
  });
}

function subtractRentPromisesRefactored(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary - 5000);
    }, 1000);
  });
}

// We can pass in the callback function like this, without having to call them explicitly.
function getDisposablePromisesRefactored() {
  return getSalaryPromisesRefactored()
    .then(subtractTaxPromisesRefactored)
    .then(subtractRentPromisesRefactored);
}

// getDisposablePromises().then(disposable => console.log(disposable));
// console.log("REFACTORED:", "THIS SHOULD LOG BEFORE THE GETSALARY");

// ? EXAMPLE THREE - !
function getSalaryPromisesAll(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary);
    }, 1000);
  });
}

function getSalarySum() {
  return Promise.all([
    getSalaryPromisesAll(30000),
    getSalaryPromisesAll(40000),
    getSalaryPromisesAll(50000),
    getSalaryPromisesAll(60000),
    getSalaryPromisesAll(70000),
    getSalaryPromisesAll(80000),
    getSalaryPromisesAll(90000)
  ]).then(salaries => {
    return salaries.reduce((prev, cur) => prev + cur, 0);
  });
}

function subtractTaxPromisesAll(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary * 0.75);
    }, 1000);
  });
}

function subtractRentPromisesAll(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary - 5000);
    }, 1000);
  });
}

// We can pass in the callback function like this, without having to call them explicitly.
function getDisposablePromisesAll() {
  return getSalarySum()
    .then(subtractTaxPromisesAll)
    .then(subtractRentPromisesAll);
}

getDisposablePromisesAll().then(disposable => {
  console.log(disposable);
});
