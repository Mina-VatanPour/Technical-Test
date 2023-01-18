// Question 1 **********************************************************************************************************
function repeatStringByNumber(myString, myNumber) {

    let newString = '';
    let counter = 0;
    // let totalLengthEntries = newString.length + myString.length;

    do {
        // روشی که اول به ذهنم رسید :
        // newString = myNumber > totalLengthEntries ? myString + newString.slice(0, myNumber - totalLengthEntries) : myString.slice(0, myNumber)

        // روش بهینه و تمیزتر
        newString += myNumber > newString.length + myString.length ? myString : myString.slice(0, myNumber - newString.length)

    } while (myNumber > newString.length)

    document.getElementById('new-string').value = newString

    for (let i = 0; i <= newString.length; i++) {
        if (newString[i] === 'a') {
            counter++;
        }
    }
    document.getElementById('repeat-char-a').value = 'a' + ' -> ' + counter;
}

// Question 2 **********************************************************************************************************
function scaleAndCompare(myString2) {

    let myString2ConvertToArray = myString2.split('');
    let newArray = [];
    let counter = 0;
    let newStr = '';

    for (let i = 0; i <= myString2ConvertToArray.length - 1; i++) {

        if (newArray !== []) {

            if (myString2ConvertToArray[i] !== newArray[newArray.length - 1]) {
                newArray.push(myString2ConvertToArray[i])

            } else {
                newArray.pop()
                counter++
                newArray.push(myString2ConvertToArray[i])
            }
            continue
        }
        i++;
    }

    newStr = newArray.join('')
    document.getElementById('new-string2').value = newStr;
    document.getElementById('char-deleted').value = counter;

}

// Question 3 **********************************************************************************************************
