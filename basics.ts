function add(n1: number,n2 :number, showResult: boolean, phrase :string) {
   // if(typeof n1!== 'number' || typeof n2 !== 'number'){
     //   throw new Error('Incorrect String')
     //}
     if (showResult){
         console.log(phrase+ result);
     } else{
         return result;
     }
}

let number1: number;
 number1= 5;
const number2 = 3.8;
const printResult = true;
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);