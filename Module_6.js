

// //Задание 1 (вариант 2)

// console.log(typeof(24))

// const arrNumber = [1,1,1,1,0,0,0,0,1,0,1,0,1];
// const filteredNotNull = arrNumber.filter(item => {
//     return item === 1
// })

// console.log(filteredNotNull)
// const filteredNullArr = arrNumber.filter(item => {
//     return item === 0 
// })
// console.log(filteredNullArr);


// function amountEven() {
//     let arr = [0, null, 12, 45, 87, 95, 83, 69, 24]
//     let amountEven = 0;
//     let amountOdd = 0;
//     let amountZero = 0;
//     let amountNan = 0;

//     const someValue = () => 'asda'
//     const validArr = arr.filter(item => { 
//         const isNumber = typeof(item) == 'number'
//         if(!isNumber) {
//             amountNan += 1
//         }
//         return isNumber
//     })
    
//     for (i = 0; i < validArr.length; i++) {
//         if (typeof(validArr[i]) !== 'number') {
//             amountNan += 1
//             break;
//         }

//         if (validArr[i]==0) {
//             amountZero += 1
//         }
//         else if (validArr[i]%2==0) {
//             amountEven += 1
//         }
//         else if (validArr[i]%2!=0) {
//             amountOdd += 1
//         }
//     }

//     console.log(`${amountEven} - количество четных чисел, ${amountOdd} - количество нечетных чисел, ${amountZero} - количество нулей, ${amountNan} - количество нечисел`)
// }

// amountEven()

//Задание 2

// function definePrime(num) { 
 
//     if (num > 1000 || num <= 0){ 
//      return 'Данные не верны' 
//     }
    
//     if (num > 1 || num <= 1000) { 
//      for (let i = 2; i < num; i++) { 
//          if(num % i === 0) { 
//            return `Число ${num} составное!`; 
//          } 
//      } 
//     }
    
//        return  `Число ${num} простое!`;
//    }
//    const myNumber = 257;

//    let isDefine = definePrime(myNumber);
//    console.log(isDefine)

// Задание 3

// function createAdder(number1) {
//     return (number2) => number1 + number2;
// }

// const addTwo = createAdder(2) // addTwo === function(number2)

// const result = addTwo(10)
// console.log(result)

//Задание 4
/*

function printNumbers(start, end) {
    let current = start;
    const intervalId = setInterval(() => {
      console.log(current);
      current++;
      if (current > end) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  printNumbers(5, 15); 
*/

//Задание 5
/*
const power = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  console.log(power(2, 3)); // 8
  console.log(power(5, 2)); // 25
  console.log(power(10, 0)); // 1
*/
