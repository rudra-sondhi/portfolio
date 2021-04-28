//function for button 1 : What number is larger 
function largernumber() {
    let num1 = parseInt(prompt("Insert a number"));
    let num2 = parseInt(prompt("Insert another number")); //Get 2 inputs from user and assign them to a variable 

    if (num1 > num2) { //If Number 1 is bigger than number 2 
        document.getElementById('button1').innerHTML = (num1 + " is bigger"); //Output = First number is bigger 
    }
    else if (num1 < num2) { //If Number 2 is bigger than number 1
        document.getElementById('button1').innerHTML = (num2 + " is bigger"); //Output = Second number is bigger 
    }
    else if (num2 === num1) { //If both numbers are equal 
        document.getElementById('button1').innerHTML = ("Same Number, Try Again!"); //Tell user both are equal 
    }
    else { //If non-integers are used 
        document.getElementById('button1').innerHTML = ("Your input is invalid"); //Tell user input is invalid 
    }
}

//function for button 2 : What is the sign of 3 numbers (Positive or negative)
function signOfProduct() {
    let num1 = parseInt(prompt("Insert a number"));
    let num2 = parseInt(prompt("Insert another number"));
    let num3 = parseInt(prompt("Insert one last number")); //Get 3 inputs from user and assign them to a variable 
    var product = num1 * num2 * num3; //Add numbers to get sum, figure out what the sign is 

    if (product > 0) { //If sum is positive 
        document.getElementById('button2').innerHTML = ("The sign is positive"); //Tell user the sign is positive
    }
    else if (product < 0) { //If sum is negative 
        document.getElementById('button2').innerHTML = ("The sign is negative"); //Tell user the sign is negative 
    }
    else { //If non-integers are used 
        document.getElementById('button2').innerHTML = ("Your input is invalid"); //Tell user input is invalid 
    }
}

//function for button 3: Sorting number from smallest to largest
function threeNumberSort() {
    let num1 = parseInt(prompt("Insert a number"));
    let num2 = parseInt(prompt("Insert another number"));
    let num3 = parseInt(prompt("Insert one last number")); //Imputs from user 

    //Conditional statments as per request 
    if (num1 < num2 && num2 < num3) { //Stating what number is larger and which is smaller 
        document.getElementById('button3').innerHTML = num1 + " < " + num2 + " < " + num3; //Output to user 
    }
    else if (num1 < num3 && num3 < num2) {
        document.getElementById('button3').innerHTML = num1 + " < " + num3 + " < " + num2;
    }
    else if (num2 < num1 && num1 < num3) {
        document.getElementById('button3').innerHTML = num2 + " < " + num1 + " < " + num3;
    }
    else if (num2 < num3 && num3 < num1) {
        document.getElementById('button3').innerHTML = num2 + " < " + num3 + " < " + num1;
    }
    else if (num3 < num1 && num1 < num2) {
        document.getElementById('button3').innerHTML = num3 + " < " + num1 + " < " + num2;
    }
    else if (num3 < num2 && num2 < num1) {
        document.getElementById('button3').innerHTML = num3 + " < " + num2 + " < " + num1;
    }
    else {
        document.getElementById('button3').innerHTML = ("Your input is invalid"); ///In case the numbers entered don't fit 
    }

}

//function for button 4: Use a for loop to find the sum the multiples of 3 under 1000
function forSumThrees() {
    var i; //Variable 
    var text = "";
    var sum = 0; //Start with 0 
    for (i = 0; i < 1000; i += 3) { //Loop, start 1 with 0, till it reaches 1000, add 3 to i
        sum += i;
        text = "The number is " + sum; //Output to user 
    }
    document.getElementById('button4').innerHTML = text; // Output shown 
}


//function for button 5: Use a while loop to find the sum the multiples of 3 under 1000
function whileSumThrees() {
    let sum = 0; //Start with 0 
    let i = 0; //Let i = o
    while (i < 1000) { //Keep i under 1000
        i++; // Add 1 to i everytime 
        if (i % 3 === 0) {
            sum += i;
        }
    }
    document.getElementById("button5").innerHTML = "The number is " + sum; //Output to user 
}

//function for button 6: For integers from 1-100; prints out "four" for the ones divisible by 4, "Ten" for the ones divisible by 10, and "TenFour!" for the ones divisible by 10 and 4
function tenFour() {
    for (let i = 1; i <= 100; i++) { //i is the number, stops when i equals 100, adds 1 to i 
        if (i % 4 === 0 && i % 10 === 0) { //if no remainder is left after dividing by 4 and 10
            console.log("TenFour!"); //Output to user 
        }
        else if (i % 4 === 0) { //If no remainder is left after dividing by 4
            console.log("Four"); // Output to user 
        }
        else if (i % 10 === 0) { //If no remainder is left after dividing by 10
            console.log("Ten"); //If no remainder is left after dividing by 4
        }
        else {
            console.log(i);
        }
    }
}

//function for button 7: Find the century of a year 
function centuryFromYear() {
    let userYear = prompt('Enter a year to find its century'); //User input
    let century = 0;
    century = Math.floor(userYear / 100 + 1); //Math.floor research done from "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor"
    // if (toString(century)[-1] == 1) {
    //     century = toString(century)
    // }
    document.getElementById('button7').innerHTML = ('The century is ' + century);
}

