//Mapping the Array elements

function doubleNumbers(input) {
    const numbers = input.split(' ').map(Number);
    return numbers.map(num => num * 2);
  }
  
  // Example usage
  const input = "1 2 3 4";
  console.log(doubleNumbers(input)); // Output: [2, 4, 6, 8]

  

  //filter the elements in an array
  function filterEvenNumbers(input) {
    const numbers = input.split(',').map(Number);
    return numbers.filter(num => num % 2 === 0);
  }
  
  // Example usage
  const input = "1,2,3,4,5";
  console.log(filterEvenNumbers(input)); // Output: [2, 4]
  


  //reducing an array

  function sumNumbers(input) {
    const numbers = input.split(';').map(Number);
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
  
  // Example usage
  const input = "5;10;15";
  console.log(sumNumbers(input)); // Output: 30
  