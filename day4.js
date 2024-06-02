var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, apple, orange, mango];
arr.forEach((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }

  (function (arr) {
    const titleCase = (str) =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const result = arr.map(titleCase);
    console.log(result);
  })(["apple", "banana", "cherry"]);
  (function (arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
  })(function (arr) {
    const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const primes = arr.filter(isPrime);
    console.log(primes);
  })(function (arr, k) {
    const rotate = (arr, k) => {
      const n = arr.length;
      k %= n;
      const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
      return rotated;
    };
    const rotatedArray = rotate([1, 2, 3, 4, 5], 2);
    console.log(rotatedArray);
  })([1, 2, 3, 4, 5], 2);
});
