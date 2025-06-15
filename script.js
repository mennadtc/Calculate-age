function calculateAge() {
    const dayInput = document.getElementById('day').value;
    const monthInput = document.getElementById('month').value;
    const yearInput = document.getElementById('year').value;

    const inputDate = new Date(yearInput, monthInput - 1, dayInput);
    const currentDate = new Date();

    // if (inputDate > currentDate) {
    //     alert("The date entered is in the future. Please enter a valid date.");
    //     return;
    // }

    if(inputDate.getFullYear() < 1900 || inputDate.getFullYear() > 2025) {
        document.querySelector('.year-error').innerText = "Please enter a valid year";
        return;
    }

    if (inputDate.getMonth() < 0 || inputDate.getMonth() > 11) {
        document.querySelector('.month-error').innerText = "Please enter a valid month";
        return;
    }

    if (inputDate.getDate() < 1 || inputDate.getDate() > 31) {
        document.querySelector('.day-error').innerText = "Please enter a valid day";
        return;
    }
    
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

// Example usage
document.getElementById('btn').addEventListener('click', () => {
    const age = calculateAge();
    if (age) {
        document.querySelector('.year').innerText = age.years;
        document.querySelector('.month').innerText = age.months;
        document.querySelector('.day').innerText = age.days;
    }
});