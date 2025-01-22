function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }
  
  return false;
}

/* 
  Time Complexity: O(n) → We loop through the array once.
  Space Complexity: O(n) → We store seen numbers in a Set.
*/

/* 
  Pseudocode:
  1. Create a Set to store seen numbers.
  2. Loop through the array:
     - Calculate complement (target - num).
     - If the Set contains the complement → return true.
     - Otherwise, add num to the Set.
  3. If no pair is found → return false.
*/

/*
  Explanation:
  - We iterate through the array once (O(n)).
  - For each number, we check if the complement (target - num) exists in the Set.
  - If found, return true.
  - Otherwise, store the number in the Set for future lookups.
  - This is more efficient than a nested loop (O(n²)) solution.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 15, 3, 7], 17)); // 10 + 7 = 17

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 8)); // No pair sums to 8

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5, 5], 10)); // 5 + 5 = 10
}

module.exports = hasTargetSum;
