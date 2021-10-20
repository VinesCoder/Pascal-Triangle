//Geting DOM elements
const input = document.getElementById('input').value,
      btn = document.querySelector('#btn'),
      result = document.querySelector('#result');

let outputElement = 0;

/*
  let arr = input - не працює!
  не знаю як передати вхідні дані в функцію

  let arr = [1,5,10] -так все працює
*/

//////////////////////
btn.addEventListener('click',() =>{
        getNextElementInRow(arr);
        result.innerHTML = outputElement;
})

/////////////////////
function getNextElementInRow(arr){
  let row = []

  // row[first index] = 1;
  row.push(1);

  //generate the values beetween 1...and...1
  for(let i = 1; i <= arr[1];i++){
    for (let j = row.length -1; j > 0; j--){
      row[j] = row[j-1] + row[j];
    }
    //row[last index] = 1
    row.push(1);
  }

  if (row.length == arr.length){
    outputElement = -1;
    return outputElement;
  } else {
    outputElement = row[arr.length];
    return outputElement;
  }
}

