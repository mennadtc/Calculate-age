function calculateAge() {
    const dayInput = document.getElementById('day').value;
    const monthInput = document.getElementById('month').value;
    const yearInput = document.getElementById('year').value;

    const currentDate = new Date();
    const inputDate = new Date(yearInput, monthInput - 1, dayInput);

    let years = currentDate.getFullYear() - inputDate.getFullYear();
    let months = currentDate.getMonth() - inputDate.getMonth();
    let days = currentDate.getDate() - inputDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function validateDate(day, month, year) {
    const currentDate = new Date();
    let isValid = true;

    if (year < 1900 || year > currentDate.getFullYear()) {
        document.querySelector('.year-error').innerText = 'Invalid Year';
        document.querySelector('.year-input-container').classList.add('error-message');
        isValid = false;
    }
    else {
        document.querySelector('.year-error').innerText = '';
        document.querySelector('.year-input-container').classList.remove('error-message');
    }

    if (month < 1 || month > 12) {
        document.querySelector('.month-error').innerText = 'Invalid Month';
        document.querySelector('.month-input-container').classList.add('error-message')
        isValid = false;
    } else {
        document.querySelector('.month-error').innerText = '';
        document.querySelector('.month-input-container').classList.remove('error-message');
    }

    if (day < 1 || day > 31) {
        document.querySelector('.day-error').innerText = 'Invalid Day';
        document.querySelector('.day-input-container').classList.add('error-message');
        isValid = false;
    }
    else {
        document.querySelector('.day-error').innerText = '';
        document.querySelector('.day-input-container').classList.remove('error-message');
    }

    return isValid;
}

['year', 'month', 'day'].forEach(item => document.getElementById(item).addEventListener('input', () => {
    const dayInput = parseInt(document.getElementById('day').value, 10);
    const monthInput = parseInt(document.getElementById('month').value, 10);
    const yearInput = parseInt(document.getElementById('year').value, 10);

    validateDate(dayInput, monthInput, yearInput);
}));

document.getElementById('btn').addEventListener('click', () => {
    const age = calculateAge();
    const dayInput = parseInt(document.getElementById('day').value, 10);
    const monthInput = parseInt(document.getElementById('month').value, 10);
    const yearInput = parseInt(document.getElementById('year').value, 10);

    if (validateDate(dayInput, monthInput, yearInput)) {
        document.querySelector('.year').innerText = age.years;
        document.querySelector('.month').innerText = age.months;
        document.querySelector('.day').innerText = age.days;
    }
    else {
        document.querySelector('.year').innerText = '--';
        document.querySelector('.month').innerText = '--';
        document.querySelector('.day').innerText = '--';
    }
});
