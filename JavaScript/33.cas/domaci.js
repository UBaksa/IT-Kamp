// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

function prvi(niz) {
  let nizstring = niz.join("*");
  return nizstring;
}

const niz1 = ["prvi", 5, "sedam", "dvadeset pet"];

console.log(prvi(niz1));
