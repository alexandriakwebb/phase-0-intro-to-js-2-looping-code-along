// Code your solutions in this file
function writeCards (nameArray, eventName) {
    let thankYouMessage = [];
    for (let i = 0; i < nameArray.length; i++) {
        thankYouMessage.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessage;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown (number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }

}