// ? **********************SIMPLE CALLBACK FUNCTION**************
const addFunctionAsync = (x, y, cb) => {
  cb(x + y);
};
// This return is unneccessary since it's not thins function that's interesting. It's the cb that is picking up some values, and then doing something with that.
const addFunctionAsync2 = (x, y, cb) => {
  return cb(x + y);
};

// ? **************** A CALL STACK EXAMPLE *******************

const step1 = () => {
  step2();
};

const step2 = () => {
  step3();
};

const step3 = () => {
  step4();
};

const step4 = () => {
  debugger;
};

// step1();

// ? ************************ SETTIMEOUT ******************

// ? EXAMPLE ONE - HOW SETTIMEOUT WORKS
const sync = () => {
  setTimeout(deferred, 0); // Web API. setTimeout tells JS that do this later. Not now means that it's not in this stack. It's another stack.
  console.log("sync");
};
const deferred = () => {
  console.log("deferred");
};

// sync();

// ? EXAMPLE TWO - HOW CALLBACK FUNCTIONS WORK WITH SETTIMEOUT
// Imagine that deferred has a value we want to get, but can't get it immediately. We can't access it immediately. Since doesnt exist here and now. Solution: sync needs a callback function! This is what callbacks are for - to do some work once a value is available.

const sync2 = callback => {
  setTimeout(() => {
    const res = deferred2();
    callback(res);
  }, 2000);
}; // Web API. setTimeout takes a callback that describes what to do after 1 sec (in this case).

const deferred2 = () => {
  // Deferred returns a value instead of logging it.
  return "deferred";
};

// The callback function is constructed so that it can take a value. Once that value is available, we can pass it into the callback function.
// sync2(result => {
//   console.log(result);
// });

// ? EXAMPLE THREE- GETSALARY SYNCHRONOUS!

function getSalarySync() {
  return 33000;
}

function subtractTaxSync(salary) {
  return salary * 0.75; // 5
}

function subtractRentSync(salary) {
  return salary - 5000; // 7
}

function getDisposableIncomeSync() {
  let salary = getSalarySync(); // 2
  salary = subtractTaxSync(salary); // 4
  salary = subtractRentSync(salary); // 6
  return salary; // 8
}

// console.log(getDisposableIncomeSync()); // 1
// console.log(
//   "THIS SHOULD LOG AFTER THE DISPSABLEINCOME, SINCE THE SETTIMEOUT DOESNT BLOCK THE THREAD"
// );

// ? EXAMPLE THREE- GETSALARY IS SLOW!

// Needs to take callback since we want to the async
function getSalaryAsyncSimple(callback) {
  // Simulating slow network. We open up the thread for other things to happen here.
  setTimeout(() => {
    callback(33000);
  }, 1000);
}

function subtractTaxAsyncSimple(salary) {
  return salary * 0.75;
}

function subtractRentAsyncSimple(salary) {
  return salary - 5000;
}

// This needs a callback since getSalary takes time. So once getSalary is gets 3300, it takes that value as salary and performs the subtractTax and subtractRent syncronously. At the end we have a dispsable salary value, and we can call back to the function passed into getDisposableIncome. In that function we do what we need!
function getDisposableIncomeAsyncSimple(callback) {
  getSalaryAsyncSimple(salary => {
    salary = subtractTaxAsyncSimple(salary);
    salary = subtractRentAsyncSimple(salary);
    callback(salary);
  });
}

// getDisposableIncomeAsyncSimple(salary => {
//   console.log(salary);
// });
// console.log(
//   "THIS SHOULD LOG BEFORE THE DISPSABLEINCOME, SINCE THE SETTIMEOUT DOESNT BLOCK THE THREAD"
// );

// ? EXAMPLE THREE- EVERY STEP IS SLOW!

function getSalaryAsyncNested(callback) {
  setTimeout(() => {
    // console.log("inside getSalary");
    callback(33000);
  }, 1000);
}

function subtractTaxAsyncNested(salary, callback) {
  setTimeout(() => {
    // console.log("inside subtractTax");
    callback(salary * 0.75);
  }, 1000);
}

function subtractRentAsyncNested(salary, callback) {
  setTimeout(() => {
    // console.log("inside subtractRent");
    callback(salary - 5000);
  }, 1000);
}

function getDisposableIncomeAsyncNested(callback) {
  getSalaryAsyncNested(salary1 => {
    subtractTaxAsyncNested(salary1, salary2 => {
      subtractRentAsyncNested(salary2, salary3 => {
        callback(salary3);
      });
    });
  });
}

// getDisposableIncomeAsyncNested(disposableIncome => {
//   console.log(disposableIncome);
// });
// console.log(
//   "THIS SHOULD LOG BEFORE THE DISPSABLEINCOME, SINCE THE SETTIMEOUT DOESNT BLOCK THE THREAD"
// );
