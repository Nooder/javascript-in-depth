/*
    1. Create a variable called "activities" that points at the Array:
       ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"]

    2. Create a loop that loops over "activities" and inside the loop
       use a switch statement that has these cases:
       - "Swimming": only print out "Like a fish!"
       - "Rock Climbing": only print out "Like a mountain goat!"
       - "Running": only print out "Like a cheetah!"
       - Otherwise only print out "I'm sure some animal does that..."

    3. Run the code and make sure the correct messages get printed out
*/

const activities = ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"];

for (const activity of activities) {
  switch (activity) {
    case "Swimming": {
      console.log("Like a fish!");
      break;
    }
    case "Rock Climbing": {
      console.log("Like a mountain goat!");
      break;
    }
    case "Running": {
      console.log("Like a cheetah!");
      break;
    }
    default: {
      console.log("I'm sure some animal does that...");
      break;
    }
  }
}
