const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout}
);

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}?`, function(ans){
    if (ans === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i === arr.length - 1){
      outerBubbleSortLoop();
    } else {
      let left = arr[i];
      let right = arr[i + 1];
      askIfGreaterThan(left, right, (isGreaterThan) => {
      if(isGreaterThan === true){
        [left, right] = [right, left];
        innerBubbleSortLoop(arr, i+1, true, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i+1, false, outerBubbleSortLoop);
      }
    });
  }
}

// TEST innerBubbleSortLoop:
// -----------------------------------------------
// innerBubbleSortLoop([3,2,1], 0, false, () => {
//   console.log("outer loop!");
// });

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop);
    } else {
      sortCompletionCallback();
    }
  }
  let madeAnySwaps = true;
  reader.close();
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  // reader.close();
});
