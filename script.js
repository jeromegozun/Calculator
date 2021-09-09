const numbers = document.querySelectorAll('.numbers');
const numberDisplay = document.querySelector('#display-number');
const operatorSet = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const clearAll = document.querySelector('#clear-all');
const del = document.querySelector('#delete');
const decimal = document.querySelector('#decimal');

let numberSetOne = '';
let numberSetTwo = '';
let operator = '';
let total

function displayNumbers(){
  if(operator){
    if(numberSetTwo === ''){
      numberDisplay.textContent = '0';
    }else{
      numberDisplay.textContent = numberSetTwo;
    }
  }else if(numberSetOne){
    if(numberSetOne === ''){
      numberDisplay.textContent = '0';
    }else{
      numberDisplay.textContent = numberSetOne;
    }
  }else{
    if(total === ''){
      numberDisplay.textContent = '0';
    }else{
      numberDisplay.textContent = total;
    }
  }
}

function add(num1, num2){
  total = parseFloat(num1) + parseFloat(num2);
  return total;
}

function subtract(num1, num2){
  total = parseFloat(num1) - parseFloat(num2);
  return total;
}

function divide(num1, num2){
  total = parseFloat(num1)/parseFloat(num2);
  return total;
}

function multiply(num1, num2){
  total = parseFloat(num1) * parseFloat(num2);
  return total;
}

function operate(){
  if(numberSetOne === ''){
    numberSetOne = '0';
  } else if (numberSetTwo === ''){
    numberSetTwo = '0';
  }

  if(operator === '+'){
    add (numberSetOne, numberSetTwo);
  } else if (operator === '-'){
    subtract(numberSetOne, numberSetTwo);
  } else if (operator === '/'){
    divide(numberSetOne, numberSetTwo);
  } else if (operator === '*'){
    multiply (numberSetOne, numberSetTwo);
  } 
  let stringTotal = total.toString()
  total = stringTotal;
  numberSetOne = stringTotal;
  numberSetTwo = '';
  operator = '';
  displayNumbers()
}

function clearNumber(){
  if(numberSetTwo){
    numberSetTwo = '';  
  }else if (numberSetOne){
    numberSetOne = '';
    total = '';
  }
  displayNumbers()
}

function clearAllNumbers(){
  numberSetOne = '';
  numberSetTwo = '';
  total = ''
  displayNumbers();
}

function deleteNumber(){
  
  if(numberSetTwo){
    numberSetTwo = numberSetTwo.substring(0, numberSetTwo.length - 1);
  } else if (numberSetOne){
    total = '';
    numberSetOne = numberSetOne.substring(0, numberSetOne.length - 1);
  }
  displayNumbers();
}

function addDecimal(){
  if(numberSetTwo){
    if(numberSetTwo.includes('.')){
      return
    }else {
      numberSetTwo += '.';
    }
  }else if(numberSetOne){
    if(numberSetOne.includes('.')){
      return
    }else {
      numberSetOne += '.';
    }
    displayNumbers();
  }
}



numbers.forEach ((number) => {
  number.addEventListener('click', () =>{
    let numberSelect = number.id
    if (numberSelect === 'one'){
      if(operator){
        numberSetTwo += '1';
      }else {
        numberSetOne += '1';
    }  
    } else if (numberSelect === 'two'){
      if(operator){
        numberSetTwo += '2';
      }else {
        numberSetOne += '2';
      }
    } else if (numberSelect === 'three'){
      if(operator){
        numberSetTwo += '3';
      }else {
        numberSetOne += '3';
      }
    } else if (numberSelect === 'four'){
      if(operator){
        numberSetTwo += '4';
      }else {
        numberSetOne += '4';
      }
    } else if (numberSelect === 'five'){
      if(operator){
        numberSetTwo += '5';
      }else {
        numberSetOne += '5';
      }
    } else if (numberSelect === 'six'){
      if(operator){
        numberSetTwo += '6';
      }else {
        numberSetOne += '6';
      }
    } else if (numberSelect === 'seven'){
      if(operator){
        numberSetTwo += '7';
      }else {
        numberSetOne += '7';
      }
    } else if (numberSelect === 'eight'){
      if(operator){
        numberSetTwo += '8';
      }else {
        numberSetOne += '8';
      }
    } else if (numberSelect === 'nine'){
      if(operator){
        numberSetTwo += '9';
      }else {
        numberSetOne += '9';
      }
    } else if (numberSelect === 'zero'){
      if(operator){
        numberSetTwo += '0';
      }else {
        numberSetOne += '0';
      }
  }  displayNumbers() 
  })
})

operatorSet.forEach((oper => {
  oper.addEventListener('click', () => {
    let operatorSelect = oper.id
    if (operatorSelect === 'add'){
      if(numberSetOne && numberSetTwo){
        operate()
        operator = '+';
      }
      else if(!operator){
        operator = '+';
      }
    } else if (operatorSelect === 'subtract'){
      if(numberSetOne && numberSetTwo){
        operate()
        operator = '-';
      }
      else if (!operator){
        operator = '-';
      }
    } else if (operatorSelect === 'multiply'){
      if(numberSetOne && numberSetTwo){
        operate()
        operator = '*';
      }
      else if (!operator){
        operator = '*';
      }
    } else if (operatorSelect === 'divide'){
      if(numberSetOne && numberSetTwo){
        operate()
        operator = '/';
      }
      else if (!operator){
        operator = '/';
      }
    }
  })
})
)

equal.addEventListener('click', operate);
clear.addEventListener('click', clearNumber);
clearAll.addEventListener('click', clearAllNumbers);
del.addEventListener('click', deleteNumber);
decimal.addEventListener('click', addDecimal)