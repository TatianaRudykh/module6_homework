//Задание 1 (вариант 1)
/*
let mass = [35, 45, 78, 345, 908, 21, 54, 77, 0] 
 
let zeros = 0
odd = mass.reduce(function (r, a) { zeros == 0 ? zeros += 1 : 0; return r + a % 2; }, 0), 
even = mass.length - odd - zeros; 
 
console.log('Нечетных элементов', odd); 
console.log('Четных элементов', even);
console.log('ноль', zeros);

*/

//Задание 1 (вариант 2)

/*
function amountEven() {
    let arr = [0, 12, 45, 87, 95, 83, 69, 24]
    let amountEven = 0;
    let amountNotEven = 0;
    let amountZero = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i]==0) {
            amountZero += 1
        }
        else if (arr[i]%2==0) {
            amountEven += 1
        }
        else if (arr[i]%2!=0) {
            amountNotEven += 1
        }
    }

    console.log(`${amountEven} - количество четных чисел, ${amountNotEven} - количество нечетных чисел, ${amountZero} - количество нулей`)
}

amountEven()
*/

//Задание 2

/*
function definePrime(num) { 
 
    if (num > 1000 || num <= 0){ 
     return 'Данные не верны' 
    }
    
    if (num > 1 || num <= 1000) { 
     for (let i = 2; i < num; i++) { 
         if(num % i === 0) { 
           return false; 
         } 
     } 
    }
    
       return true;
   }
   const myNumber = 41;

   let isDefine = definePrime(myNumber) ? `Число ${myNumber} простое!` : `Число ${myNumber} составное!`;
*/

//Задание 3

/*
function sum(a,b) {
    return(a + b)
}

let result = sum(1,2);
console.log(result);

*/

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

