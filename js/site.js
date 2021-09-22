//get the string from the page
//controller function

function getValue(){
    //set the alert to invisible
    document.getElementById("alert").classList.add("invisible");

    //get the value from the page
    let userString = document.getElementById("userString").value;

    //check for palidrome
    let returnObj = checkForPalindrome(userString);

    //display message to the page
    displayMessage(returnObj);
}

function checkForPalindrome(userString){
    //convert string to lowercase
    userString = userString.toLowerCase();

    //remove special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >=0; index--){
        revString += userString[index];
    }

    if (revString == userString){
        returnObj.msg = "Well done! You've entered a palindrome!"
    } else{
        returnObj.msg = "Sorry! You did not enter a palindrome."
    }

    returnObj.reversed = revString;

    return returnObj;
}

function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}