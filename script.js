//foreach
//map
//filter
//every
//some
//find
//reduce

// const array = [15, 4, 17, 10, 8, 9, 21];
// const array = [16, 4, 18, 10, 8, 6, 22];
const array = ['ghfhfh', 4, '   '];

//////////////////////////////forEach

// array.forEach((item, ndx, arr) => {
//   console.log(item * 3);
// });

// function forEachFunc(array, fn) {
//   for (let item of array) {
//     fn(item);
//   }
// };

// forEachFunc(array, (item) => {
//   item = item * 3;
//   console.log(item);
// });


//////////////////////////map

// const newArray = array.map((item) => {
//   return item * 2
// });

// console.log(newArray);

// function mapFunc(array, fn) {
//   const result = [];
//   for (let item of array) {
//     const editiedValue = fn(item);

//     result.push(editiedValue);
//   }

//   return result;
// }

// const result = mapFunc(array, (item) => {
//   return item * 3;
// })

// console.log(result);


/////////////////////////filter

// const filteredArray = array.filter(item => {
//   return item % 2 === 0;
// });

// console.log(filteredArray);

// function filterFunc(array, fn) {
//   const result = [];
//   for (let item of array) {
//     const isFilteringValue = fn(item);

//     if (isFilteringValue) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const result = filterFunc(array, (item) => {
//   return item % 2 === 0
// })

// console.log(result);


////////////////////////////find

// function isPrime(item, index, array) {
//   let start = 2;
//   while (start <= Math.sqrt(item)) {
//     if (item % start++ < 1) {
      
//       return false;
//     }
//   }
//   return item > 1;
// }

// console.log(array.find(isPrime));

// function findFunc(array, fn) {
//   for (let item of array) {
//     if (fn(item)) {
//       return item;
//     }
//   }
// }

// const result = findFunc(array, (item) => {
//   return (isPrime(item)) ? item : false;
// })

// console.log(result);



///////////////////////////every

// const isEven = array.every(item => {
//   return item % 2 === 0;
// });

// console.log(isEven);

// function isEvenFunc(array, fn) {
//   let isEven = false;

//   for (let item of array) {
//     if (fn(item)) {
//       isEven = true;
//     } else {
//       return isEven = false;
//     }
//   }

//   return isEven;
// }

// const result = isEvenFunc(array, (item) => {
//   return item % 2 === 0;
// })

// console.log(result);


//////////////////////////////////some

// const hasNumber = array.some(item => {
//   return Number.isInteger(item);
// })

// console.log(hasNumber);

// function isInteger(array, fn) {
//     let isInteger = false;
  
//     for (let item of array) {
//       if (fn(item)) {
//         return isInteger = true;
//       } else {
//         isInteger = false;
//       }
//     }
  
//     return isInteger;
//   }

// function isInteger(array, fn) {
//   for (let item of array) {
//     console.log(item);
//     if (fn(item)) { 
//       return true;
//     }
//   }
//   return false;
//   }
  
//   const result = isInteger(array, (item) => {
//     return Number.isInteger(item);
//   })
  
//   console.log(result);


/////////////////////////////reduce

// const sum = array.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(sum);

// function reduceFunc(array, fn, startValue) {
//   let result = startValue;
//   for (let item of array) {
//     result = fn(result, item);
//   }

//   return result;
// }

// const result = reduceFunc(array, (acc,item) => {
//   return acc + item;
// }, 0);

// console.log(result);