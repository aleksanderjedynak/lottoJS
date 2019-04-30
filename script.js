var button = document.querySelector('.btn');
var output = document.querySelector('.out');
var tab = document.querySelector('.tab');
var typeEvent = "click";
var useCapture = false;
var MAX_NUMBER = 49;
var MIN_NUMBER = 1;

function listenerButton(event) {
    var lottoNumbers = [];
    for (var i = 0; lottoNumbers.length < 6 && i <= 20; i++) {
        lottoNumber = Math.round(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
        if (lottoNumbers.indexOf(lottoNumber) === -1) {
            lottoNumbers.push(lottoNumber);
        }
    }

    addNewItem(lottoNumbers.map(addZeroBeforeNumber));
};

function listenerOutput(event){
    output.select();
    document.execCommand("copy");
    alert("Copied the text: " + output.value);
}

function addZeroBeforeNumber(number){
    var n;
    if (number < 10 && MAX_NUMBER < 100){
        n = addOneZero(number);
    } else if (number < 100 && 100 < MAX_NUMBER && MAX_NUMBER < 1000) {
        n = number < 10 ? addTwoZero(number) : addOneZero(number);
    } else {
        n = number;
    }
    return String(n);
}

function addOneZero(number){
    return "0" + number;
}

function addTwoZero(number) {
    return "00" + number;
}

function addNewItem(lottoNumbers){
    var item = document.createElement('span');
    item.innerHTML = lottoNumbers;
    tab.appendChild(item);
    output.value = lottoNumbers;
}

button.addEventListener(typeEvent, listenerButton, useCapture);
output.addEventListener(typeEvent, listenerOutput, useCapture);