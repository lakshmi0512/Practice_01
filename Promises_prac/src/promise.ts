import { setInterval, getFirstName, getLastName, getEarning, getFirstNameAsPromise, getLastNameAsPromise, getEarningsAsPromise } from './utils';

// setInterval functions defines the delay in getting the resule

setInterval(3000);

var actorFName = "";
var actorLName = "";

// Your job here is to call the async function getFirstNameAsPromise
document.getElementById("start").onclick = function () {
    document.getElementById("fname").innerHTML = '';
    document.getElementById("lname").innerHTML = '';
    document.getElementById("earning").innerHTML = '';
    document.getElementById("msg").innerHTML = '';
    actorFName = (<HTMLInputElement>document.getElementById("actor")).value;
    getFirstNameAsPromise(actorFName)
    .then(handleFNameSuccess)
    .catch(handleFNameFail)

    // Call getFirstNameAsPromise to validate the first name
}

function handleFNameSuccess(fname: string) {

    actorFName = fname;
    document.getElementById("fname").innerHTML = fname;
    document.getElementById("msg").innerHTML = "Got First Name";
    getLastNameAsPromise(actorFName)
    .then(handleLNameSuccess)
    .catch(handleLNameFail)
    // After first name is success, call getSecondName
}

function handleFNameFail(fname: string) {
    document.getElementById("msg").innerHTML = "First Name Not Found";

    // Handle Failure
}

function handleLNameSuccess(lname: string) {

    actorLName = lname;
    document.getElementById("lname").innerHTML = lname;
    document.getElementById("msg").innerHTML = "Got Last Name";
    getEarningsAsPromise(actorFName,actorLName)
    .then(handleEarningSuccess)
    .catch(handleEarningFail)
    // Get Earnings

}

function handleLNameFail(lname: string) {

    document.getElementById("msg").innerHTML = "Last Name Not Found";
    // Handle Failure
}

function handleEarningSuccess(earnings: string) {

    document.getElementById("earning").innerHTML = earnings;
    document.getElementById("msg").innerHTML = "Earnings Found";


}

function handleEarningFail(earnings: string) {

    // Handle Failure
}