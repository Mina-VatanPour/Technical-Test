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

        if (myString2ConvertToArray[i] !== newArray[newArray.length - 1]) {

            newArray.push(myString2ConvertToArray[i])
        } else {
            counter++
        }

    }

    newStr = newArray.join('')
    document.getElementById('new-string2').value = newStr;
    document.getElementById('char-deleted').value = counter;

}

// Question 3 **********************************************************************************************************
function swapArray(myArray) {

    // 1- پیدا کردن بزرگترین عدد در آرایه و ایندکس آن
    let maxNumberInArr = Math.max(...myArray);
    let placeOfMaxNum =myArray.indexOf(maxNumberInArr)
    console.log(maxNumberInArr)
    console.log(placeOfMaxNum)
    // 2- پیدا کردن خانه وسط آرایه
    // let middleArray = Math.round((myArray.length - 1) / 2);
    // 3- جابجا کردن بزرگترین عدد با عددی که در خانه وسط آرایه قرار دارد
    // swapArray(myArray[middleArray], maxNumberInArr)
    // 4- طبق الگوریتم مرتب سازی حبابی ادامه میدیم :
    let counter = 0;

    for (let i = 0; i < myArray.length; i++) {

        if (myArray[i] > myArray[i + 1]) {
            let sort = myArray[i]
            myArray[i] = myArray[i + 1]
            myArray[i + 1] = sort
            counter++;
        }
    }

    let sortedArray = myArray.join(',')
    document.getElementById('my-array-sorted').value = '[ ' + sortedArray + ' ]';
    document.getElementById('min-swap').value = counter;
}