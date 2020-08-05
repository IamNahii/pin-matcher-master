// create pin
document.getElementById('create-pin').addEventListener('click', function(){
    const createPin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pin-field').value = createPin;
});

// input number
function number(num){
    let inputNumber = document.getElementById('input-number');
    switch(num){
        case 1:
            inputNumber.value += "1";
            break;
        case 2:
            inputNumber.value+= "2";
            break;
        case 3:
            inputNumber.value += "3";
            break;
        case 4:
            inputNumber.value += "4";
            break;
        case 5:
            inputNumber.value += "5";
            break;
        case 6:
            inputNumber.value += "6";
            break;
        case 7:
            inputNumber.value += "7";
            break;
        case 8:
            inputNumber.value += "8";
            break;
        case 9:
            inputNumber.value += "9";
            break;
         case 0:
            inputNumber.value += "0";
            break;
    }
}

// clear one by one
document.getElementById('clear-one').addEventListener('click',function(){
    let displayNumber = document.getElementById('input-number');
    let newDisplayNumber = displayNumber.value;
    if(newDisplayNumber.length > 0){
        newDisplayNumber = newDisplayNumber.substring(0, newDisplayNumber.length-1)
        displayNumber.value = newDisplayNumber;
    }
});

// all clear
document.getElementById('all-clear').addEventListener('click',function(){
    document.getElementById('input-number').value = '';
});

// pin matcher

document.getElementById('submit-btn').addEventListener('click', function(){
    let pinField = document.getElementById('pin-field').value;
    let inputNumber = document.getElementById('input-number').value;
    if (pinField == '' || inputNumber == ''){
        alert('Generate the code or Enter the valid number.');
    }
    else if (pinField == inputNumber){
        document.getElementById('right-pin').style.display  = 'block'
        document.getElementById('wrong-pin').style.display  = 'none'
        document.getElementById('pin-field').value = '';
        document.getElementById('input-number').value = '';
    }
    else{
        document.getElementById('right-pin').style.display  = 'none'
        document.getElementById('wrong-pin').style.display  = 'block'
        document.getElementById('input-number').value = '';
    }
});