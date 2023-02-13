/* 
   Spot the bug 🐞
   Should print:
   "Most places consider you an adult."
   but it doesn't, why?
*/
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
   console.log("You are in elementary school, kid.");
} else if (age >= 13) {
   console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
