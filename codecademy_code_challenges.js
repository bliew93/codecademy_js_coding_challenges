// 1. reverseArray()
const reverseArray = arr => {
  let outputArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    outputArr.push(arr[i]);
  }

  return outputArr;
};

// 2. greetAliens()
const greetAliens = strArr => {
  for (let i = 0; i < strArr.length; i++) {
    let alienName = strArr[i];

    console.log(
      `Oh powerful ${alienName}, we humans offer our unconditional surrender!`
    );
  }
};

// 3. convertToBaby()
const convertToBaby = arr => {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    arr[i] = `baby ${item}`;
  }

  return arr;
};

// 4. fixed smallestPowerOfTwo()
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number

    /*
    * Changed the variable i referenced below previously to variable name multipleOfTwo.
    * Since i was declared and initialized above in the for loop, after the first iteration of the  
    * inner loop terminates, the condition of the for loop has been met and it exits early after the first
    * power of two is found.
    */
    multipleOfTwo = 1;
    while (multipleOfTwo < number) {
      multipleOfTwo = multipleOfTwo * 2;
    }
    results.push(multipleOfTwo);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

// 5a. declineEverything()
const declineEverything = arr => {
  arr.forEach(item => {
    politelyDecline(item);
  });
};

// 5a helper function
const politelyDecline = veg => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// 5b. acceptEverything()
const acceptEverything = arr => {
  arr.forEach(item => {
    console.log(`'Ok, I guess I will eat some ${item}.'`);
  });
};

// 6. squareNums()
const squareNums = arr => {
  return arr.map(num => num * num);
};

// 7. shoutGreetings()
const shoutGreetings = arr => {
  let shoutArr = [];

  for (let i = 0; i < arr.length; i++) {
    word = arr[i];

    shoutArr.push(`${word.toUpperCase()}!`);
  }

  return shoutArr;
};

// Bonus Code Challenges

// 8. sortYears()
const sortYears = arr => {
  return arr.sort((a, b) => b - a);
};

// 9. justCoolStuff()
const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(el => arr2.includes(el));
};

// 10. isTheDinnerVegan()
const isTheDinnerVegan = arr => {
  for (let i = 0; i < arr.length; i++) {
    let food = arr[i];

    if (food.source !== "plant") {
      return false;
    }
  }

  return true;
};

// 11. dogFactory()
const dogFactory = (name, breed, weight) => {
  return { name, breed, weight };
};
