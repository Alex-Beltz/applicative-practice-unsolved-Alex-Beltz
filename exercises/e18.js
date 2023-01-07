import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let count = data.asteroids.reduce((acc, a) => {
    acc[a.discoveryYear] = (acc[a.discoveryYear] || 0) + 1;
    return acc;
  }, {});
  let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return Number(sorted[0][0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
