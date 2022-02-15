function pinTest() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pinString;
    } else {
        return pinTest();
    }
}

function pinGenerate() {
    const pin = pinTest();
    document.getElementById('pin-generate').value = pin;
}

document.getElementById('pin-input').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayInput = document.getElementById('display-input');
    if (isNaN(number)) {
        if (number == 'C') {
            displayInput.value = '';
        }
    } else {
        const previousNum = displayInput.value;
        const totalNum = previousNum + number;
        displayInput.value = totalNum;
    }
})

function machingPin() {
    const pin = document.getElementById('pin-generate').value;
    const mach = document.getElementById('display-input').value;
    const error = document.getElementById('not-mach');
    const done = document.getElementById('mach-done');
    if (pin == mach) {
        done.style.display = 'block';
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
        done.style.display = 'none';
    }
}