for (index in 1 to 100) {
    let result = FizzBuzz.get((index mod 3, index mod 5, index));
    Js.log(result);
}