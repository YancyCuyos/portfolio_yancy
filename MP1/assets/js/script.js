console.log('Before binding event');

// bind
let txtInput = document.querySelector('#txtInput');
let btnReplaceAll = document.querySelector('#btnReplaceAll');
let txtOutput = document.querySelector('#txtOutput');

// event
btnReplaceAll.addEventListener('click', function(){
    let str = txtInput.value;
    let result = str.replaceAll(" ", ""); // remove all spaces
    txtOutput.innerText = result;
    console.log(result);
});
