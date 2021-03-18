// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 

// function one_hundred() {  //missed changing 'def' to 'function' && missed putting parenthesis between method name and curly braces
//   var index = 1;          //missed semicolon after this
//   while (index < 101) {   //missed enclosing statement after 'while' in parenthesis && didn't need to put var before i again && didn't put curley braces to begin and end the loop
//     console.log(index);   //missed changing 'puts' to console.log()
//     index++;              //didn't need var before i
//   }
// }

// one_hundred();            //missed parenthesis and semicolon 


// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function odd_numbers() {      //couldn't remember what to do here until I'd written the nested logic
//   var index = 1;
//   while (index < 101) {
//     console.log(index);       //couldn't recall what method to run on console without looking
//     index += 2;
//   }
// }

// odd_numbers();                //forgot to put the funciton name, but remembered after running once

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function fivefive_checker() {
//   var array = [1, 2, 55, 55, 54, 56, 55, 3];
//   var ticker = 0
//   array.forEach(function (number) {      // forgot 'for' before each && didn't know the E gets capitalized?? && forgot that I don't need 'do' && forgot function before block variable 'number' && forgot propper number of parentheses - need to encapsulate the function, then the block, and have curleys nested within that ...
//     if (number === 55) {                    // didn't think that this needed parentheses
//       ticker++;                             // forgot how to end conditional
//     }
//   });
//   console.log(ticker);
// }

// fivefive_checker();


// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesome_insert(){
//   var list = ["There", "will", "be", "blood"];
//   var new_list = [];
//   var awesome = "awesomesauce";
//   list.forEach (function (word){                  // forgot ( and 'function' for running methods like "each" ... but remembered forEach!
//     new_list.push(word);                          // Needed to google how to shovel (syntax)
//     new_list.push(awesome);
//   });
//   console.log(new_list);                          // Forgot parentheses for printing variable
// }

// awesome_insert();                                 // forgot to run the function AND forgot parenthesis syntax

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}



// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// *************


// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function select_even_items(strings){
//   var result = [];
//   var index = 0;
//   strings.forEach(function(string){
//     if (index % 2 === 0){
//       result.push(string);
//     }
//     index++;
//   })
//   console.log(result);
// }

// select_even_items(["a", "b", "c", "d", "e", "f"]);

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function max(numbers){
//   var current_max = numbers[0];
//   numbers.forEach(function(number) {
//     if (number > current_max) {
//       current_max = number;
//     }
//   })
//   console.log(current_max);
// }

// max([5, 4, 8, 1, 2]);

// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number){
//   var result = 1;
//   var current_number = number;
//   for (var i = number; i > 0; i--){
//     result = result * current_number;
//     current_number = current_number - 1;
//   }
//   console.log(result);
// }

// factorial(5);

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// function descending(numbers){
//   var result = [];
//   var index = (numbers.length -1);
//   for (var i = numbers.length; i > 0; i--){
//     result.push(numbers[index]);
//     index--;
//   }
//   console.log(result);
// }

// descending([1, 3, 5, 7]);

// Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function sum_combinations(numbers1, numbers2){
  var result = [];
  numbers1.forEach(function(number1){
    numbers2.forEach(function(number2){
      result.push(number1 + number2);
    })
  })
  console.log(result);
}
sum_combinations([1, 5, 10], [100, 500, 1000]);