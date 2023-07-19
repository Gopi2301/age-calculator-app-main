const date = new Date();
const presentYear = date.getFullYear();
const presentMonth = date.getMonth() + 1;
const presentDay = date.getDate();
const Button = document.getElementById('submit');
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')

const inputDate = [];


Button.addEventListener('click', (event) => {
    event.preventDefault();
    inputDate.push((inputDay.value), (inputMonth.value), (inputYear.value))
})
