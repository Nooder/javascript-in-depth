/*
    1. Create a variable called "email" that points at:
       "monkey@trees.com"

    2. Create a variable called "emailPattern" that is
       a regular expression that will look for a string
       that ENDS with ".com"

    3. Test "email" against "emailPattern" to see if
       it returns true/false using .test on "emailPattern"

    4. Find a match using .match on "email" with the
       "emailPattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/

const email = "monkey@tree.com";

const emailPattern = /\.com$/;

const test = emailPattern.test(email);
console.log(test);

const match = email.match(emailPattern);
console.log(match);
