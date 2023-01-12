import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // they don't all have moons so it fails if I don't use the filter,
  // and the "cur || 0" for .reduce doesn't work in this situation for some reason
  return data.planets
    .filter((planet) => planet.moonsCount)
    .reduce((acc, planet) => (acc += planet.moonsCount), 0);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