//function for button 8 : Find missing angle 
function thirdAngle() {
    let num1 = parseInt(prompt("Insert the first angle"));
    let num2 = parseInt(prompt("Insert the second angle")); //Get 2 inputs from user and assign them to a variable 
    var sum = num1 + num2; //Add numbers to get sum

    if (num1 < 0 || num2 < 0) { //If number 1 or 2 is negative 
        document.getElementById('button8').innerHTML = ("Invalid. 2 angles required."); // Tell the user thier input is invalid 
    }
    else if (sum < 180) { //If the sum is less than 180
        var angle = 180 - sum; //Subtract sum from 180 to find missing angle 
        document.getElementById('button8').innerHTML = ("The missing angle is " + angle); //Output missing angle to user 
    }
    else {
        document.getElementById('button8').innerHTML = ("Invalid. 2 angles required."); // Tell the user thier input is invalid
    }
}
//function for button 9: In progress 
function f9() {
    document.getElementById("button9").innerHTML = "In progress"; //Output to user 
}

function encrypt() {
    //Function to encrypt a secret message from the user 
    let rawinput = prompt("Enter your message"); //Input from user 
    let output = "";
    let reverse = "";
    rawinput = rawinput.split(" "); //Add spaces 
    for (let i = 0; i < rawinput.length; i++) { //Start from 0, if i is bigger than length, add 1
        if (rawinput[i].length >= 2) { //If rawinput bigger than or equal to 2
            reverse = rawinput[i].split("").reverse().join(""); //Split into letters, reverse and join
            output += "hs" + reverse + "nbsi "; //Add jargen and add to var input 
        }
        else{
            output += rawinput[i].charCodeAt(0) + " "; //Use unicode to define a single letter 
        }
    }
    output = output.replace(/NaN/g, ''); //Incase of any spaces leading to NaN
    document.getElementById('output_user').innerHTML = ("Ecrypted Message: " + output); //To user
}

function decrypt() {
    //Function to decrypt a secret message from the user 
    let ciphertext = prompt("Enter your Cipher Text");
    let output = ''; //Output to be filled later 

    ciphertext = ciphertext.split(" "); //Splits words apart 

    for (let i = 0; i < ciphertext.length; i = i + 1) { //Start from 0, if i is bigger than length, add 1
        ciphertext[i] = ciphertext[i].replace(/hs/g, '').replace(/nbsi/g, ''); //Replaces filler with blank spaces

        if (isNaN(ciphertext[i])) { //If input is not a number. Research source: https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/

            output += ciphertext[i].split("").reverse().join("") + "  "; //Split into letters, reverse and join
        }
        else { //If anything else 
            output += String.fromCharCode(ciphertext[i]) + " "; //Use 'char code' to convert from unicode 
        }
    }
    output = output.replace(/NaN/g, ''); //Incase of any spaces leading to NaN
    document.getElementById('output_user').innerHTML = ("Decrypted Message: " + output); //Output to user throught given text box
}

var myVar;

function sendtext(){
    myVar = setInterval(birthday, 1000);
}

function birthday() {
    let today = new Date().toLocaleDateString()
    let daysleft = "";
    let output = "";
    let timeremain = "";
    let hourremain = "";
    let minuteremain = "";
    var rawshit = new Date();
    daysleft = today.slice(2, 4);
    var hour = rawshit.getHours();
    var minute = rawshit.getMinutes();
    var dayremain = "";

    if (hour == 00 && minute == 00) {
        dayremain = 31 - daysleft;
    }
    else {
        dayremain = 30 - daysleft;
    }

    if (minute > 0) {
        minuteremain = 60 - minute;
        hourremain = 23 - hour;
        if (minuteremain <= 1 && hourremain > 1) {
            timeremain = hourremain + " hours and " + minuteremain + " minute";
        }
        else if (minuteremain > 1 && hourremain > 1) {
            timeremain = hourremain + " hours and " + minuteremain + " minutes";
        }
        else if (hourremain <= 1 && minuteremain > 1) {
            timeremain = hourremain + " hour and " + minuteremain + " minutes";
        }
        else {
            timeremain = hourremain + " hour and " + minuteremain + " minute";
        }
    }
    else {
        minuteremain = 60 - minute;
        hourremain = 24 - hour;
        if (minuteremain <= 1 && hourremain > 1) {
            timeremain = hourremain + " hours and " + minuteremain + " minute";
        }
        else if (minuteremain > 1 && hourremain > 1) {
            timeremain = hourremain + " hours and " + minuteremain + " minutes";
        }
        else if (hourremain <= 1 && minuteremain > 1) {
            timeremain = hourremain + " hour and " + minuteremain + " minutes";
        }
        else {
            timeremain = hourremain + " hour and " + minuteremain + " minute";
        }

    }


    if (minute < 10) {
        output = "Hi ! This is your birthday reminder. The date and time right now is " + today +
            " and " + hour + ":0" + minute + ". Your birthday is in " + dayremain + " days " + timeremain + "! Soon to be sixteen. Reminder from Rudra";
        alert(output);
    }
    else {
        output = "Hi ! This is your birthday reminder. The date and time right now is " + today +
            " and " + hour + ":" + minute + ". Your birthday is in " + dayremain + " days " + timeremain + "! Soon to be sixteen. Reminder from Rudra";
        alert(output);
    }

}
