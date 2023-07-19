// const { current } = require("@reduxjs/toolkit");

const currentDate = new Date();
const Button = document.getElementById('submit');
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const outputDay = document.querySelector('.card__output--day');
const outputMonth = document.querySelector('.card__output--month');
const outputYear = document.querySelector('.card__output--year');



Button.addEventListener('click', (event) => {
    event.preventDefault();
    let birthday = new Date(0, 0, 0);
    birthday = new Date(inputYear.value, inputMonth.value - 1, inputDay.value);
    if (birthday < currentDate) {
        logic(birthday)
    } else {
        console.log('error');
    }

});

function logic(inputDate) {
    var ageYears = currentDate.getFullYear() - inputDate.getFullYear();

    if (
        currentDate.getMonth() < inputDate.getMonth() ||
        (currentDate.getMonth() === inputDate.getMonth() && currentDate.getDate() < inputDate.getDate())
    ) {
        ageYears--; // Adjust age if birth month and day haven't passed yet
    }

    var ageMonths = currentDate.getMonth() - inputDate.getMonth();
    if (currentDate.getDate() < inputDate.getDate()) {
        ageMonths--; // Adjust months if birth day hasn't passed yet
    }
    if (ageMonths < 0) {
        ageMonths += 12; // Handle negative months by adding 12
    }
    var ageDays = currentDate.getDate() - inputDate.getDate();
    if (ageDays < 0) {
        // Get the last day of the previous month
        var lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        ageDays = lastMonthDate.getDate() - inputDate.getDate() + currentDate.getDate();
    }
    outputDay.innerHTML = ageDays;
    outputMonth.innerHTML = ageMonths;
    outputYear.innerHTML = ageYears;
    console.log("Age: " + ageYears + " years, " + ageMonths + " months, " + ageDays + " days.");
}


