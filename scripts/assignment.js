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
    let rawinput = prompt("Enter your message");
    let output = "";
    rawinput = rawinput.split(" "); // First JS string method used. Split the rawinput into an array of substrings (creates words). 
    for (let i = 0; i < rawinput.length; i++) { //Second JS string method used. Length is used to detemine how many times the loop will run.
        if (rawinput[i].length >= 2) { 
            output += 'CMd2h' + (rawinput[i]).slice(1) + 'i5sd' + (rawinput[i][1]) + (rawinput[i][0]) + "ujhb "; //Third JS string method used. Slice only keeps a specific part of the input
        }
        else {  //If length is anything else 
            output += (rawinput[i][0]) + 'm11Hn ';
        }
    }
    document.getElementById('output_user').innerHTML = ("Ecrypted Message: " + output); //Output to user via HTML
}

function decrypt() {
    //Function to decrypt a secret message from the user 
    let ciphertext = prompt("Enter your Cipher Text");
    let output = ''; //Output to be filled later 

    ciphertext = ciphertext.split(" "); //Splits words apart 

    for (let i = 0; i < ciphertext.length; i = i + 1) {
        ciphertext[i] = ciphertext[i].replace(/CMd2h/g, '').replace(/m11Hn/g, '').replace(/i5sd/g, '').replace(/ujhb/g, ''); //Replaces filler with blank spaces

        if (ciphertext[i].length >= 2) { //If length is equal to or more than 2 

            output += [ciphertext[i].slice(-1)] + [(ciphertext[i]).slice(0, -2)] + ' '; //Output = First letter (now in the back) + rest of the text
        }
        else { //If legnth is anything else 
            output += ciphertext[i][0] + " ";
        }
    }
    document.getElementById('output_user').innerHTML = ("Decrypted Message: " + output); //Output to user throught given text box
}