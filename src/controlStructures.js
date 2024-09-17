let i = 10;
console.log(
  ` In the post-increment, the first iteration of i = 10 will be: ${++i}` //11
);
console.log(
  ` In the post-increment, the second iteration of i = 10 will be: ${++i}` //12
);

console.log(
  "----------------------------------------------------------------------------"
);

let x = 10;
console.log(
  ` In the pre-increment, the first iteration of i = 10 will be: ${x++}` //10
);
console.log(
  ` In the pre-increment, the second iteration of i = 10 will be: ${x++}` //11
);

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

const countEvenOdd = (numbers) => {
  let even = 0;
  let odd = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even, odd };
};

console.log(countEvenOdd([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const calculateGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(calculateGrade(85));

const sum = () => {
  let total = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
};

console.log(sum());

const findMax = (maximum) => {
  let max = maximum[0];
  for (let i = 1; i < maximum.length; i++) {
    if (maximum[i] > max) {
      max = maximum[i];
    }
  }
  return max;
};

console.log(
  findMax([123, 235, 834, 239, 129, 573, 237, 284, 754, 839, 293, 513, 829])
);

const reverseString = (str) => {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
};

console.log(reverseString("hello world"));

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:"<>,./?])[a-zA-Z0-9!@#$%^&*()_+=-{};:"<>,./?]{8,}$/;
const password = "MyP@ssw0rd";
if (passwordRegex.test(password)) {
  console.log("Password is valid");
} else {
  console.log("Password is not valid");
}
