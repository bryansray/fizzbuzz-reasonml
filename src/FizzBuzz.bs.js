// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';


function get(tuple) {
  if (tuple[0] !== 0) {
    if (tuple[1] !== 0) {
      return String(tuple[2]);
    } else {
      return "Buzz";
    }
  } else if (tuple[1] !== 0) {
    return "Fizz";
  } else {
    return "FizzBuzz";
  }
}

exports.get = get;
/* No side effect */
