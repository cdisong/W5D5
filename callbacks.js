// ===========================
// Clock
// ===========================

class Clock{
  constructor(){
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // Add set interval
  }

  printTime(){
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick(){
    this.seconds++;
    this.printTime();
  }
}

const watch = new Clock();
// watch._tick();

// ===========================
// addNumbers
// ===========================

function sumNumbers(...nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log(sum);
  }
  return sum;
}

// sumNumbers(1,2,3,4);

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0){
    completionCallback(sum);
    reader.close();
  } else {
    reader.question("Choose a number", function(num){
      let int = parseInt(num);
      sum += int;
      console.log(`sum is: ${sum}`);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
