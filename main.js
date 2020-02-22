
const pwdDisplay = document.querySelector('#password');
const lblCopy = document.querySelector('#copy');

lblCopy.addEventListener("click", copyPwd);

function copyPwd() {
    let copyTest = pwdDisplay.innerText;
    let element = document.createElement('textarea');
    element.value = copyTest;
    element.setAttribute('readonly', '');
    element.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
}

function arrLowHigh(low, high) {
    const arr = [];
    for (let i = low; i <= high; i++) {
        arr.push(i);
    }
    return arr;
}

function genPwd(pwdLength = 24) {

    let availableChars = arrLowHigh(97, 122); //a-z
    availableChars = availableChars.concat(arrLowHigh(65, 90)); //A-Z
    availableChars = availableChars.concat(arrLowHigh(48, 57)); //0-9
    availableChars = availableChars.concat(arrLowHigh(33, 47)).concat(arrLowHigh(58, 64)).concat(arrLowHigh(91, 96)).concat(arrLowHigh(123, 126)); //Symbols

    const password = [];
    for (let i = 0; i < pwdLength; i++) {
        const char = availableChars[Math.floor(Math.random() * availableChars.length)];
        password.push(String.fromCharCode(char));
    }

    return password.join('');
}

pwdDisplay.innerText = genPwd();
