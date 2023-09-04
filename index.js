// Code your solutions in this file
function writeCards (stringArray, event) {
    let thankYouMessage = []
    for (let i = 0; i < stringArray.length; i++) {
        thankYouMessage.push(`Thank you, ${stringArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessage
}

function countDown (integer) {
    while (integer >= 0) {
    console.log(integer); 
    integer--; 
    }
}