let inputR = document.getElementsByClassName('rub')[0];
let outputU = document.getElementsByClassName('usd')[0];
    if (inputR) {console.log(inputR)};
    if (inputR) {console.log(outputU)};

inputR.addEventListener('input',()=>{
    outputU.value=inputR.value;
    console.log(inputR.value);
});