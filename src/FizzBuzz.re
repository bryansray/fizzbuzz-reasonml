let get = (tuple: (int, int, int)): string => {
    switch (tuple) {
        | (0, 0, _) => "FizzBuzz";
        | (0, _, _) => "Fizz";
        | (_, 0, _) => "Buzz";
        | (_, _, value) => string_of_int(value);
    }
};