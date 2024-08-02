// TASK 1 ----------------------------------------------------------------------------------------------------
/*
Modify parameters section in the "processQuantities" function to match console.log outputs
*/

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 0
  return maxQty - minQty; // returns 21
};

const qtyRange = [8, 29];

processQuantities(qtyRange);

// TASK 2 ----------------------------------------------------------------------------------------------------

/*
Create a function "minMax" that will accept any quantity of the arguments.

This function should return array of two elements:
1. First element in the array is minimal value among all arguments
2. Second element in the array is maximal value among all arguments

Use destructuring to parse results of the function calls.
*/

const minMax = (...nums) => {
  // OPTION 1
  //   let min = nums[0];
  //   for (let i = 1; i < nums.length; i++) {
  //     min = min < nums[i] ? min : nums[i];
  //   }

  //   let max = nums[0];
  //   for (let i = 1; i < nums.length; i++) {
  //     max = max > nums[i] ? max : nums[i];
  //   }

  // OPTION 2
  //   const min = Math.min(...nums);
  //   const max = Math.max(...nums);

  // OPTION 3
  const min = nums.reduce(
    (min, current) => (min < current ? min : current),
    nums[0]
  );
  const max = nums.reduce(
    (max, current) => (max > current ? max : current),
    nums[0]
  );
  return [min, max];
};

let min, max;
/* call here "minMax" function with arguments 24, 5, 34, 10 */
[min, max] = minMax(24, 5, 34, 10);
console.log(min, max); // 5, 34

/* call here "minMax" function with arguments 18, 23, 103, 70, 80, 25 */
[min, max] = minMax(18, 23, 103, 70, 80, 25);
console.log(min, max); // 18, 103
