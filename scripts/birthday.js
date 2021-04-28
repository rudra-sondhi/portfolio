var myVar;

function sendtext() {
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
    }
    else {
        output = "Hi Zaynah! This is your birthday reminder. The date and time right now is " + today +
            " and " + hour + ":" + minute + ". Your birthday is in " + dayremain + " days " + timeremain + "! Soon to be sixteen. Reminder from Rudra, who trully hates you, please stfu.";

    }
    document.getElementById('timer').innerHTML = (output);
    document.getElementById('lol').innerHTML = ("Also fuck you");

}